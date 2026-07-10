"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import type { NodeState } from "@/modules/skill-tree/state";
import {
  buildTree,
  hashSeed,
  pickAnchors,
  VH,
  VW,
  type Limb,
  type TreeArt,
} from "./build";

export interface OrganicTreeNode {
  id: string;
  slug: string;
  title: string;
  state: NodeState;
  tier: number;
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
  nodes,
  treeSlug,
  grew,
}: {
  nodes: OrganicTreeNode[];
  treeSlug: string;
  /** Slug de la habilidad recién completada, para celebrar su hoja. */
  grew?: string;
}) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(true);

  const art = useMemo(() => buildTree(hashSeed(treeSlug)), [treeSlug]);

  // Habilidades ordenadas por nivel → anclas de dentro/abajo hacia fuera/arriba.
  const placed = useMemo(() => {
    const ordered = [...nodes].sort((a, b) => a.tier - b.tier);
    const anchors = pickAnchors(art, ordered.length);
    return ordered.map((n, i) => ({
      node: n,
      at: anchors[i] ?? anchors[anchors.length - 1]!,
    }));
  }, [nodes, art]);

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

      {/* Overlay interactivo: cada habilidad es una hoja que brota sobre la copa. */}
      {placed.map(({ node, at }, idx) => {
        const left = (at.x / VW) * 100;
        const top = (at.y / VH) * 100;
        const cls =
          node.state === "completed"
            ? "ot-leaf ot-done"
            : node.state === "available"
              ? "ot-leaf ot-open"
              : "ot-leaf ot-locked";
        const isGrew = grew != null && node.slug === grew;
        return (
          <motion.button
            key={node.id}
            type="button"
            title={node.title}
            aria-label={node.title}
            onClick={() => router.push(`/trees/${treeSlug}/skills/${node.slug}`)}
            className={cls}
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={
              reduce
                ? { duration: 0 }
                : isGrew
                  ? { type: "spring", stiffness: 260, damping: 12, delay: 0.15 }
                  : {
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: Math.min(1.2, idx * 0.02),
                    }
            }
          >
            {/* Celebración: anillos de luz verde en la hoja recién completada. */}
            {isGrew && !reduce && (
              <>
                <span className="ot-ring" />
                <span className="ot-ring ot-ring2" />
              </>
            )}
          </motion.button>
        );
      })}

      <style>{`
        .ot-leaf{position:absolute;transform:translate(-50%,-50%);width:22px;height:22px;border:0;border-radius:50%;cursor:pointer;padding:0;background:transparent}
        .ot-leaf::after{content:"";position:absolute;inset:5px;border-radius:50%;transition:transform .2s ease, box-shadow .2s ease}
        .ot-done::after{background:radial-gradient(circle at 40% 35%, #b9f6c8, #3fae63);box-shadow:0 0 10px 2px rgba(120,240,150,.6)}
        .ot-open::after{background:radial-gradient(circle at 40% 35%, #eafff0, #86e0a0);box-shadow:0 0 14px 4px rgba(140,240,170,.7);animation:otPulse 2.6s ease-in-out infinite}
        .ot-locked::after{background:rgba(200,220,205,.28)}
        .ot-leaf:hover::after{transform:scale(1.55)}
        .ot-leaf:focus-visible{outline:2px solid #86e0a0;outline-offset:2px;border-radius:50%}
        .ot-ring{position:absolute;inset:0;border-radius:50%;border:2px solid rgba(140,240,170,.9);animation:otRing 1.6s ease-out infinite}
        .ot-ring2{animation-delay:.5s}
        @keyframes otPulse{0%,100%{box-shadow:0 0 10px 3px rgba(140,240,170,.45)}50%{box-shadow:0 0 18px 6px rgba(140,240,170,.85)}}
        @keyframes otRing{0%{transform:scale(1);opacity:.9}100%{transform:scale(4.5);opacity:0}}
        @media (prefers-reduced-motion: reduce){.ot-open::after{animation:none}.ot-ring{display:none}}
      `}</style>
    </div>
  );
}
