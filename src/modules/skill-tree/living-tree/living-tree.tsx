"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

import type { NodeState } from "@/modules/skill-tree/state";
import { layoutTree, type LeafInput } from "./layout";

export interface LivingTreeNode {
  id: string;
  slug: string;
  title: string;
  xp: number;
  state: NodeState;
  tier: number;
  x: number;
  parents: string[];
}

/** Parte un título en 1–2 líneas cortas para la etiqueta bajo la hoja. */
function wrap(title: string): string[] {
  if (title.length <= 18) return [title];
  const words = title.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > 18 && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 2);
}

// Hoja realista: punta arriba, cuerpo redondeado, con nervadura.
const LEAF_BODY = "M0,-20 C12,-14 13,8 0,20 C-13,8 -12,-14 0,-20 Z";
const LEAF_VEINS =
  "M0,-16 L0,17 M0,-8 L8.5,-13 M0,-8 L-8.5,-13 M0,1 L8,-3 M0,1 L-8,-3 M0,9 L6.5,6 M0,9 L-6.5,6";
// Brote cerrado para las habilidades aún bloqueadas.
const BUD_D = "M0,-11 C5.5,-7 5.5,5 0,11 C-5.5,5 -5.5,-7 0,-11 Z";

function Leaf({
  node,
  reduced,
  onOpen,
}: {
  node: { px: number; py: number } & LivingTreeNode;
  reduced: boolean;
  onOpen: (slug: string) => void;
}) {
  const { state } = node;
  const fill =
    state === "completed"
      ? "url(#leafFull)"
      : state === "available"
        ? "url(#leafOpen)"
        : "var(--lt-leaf-dim)";
  const lines = state === "locked" ? ["Por descubrir"] : wrap(node.title);
  const labelY = state === "locked" ? 24 : 46;

  return (
    <g
      transform={`translate(${node.px} ${node.py})`}
      style={{ cursor: "pointer" }}
      onClick={() => onOpen(node.slug)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(node.slug);
      }}
    >
      {/* Halo de vida: intenso en completadas, tenue e invitador en disponibles. */}
      {state !== "locked" && (
        <motion.circle
          r={state === "completed" ? 34 : 27}
          fill="var(--lt-glow)"
          animate={
            reduced
              ? { opacity: state === "completed" ? 0.65 : 0.3 }
              : {
                  opacity:
                    state === "completed"
                      ? [0.42, 0.72, 0.42]
                      : [0.16, 0.34, 0.16],
                }
          }
          transition={{
            duration: 4,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      )}
      {/* La hoja / brote (aletea sutilmente). */}
      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "50% 92%",
          animation: reduced
            ? undefined
            : `stLeafFlutter ${4 + (node.tier % 4) * 0.7}s ease-in-out ${-(node.tier % 5) * 0.6}s infinite`,
        }}
      >
        <motion.g
          initial={false}
          animate={
            state === "available" && !reduced
              ? { scale: [1, 1.09, 1] }
              : { scale: 1 }
          }
          transition={{
            duration: 2.6,
            repeat: state === "available" && !reduced ? Infinity : 0,
            ease: "easeInOut",
          }}
          style={{ transformBox: "fill-box", transformOrigin: "50% 92%" }}
        >
          {state === "locked" ? (
            <path d={BUD_D} fill="var(--lt-leaf-dim)" opacity={0.55} />
          ) : (
            <>
              <path
                d={LEAF_BODY}
                fill={fill}
                stroke={
                  state === "available" ? "var(--lt-leaf-light)" : "transparent"
                }
                strokeWidth={state === "available" ? 1.6 : 0}
              />
              <path
                d={LEAF_VEINS}
                fill="none"
                stroke="var(--lt-vein)"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </>
          )}
        </motion.g>
      </g>
      {/* Etiqueta. */}
      <text
        y={labelY}
        textAnchor="middle"
        style={{
          fontSize: 15,
          fontWeight: 600,
          fill: "var(--lt-text)",
          opacity: state === "locked" ? 0.5 : 0.95,
        }}
      >
        {lines.map((l, i) => (
          <tspan key={i} x="0" dy={i === 0 ? 0 : 17}>
            {l}
          </tspan>
        ))}
      </text>
      {state !== "locked" && (
        <text
          y={labelY + lines.length * 17}
          textAnchor="middle"
          style={{ fontSize: 12, fill: "var(--lt-text)", opacity: 0.55 }}
        >
          {node.xp} XP
        </text>
      )}
    </g>
  );
}

/** Motas de luz verdes que ascienden muy despacio (profundidad + vida). */
function Motes({ w, h }: { w: number; h: number }) {
  const motes = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        x: (i * 97.13) % w,
        y: h - ((i * 53.7) % (h * 0.7)),
        r: 2 + (i % 3),
        dur: 10 + (i % 5) * 2,
        delay: -(i % 7) * 1.3,
      })),
    [w, h],
  );
  return (
    <g aria-hidden="true">
      {motes.map((m, i) => (
        <motion.circle
          key={i}
          cx={m.x}
          cy={m.y}
          r={m.r}
          fill="var(--lt-mote)"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: -130 }}
          transition={{
            duration: m.dur,
            delay: m.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </g>
  );
}

export function LivingTree({
  nodes,
  treeSlug,
}: {
  nodes: LivingTreeNode[];
  treeSlug: string;
}) {
  const router = useRouter();
  const reduced = !!useReducedMotion();
  const layout = useMemo(() => layoutTree(nodes as LeafInput[]), [nodes]);
  const open = (slug: string) =>
    router.push(`/trees/${treeSlug}/skills/${slug}`);

  const branchColor = (s: NodeState) =>
    s === "locked" ? "var(--lt-bark-dim)" : "url(#bark)";

  return (
    <div
      className="living-tree relative w-full overflow-hidden rounded-2xl"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, var(--lt-bg-glow) 0%, transparent 45%), linear-gradient(180deg, var(--lt-bg-1) 0%, var(--lt-bg-2) 100%)",
        height: "min(78vh, 760px)",
        minHeight: 460,
      }}
    >
      <svg
        viewBox={`0 0 ${layout.width} ${layout.height}`}
        className="block h-full w-full"
        preserveAspectRatio="xMidYMax meet"
        role="img"
        aria-label="Tu árbol de aprendizaje"
      >
        <defs>
          <linearGradient id="bark" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="var(--lt-bark)" />
            <stop offset="100%" stopColor="var(--lt-bark-light)" />
          </linearGradient>
          <radialGradient id="leafFull" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="var(--lt-leaf-light)" />
            <stop offset="100%" stopColor="var(--lt-leaf)" />
          </radialGradient>
          <radialGradient id="leafOpen" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="var(--lt-leaf-open-1)" />
            <stop offset="100%" stopColor="var(--lt-leaf-open-2)" />
          </radialGradient>
        </defs>

        <Motes w={layout.width} h={layout.height} />

        {/* Suelo: halo de vida en la base. */}
        <ellipse
          cx={layout.base.x}
          cy={layout.base.y + 6}
          rx="120"
          ry="16"
          fill="var(--lt-leaf)"
          opacity="0.12"
        />

        {/* Todo el follaje se mece muy suavemente con el viento. */}
        <motion.g
          style={{
            transformBox: "view-box",
            transformOrigin: `${layout.base.x}px ${layout.base.y}px`,
          }}
          animate={reduced ? { rotate: 0 } : { rotate: [-0.5, 0.6, -0.5] }}
          transition={{
            duration: 11,
            repeat: reduced ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Tronco. */}
          <path d={layout.trunk} fill="url(#bark)" />

          {/* Ramas (padre → hoja). Grosor decrece con la profundidad. */}
          {layout.branches.map((b) => (
            <path
              key={b.id}
              d={b.d}
              fill="none"
              stroke={branchColor(b.state)}
              strokeWidth={Math.max(2.5, 9 - b.tier * 1.4)}
              strokeLinecap="round"
              opacity={b.state === "locked" ? 0.4 : 1}
            />
          ))}

          {/* Hojas (habilidades). */}
          {layout.leaves.map((leaf) => (
            <Leaf key={leaf.id} node={leaf} reduced={reduced} onOpen={open} />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}
