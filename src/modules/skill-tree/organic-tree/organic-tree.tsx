"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import {
  buildTree,
  hashSeed,
  pickAnchors,
  VH,
  VW,
  type Limb,
  type TreeArt,
} from "./build";

/**
 * NIVEL 1: cada nodo del árbol principal es una HEBRA (gran habilidad), no una
 * habilidad concreta. Todas están abiertas; el color refleja el progreso.
 */
export interface OrganicStrand {
  key: string;
  label: string;
  pct: number;
  state: "completed" | "progress" | "open";
}

interface Palette {
  bg: [string, string, string];
  topGlow: string;
  ground: string;
  bark: (depth: number) => string;
  leaf: (hue: number) => string;
  vignette: string;
}

const DARK: Palette = {
  bg: ["#0a1f16", "#071711", "#040d09"],
  topGlow: "rgba(250,235,180,0.10)",
  ground: "rgba(40,90,50,0.5)",
  bark: (d) => {
    const s = Math.max(0, 60 - d * 4);
    return `rgb(${(58 + s * 0.2) | 0},${(40 + s * 0.15) | 0},${(28 + s * 0.1) | 0})`;
  },
  leaf: (h) => {
    const b = h < 0.5 ? [46, 120, 64] : [70, 150, 86];
    const l = (h * 30) | 0;
    return `rgb(${b[0]! + l},${b[1]! + l},${b[2]! + l})`;
  },
  vignette: "rgba(0,0,0,0.5)",
};

const LIGHT: Palette = {
  bg: ["#eef6ea", "#e4efdf", "#d8e8d2"],
  topGlow: "rgba(255,244,200,0.5)",
  ground: "rgba(120,160,110,0.45)",
  bark: (d) => {
    const s = Math.max(0, 50 - d * 4);
    return `rgb(${(96 + s * 0.2) | 0},${(66 + s * 0.15) | 0},${(46 + s * 0.1) | 0})`;
  },
  leaf: (h) => {
    const b = h < 0.5 ? [74, 142, 84] : [104, 168, 104];
    const l = (h * 26) | 0;
    return `rgb(${b[0]! + l},${b[1]! + l},${b[2]! + l})`;
  },
  vignette: "rgba(20,40,20,0.18)",
};

function bez(
  p0: { x: number; y: number },
  c: { x: number; y: number },
  p1: { x: number; y: number },
  t: number,
) {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * c.x + t * t * p1.x,
    y: u * u * p0.y + 2 * u * t * c.y + t * t * p1.y,
  };
}

function drawLimb(ctx: CanvasRenderingContext2D, l: Limb, color: string) {
  const N = 14;
  const left: { x: number; y: number }[] = [];
  const right: { x: number; y: number }[] = [];
  let prev = l.p0;
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    const pt = bez(l.p0, l.c, l.p1, t);
    const nx = pt.x - prev.x;
    const ny = pt.y - prev.y;
    const len = Math.hypot(nx, ny) || 1;
    const ox = -ny / len;
    const oy = nx / len;
    const w = (l.w0 + (l.w1 - l.w0) * t) / 2;
    left.push({ x: pt.x + ox * w, y: pt.y + oy * w });
    right.push({ x: pt.x - ox * w, y: pt.y - oy * w });
    prev = pt;
  }
  ctx.beginPath();
  ctx.moveTo(left[0]!.x, left[0]!.y);
  for (const p of left) ctx.lineTo(p.x, p.y);
  for (let i = right.length - 1; i >= 0; i--)
    ctx.lineTo(right[i]!.x, right[i]!.y);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function paint(
  ctx: CanvasRenderingContext2D,
  art: TreeArt,
  pal: Palette,
  w: number,
  h: number,
) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, w, h);
  // fondo
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, pal.bg[0]);
  g.addColorStop(0.5, pal.bg[1]);
  g.addColorStop(1, pal.bg[2]);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  const rg = ctx.createRadialGradient(
    w / 2,
    h * 0.12,
    0,
    w / 2,
    h * 0.12,
    w * 0.7,
  );
  rg.addColorStop(0, pal.topGlow);
  rg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, w, h);

  // escalar al espacio virtual
  ctx.setTransform(w / VW, 0, 0, h / VH, 0, 0);

  // suelo
  const eg = ctx.createRadialGradient(
    VW / 2,
    VH - 60,
    10,
    VW / 2,
    VH - 60,
    340,
  );
  eg.addColorStop(0, pal.ground);
  eg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = eg;
  ctx.beginPath();
  ctx.ellipse(VW / 2, VH - 60, 330, 58, 0, 0, 7);
  ctx.fill();

  for (const l of art.limbs) drawLimb(ctx, l, pal.bark(l.depth));

  for (const lf of art.leaves) {
    ctx.save();
    ctx.translate(lf.x, lf.y);
    ctx.rotate(lf.ang + Math.PI / 2);
    ctx.fillStyle = pal.leaf(lf.hue);
    ctx.beginPath();
    ctx.moveTo(0, -lf.r);
    ctx.quadraticCurveTo(lf.r * 0.7, -lf.r * 0.2, 0, lf.r);
    ctx.quadraticCurveTo(-lf.r * 0.7, -lf.r * 0.2, 0, -lf.r);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // viñeta
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const vg = ctx.createRadialGradient(
    w / 2,
    h * 0.45,
    h * 0.32,
    w / 2,
    h * 0.45,
    h * 0.78,
  );
  vg.addColorStop(0, "rgba(0,0,0,0)");
  vg.addColorStop(1, pal.vignette);
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, w, h);
}

export function OrganicTree({
  strands,
  treeSlug,
  grew,
}: {
  strands: OrganicStrand[];
  treeSlug: string;
  /** Clave de la hebra recién avanzada, para celebrar su hoja. */
  grew?: string;
}) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(true);

  const art = useMemo(() => buildTree(hashSeed(treeSlug)), [treeSlug]);

  // Cada hebra se posa en un ancla repartida por la copa.
  const placed = useMemo(() => {
    const anchors = pickAnchors(art, strands.length);
    return strands.map((s, i) => ({
      node: s,
      at: anchors[i] ?? anchors[anchors.length - 1]!,
    }));
  }, [strands, art]);

  useEffect(() => {
    const el = document.documentElement;
    const update = () => setDark(el.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const box = boxRef.current;
    if (!canvas || !box) return;
    const draw = () => {
      const rect = box.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      const ctx = canvas.getContext("2d");
      if (ctx)
        paint(ctx, art, dark ? DARK : LIGHT, canvas.width, canvas.height);
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(box);
    return () => ro.disconnect();
  }, [art, dark]);

  return (
    <div
      ref={boxRef}
      data-testid="organic-tree"
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        aspectRatio: `${VW} / ${VH}`,
        maxHeight: "82vh",
        margin: "0 auto",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />

      {/* Ambiente: luz que respira + motas naturales (estilo bosque). */}
      {!reduce && (
        <>
          <div className="ot-light" aria-hidden />
          <div className="ot-motes" aria-hidden>
            {MOTES.map((m, i) => (
              <span
                key={i}
                style={{
                  left: `${m.x}%`,
                  top: `${m.y}%`,
                  animationDuration: `${m.d}s`,
                  animationDelay: `${m.delay}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Overlay: cada HEBRA es una HOJA abierta con etiqueta y progreso. */}
      {placed.map(({ node, at }, idx) => {
        const left = (at.x / VW) * 100;
        const top = (at.y / VH) * 100;
        const cls =
          node.state === "completed"
            ? "ot-node ot-done"
            : node.state === "progress"
              ? "ot-node ot-progress"
              : "ot-node ot-open";
        const isGrew = grew != null && node.key === grew;
        return (
          <motion.button
            key={node.key}
            type="button"
            title={`${node.label} · ${node.pct}%`}
            aria-label={`${node.label}, ${node.pct}% completado`}
            onClick={() => router.push(`/trees/${treeSlug}/rama/${node.key}`)}
            className={cls}
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: isGrew ? 0.15 : Math.min(1, idx * 0.06),
                  }
            }
          >
            <span
              className="ot-leaf-wrap"
              style={
                reduce
                  ? undefined
                  : {
                      animationDuration: `${4.2 + (idx % 4) * 0.7}s`,
                      animationDelay: `${(idx % 5) * 0.4}s`,
                    }
              }
            >
              {isGrew && !reduce && (
                <>
                  <span className="ot-ring" />
                  <span className="ot-ring ot-ring2" />
                </>
              )}
              <svg className="ot-leaf" viewBox="0 0 24 24" width="26" height="26">
                <path
                  className="ot-blade"
                  d="M12 1.5C5.5 5 2.4 10.4 3.4 20.6c10.2 1 15.6-4.4 16.6-14.4-4.4 0-7.6 1-9.7 4.1-1-4.1 0-7.4 1.7-8.8Z"
                />
                <path
                  className="ot-vein"
                  d="M6 18.5C10.2 14 14.4 9.6 18.4 7.2"
                  fill="none"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="ot-label">
              {node.label}
              {node.pct > 0 && <b> · {node.pct}%</b>}
            </span>
          </motion.button>
        );
      })}

      <style>{`
        .ot-light{position:absolute;left:50%;top:8%;width:70%;height:55%;transform:translateX(-50%);pointer-events:none;
          background:radial-gradient(ellipse at 50% 30%, rgba(190,240,190,.14), rgba(190,240,190,0) 62%);
          animation:stBreathe 7s ease-in-out infinite}
        .ot-motes{position:absolute;inset:0;pointer-events:none}
        .ot-motes span{position:absolute;width:4px;height:4px;border-radius:50%;background:var(--lt-mote,rgba(120,200,140,.5));
          box-shadow:0 0 6px 1px var(--lt-mote,rgba(120,200,140,.5));animation-name:stMote;animation-timing-function:ease-in-out;animation-iteration-count:infinite}
        .ot-node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:5px;border:0;background:transparent;cursor:pointer;padding:0}
        .ot-leaf-wrap{position:relative;display:block;transform-origin:50% 92%;animation-name:stSway;animation-timing-function:ease-in-out;animation-iteration-count:infinite}
        .ot-leaf{display:block;transition:transform .2s ease, filter .2s ease}
        .ot-blade{transition:fill .2s ease}
        .ot-vein{stroke:rgba(255,255,255,.4)}
        .ot-done .ot-blade{fill:#57c878;filter:drop-shadow(0 0 7px rgba(90,220,130,.75))}
        .ot-done .ot-leaf{filter:drop-shadow(0 0 4px rgba(90,220,130,.5))}
        .ot-progress .ot-blade{fill:#8fe0a2;filter:drop-shadow(0 0 6px rgba(140,235,170,.6))}
        .ot-open .ot-blade{fill:#cfe9d6;opacity:.85}
        .ot-open .ot-vein{stroke:rgba(80,120,90,.5)}
        .ot-label{font:600 12px/1.1 system-ui,sans-serif;color:#f4fff7;text-shadow:0 1px 3px rgba(0,0,0,.85);white-space:nowrap;background:rgba(6,20,14,.5);padding:2px 8px;border-radius:999px;backdrop-filter:blur(2px)}
        .ot-label b{font-weight:700;opacity:.85}
        .ot-node:hover .ot-leaf{transform:scale(1.28) rotate(-4deg)}
        .ot-node:focus-visible{outline:2px solid #86e0a0;outline-offset:3px;border-radius:12px}
        .ot-ring{position:absolute;left:50%;top:45%;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;border:2px solid rgba(140,240,170,.9);animation:otRing 1.6s ease-out infinite}
        .ot-ring2{animation-delay:.5s}
        @keyframes otRing{0%{transform:scale(1);opacity:.9}100%{transform:scale(4.5);opacity:0}}
        @media (prefers-reduced-motion: reduce){
          .ot-leaf-wrap{animation:none}
          .ot-ring,.ot-light,.ot-motes{display:none}
        }
      `}</style>
    </div>
  );
}

/** Motas ambientales (posición/tiempo fijos → deterministas y sin re-render). */
const MOTES = [
  { x: 22, y: 40, d: 9, delay: 0 },
  { x: 38, y: 30, d: 11, delay: 2 },
  { x: 55, y: 44, d: 8, delay: 4 },
  { x: 68, y: 34, d: 12, delay: 1 },
  { x: 80, y: 48, d: 10, delay: 3 },
  { x: 47, y: 52, d: 13, delay: 5 },
];
