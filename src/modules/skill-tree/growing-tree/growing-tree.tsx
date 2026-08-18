"use client";

import { useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";

/**
 * ÁRBOL QUE CRECE — visual de una gran habilidad (rama).
 *
 * Un solo árbol con esqueleto FIJO (ramas + hojas en coordenadas deterministas)
 * que se revela conforme avanza el progreso: las ramas se extienden y, cuando
 * llegan, abren sus hojas (la hoja nunca aparece antes que su rama). Algunas
 * hojas llevan el NOMBRE de una tarea (habilidad) y enlazan a ella.
 *
 * El dibujo se construye de forma imperativa dentro de un <svg> (una sola vez al
 * montar / al cambiar el progreso) para animar el crecimiento con fluidez sin
 * reconciliar cientos de nodos en cada fotograma. Es determinista (semilla =
 * slug de la rama), así que servidor y cliente coinciden.
 */

export type TreeSkill = {
  slug: string;
  title: string;
  state: "completed" | "available" | "locked";
};

const NS = "http://www.w3.org/2000/svg";
const VW = 600;
const VH = 720;
const TOTAL = 12;
const GROUND_Y = 594;
const BARK = ["#5A4A38", "#63523E", "#6B5A45", "#75644E", "#7E6C55"];
const GREENS = ["#2f7d47", "#3f9a5e", "#4fb570", "#68c187"];
const LEAF = "M0 0 C 7 -11, 22 -15, 30 -8 C 23 5, 8 7, 0 0 Z";

type Seg = {
  x: number;
  y: number;
  cx: number;
  cy: number;
  ex: number;
  ey: number;
  w: number;
  appear: number;
  depth: number;
};
type Leaf = {
  seg: number;
  u: number;
  ang: number;
  size: number;
  appear: number;
  g: string;
  free?: boolean;
};

function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hashSeed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function buildTree(seed: number) {
  const r = makeRng(seed);
  const segs: Seg[] = [];
  const leaves: Leaf[] = [];
  function branch(
    x: number,
    y: number,
    ang: number,
    len: number,
    w: number,
    depth: number,
    appear: number,
  ) {
    const rad = (ang * Math.PI) / 180;
    const perp = ((ang + 90) * Math.PI) / 180;
    const bend = (r() - 0.5) * (34 - depth * 5);
    const cx = x + Math.cos(rad) * len * 0.5 + Math.cos(perp) * bend;
    const cy = y + Math.sin(rad) * len * 0.5 + Math.sin(perp) * bend;
    const ex = x + Math.cos(rad) * len;
    const ey = y + Math.sin(rad) * len;
    const id = segs.length;
    segs.push({ x, y, cx, cy, ex, ey, w, appear, depth });
    if (depth >= 1) {
      const cnt = depth <= 2 ? 4 : 9;
      for (let i = 0; i < cnt; i++)
        leaves.push({
          seg: id,
          u: 0.3 + r() * 0.68,
          ang: ang + (r() - 0.5) * 168,
          size: (depth <= 2 ? 1.25 : 0.95) + r() * 0.45,
          appear: appear + 1 + Math.floor(r() * 3),
          g: GREENS[Math.floor(r() * GREENS.length)]!,
        });
    }
    if (depth === 0) {
      leaves.push({ seg: id, u: 0.3, ang: 172, size: 1.05, appear: 1, g: "#4fb570", free: true });
      leaves.push({ seg: id, u: 0.3, ang: 8, size: 1.05, appear: 1, g: "#68c187", free: true });
      leaves.push({ seg: id, u: 0.62, ang: 158, size: 1.15, appear: 2, g: "#3f9a5e", free: true });
      leaves.push({ seg: id, u: 0.62, ang: 22, size: 1.15, appear: 2, g: "#4fb570", free: true });
    }
    if (depth < 4) {
      const n = depth === 0 ? 3 : r() < 0.4 ? 3 : 2;
      const spread = depth === 0 ? 36 : 30;
      for (let i = 0; i < n; i++) {
        const a = ang + (i - (n - 1) / 2) * spread + (r() - 0.5) * 16;
        branch(
          ex,
          ey,
          a,
          len * (0.72 + r() * 0.12),
          w * 0.6,
          depth + 1,
          appear + (depth === 0 ? 2 : depth === 1 ? 2 : 1),
        );
      }
    }
  }
  branch(300, GROUND_Y + 2, -90, 148, 26, 0, 1);
  return { segs, leaves };
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
function partial(s: Seg, t: number) {
  const ax = lerp(s.x, s.cx, t),
    ay = lerp(s.y, s.cy, t);
  const bx = lerp(s.cx, s.ex, t),
    by = lerp(s.cy, s.ey, t);
  const px = lerp(ax, bx, t),
    py = lerp(ay, by, t);
  return `M${s.x.toFixed(1)} ${s.y.toFixed(1)} Q ${ax.toFixed(1)} ${ay.toFixed(1)} ${px.toFixed(1)} ${py.toFixed(1)}`;
}
function quadPoint(s: Seg, u: number) {
  const ax = lerp(s.x, s.cx, u),
    ay = lerp(s.y, s.cy, u);
  const bx = lerp(s.cx, s.ex, u),
    by = lerp(s.cy, s.ey, u);
  return { x: lerp(ax, bx, u), y: lerp(ay, by, u) };
}
function el(tag: string, attrs: Record<string, string | number>) {
  const n = document.createElementNS(NS, tag);
  for (const k in attrs) n.setAttribute(k, String(attrs[k]));
  return n;
}

export function GrowingTree({
  skills,
  treeSlug,
  branch,
  completed,
  total,
}: {
  skills: TreeSkill[];
  treeSlug: string;
  branch: string;
  completed: number;
  total: number;
}) {
  const router = useRouter();
  const svgRef = useRef<SVGSVGElement>(null);
  const tree = useMemo(() => buildTree(hashSeed(branch)), [branch]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const M = skills.length;

    // Reparte cada tarea en una hoja (orden de aparición → de dentro hacia fuera).
    const nonFree = tree.leaves
      .map((l, idx) => ({ l, idx }))
      .filter((o) => !o.l.free)
      .sort((a, b) => a.l.appear - b.l.appear || a.idx - b.idx);
    const taskLeafIdx: number[] = [];
    const usedPos = new Set<number>();
    for (let i = 0; i < M && nonFree.length > 0; i++) {
      let pos = M > 1 ? Math.round((i / (M - 1)) * (nonFree.length - 1)) : 0;
      while (usedPos.has(pos) && pos < nonFree.length - 1) pos++;
      usedPos.add(pos);
      taskLeafIdx.push(nonFree[pos]!.idx);
    }
    const taskSet = new Set(taskLeafIdx);
    const taskLeaf = taskLeafIdx.map((idx, i) => {
      const l = tree.leaves[idx]!;
      const s = tree.segs[l.seg]!;
      const grow = s.depth === 0 ? 3 : 2;
      const revealF = Math.max(l.appear, s.appear + l.u * grow - 1);
      return { l, s, revealF, skill: skills[i]! };
    });

    function frame(f: number) {
      while (svg!.firstChild) svg!.removeChild(svg!.firstChild);
      const g = f / (TOTAL - 1);
      // silueta fantasma (lo que falta)
      for (const s of tree.segs)
        svg!.append(
          el("path", {
            d: `M${s.x.toFixed(1)} ${s.y.toFixed(1)} Q ${s.cx.toFixed(1)} ${s.cy.toFixed(1)} ${s.ex.toFixed(1)} ${s.ey.toFixed(1)}`,
            stroke: "currentColor",
            "stroke-width": Math.max(2, s.w * 0.8).toFixed(1),
            opacity: 0.05,
          }),
        );
      // suelo + pasto
      svg!.append(
        el("path", {
          d: "M60 596 C 190 590, 330 602, 452 592 C 508 588, 552 594, 570 592",
          stroke: "#7a8a5f",
          "stroke-width": 3,
          opacity: 0.8,
        }),
      );
      svg!.append(
        el("path", {
          d: "M118 594 c -5 -16, 1 -25, 6 -31 M130 594 c 4 -13, 11 -19, 18 -23 M470 592 c -5 -16, -1 -25, 4 -31 M482 592 c 5 -12, 12 -18, 19 -21",
          stroke: "#5aa06a",
          "stroke-width": 3.5,
          opacity: 0.85,
        }),
      );
      for (const rt of [
        { d: "M300 596 C 302 618, 296 634, 288 646", w: 5, op: 0.55 },
        { d: "M300 600 C 278 614, 262 626, 250 642", w: 3.5, op: 0.45 },
        { d: "M302 600 C 322 614, 340 626, 352 642", w: 3.5, op: 0.45 },
      ])
        svg!.append(
          el("path", {
            d: rt.d,
            stroke: "#7a6a4d",
            "stroke-width": (rt.w * (0.4 + 0.6 * g)).toFixed(1),
            opacity: (rt.op * (0.5 + 0.5 * g)).toFixed(2),
          }),
        );
      if (f < 0.5) {
        svg!.append(
          el("path", {
            d: "M300 604 C 314 608, 320 624, 310 634 C 298 644, 284 638, 282 624 C 281 611, 290 602, 300 604 Z",
            fill: "#8A6A42",
            stroke: "#5A4A38",
            "stroke-width": 2,
          }),
        );
        svg!.append(
          el("path", {
            d: "M300 604 C 300 596, 302 590, 306 586",
            fill: "none",
            stroke: "#4fb570",
            "stroke-width": 4,
          }),
        );
      }
      // ramas
      for (const s of tree.segs) {
        if (f < s.appear) continue;
        const grow = s.depth === 0 ? 3 : 2;
        const t = Math.min(1, (f - s.appear + 1) / grow);
        const mature = Math.min(1, Math.max(0, (f - s.appear) / Math.max(1, TOTAL - 1 - s.appear)));
        svg!.append(
          el("path", {
            d: partial(s, t),
            stroke: BARK[s.depth]!,
            "stroke-width": (s.w * (0.34 + 0.66 * mature)).toFixed(1),
          }),
        );
      }
      // follaje verde (hoja siempre después de su rama); saltamos las hojas-tarea
      const canopy = el("g", { class: "gt-canopy" });
      (canopy as SVGGElement).style.transformOrigin = "300px 594px";
      tree.leaves.forEach((l, idx) => {
        if (taskSet.has(idx)) return;
        if (f < l.appear) return;
        const s = tree.segs[l.seg]!;
        const grow = s.depth === 0 ? 3 : 2;
        const st = Math.min(1, (f - s.appear + 1) / grow);
        if (!l.free && l.u > st) return;
        const open = Math.min(1, (f - l.appear + 1) / 2);
        let fade = 1;
        if (l.free) {
          if (f >= 7) return;
          fade = f <= 4 ? 1 : (7 - f) / 3;
        }
        const p = quadPoint(s, l.u);
        const grp = el("g", {
          transform: `translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) rotate(${l.ang.toFixed(1)}) scale(${(l.size * (0.45 + 0.55 * open)).toFixed(2)})`,
          opacity: ((0.65 + 0.35 * open) * fade).toFixed(2),
        });
        grp.append(el("path", { d: LEAF, fill: l.g }));
        canopy.append(grp);
      });
      svg!.append(canopy);
      // hojas-tarea con nombre (verde a juego); solo si su rama ya llegó
      for (const tl of taskLeaf) {
        if (tl.skill.state === "locked") continue;
        if (f < tl.revealF - 0.01) continue;
        const p = quadPoint(tl.s, tl.l.u);
        const base = `translate(${p.x.toFixed(1)},${p.y.toFixed(1)}) rotate(${tl.l.ang.toFixed(1)})`;
        const node = el("g", { class: "gt-node", tabindex: 0, role: "button" });
        node.append(el("circle", { cx: p.x, cy: p.y, r: 18, fill: "transparent" }));
        if (tl.skill.state === "available")
          node.append(
            el("circle", {
              cx: p.x,
              cy: p.y,
              r: 15,
              fill: "none",
              stroke: "var(--gt-avail)",
              "stroke-width": 1.6,
              opacity: 0.55,
            }),
          );
        const gg = el("g", { transform: `${base} scale(${(tl.l.size * 1.05).toFixed(2)})` });
        if (tl.skill.state === "completed")
          gg.append(el("path", { d: LEAF, fill: "var(--gt-task)", stroke: "var(--gt-taskEdge)", "stroke-width": 1.2 }));
        else
          gg.append(el("path", { d: LEAF, fill: "var(--gt-bud)", stroke: "var(--gt-avail)", "stroke-width": 2.4 }));
        node.append(gg);
        const left = p.x < 300;
        const lx = p.x + (left ? -13 : 13);
        const txt = el("text", {
          class: "gt-label",
          x: lx.toFixed(1),
          y: (p.y + 4).toFixed(1),
          "text-anchor": left ? "end" : "start",
          fill: "var(--gt-label)",
          stroke: "var(--gt-halo)",
          "stroke-width": 4.5,
          "paint-order": "stroke",
          "stroke-linejoin": "round",
        });
        txt.textContent = tl.skill.title;
        node.append(txt);
        const title = el("title", {});
        title.textContent = `${tl.skill.title} · ${tl.skill.state === "completed" ? "completada" : "disponible"}`;
        node.append(title);
        const go = () => router.push(`/trees/${treeSlug}/skills/${tl.skill.slug}`);
        node.addEventListener("click", go);
        node.addEventListener("keydown", (e) => {
          const ev = e as KeyboardEvent;
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            go();
          }
        });
        svg!.append(node);
      }
    }

    const target = total > 0 ? Math.min(TOTAL - 1, (completed / total) * (TOTAL - 1)) : 0;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      frame(target);
      return;
    }

    let raf = 0;
    const t0 = performance.now();
    const dur = 1100;
    const easeInOut = (k: number) =>
      k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    let lastQ = -1;
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / dur);
      const f = target * easeInOut(k);
      const q = Math.round(f * 4); // limita reconstrucciones (~fps del crecimiento)
      if (q !== lastQ) {
        lastQ = q;
        frame(f);
      }
      if (k < 1) raf = requestAnimationFrame(step);
      else frame(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [tree, skills, completed, total, treeSlug, router]);

  return (
    <div className="gt-wrap text-foreground relative w-full">
      <style>{GT_CSS}</style>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VW} ${VH}`}
        className="mx-auto block h-auto w-full max-w-md"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Árbol de la habilidad que crece con tus tareas"
      />
    </div>
  );
}

const GT_CSS = `
.gt-wrap{--gt-task:#1f5a34;--gt-taskEdge:#20603a;--gt-bud:#eef4ea;--gt-avail:#2f8f57;--gt-label:#184d2b;--gt-halo:#eef4ea;}
.dark .gt-wrap{--gt-task:#bff0cd;--gt-taskEdge:#a9e2ba;--gt-bud:#152016;--gt-avail:#6fce8c;--gt-label:#d6f4de;--gt-halo:#152016;}
.gt-label{font-weight:800;font-size:15px;font-family:inherit}
.gt-node{cursor:pointer}
.gt-node:focus-visible{outline:2px solid var(--gt-avail);outline-offset:2px;border-radius:8px}
.gt-canopy{animation:gt-sway 6s ease-in-out infinite}
@keyframes gt-sway{0%,100%{transform:rotate(-0.8deg)}50%{transform:rotate(0.8deg)}}
@media (prefers-reduced-motion: reduce){.gt-canopy{animation:none}}
`;
