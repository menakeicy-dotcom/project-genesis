"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Background,
  Controls,
  Handle,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { Check, Lock } from "lucide-react";

import "@xyflow/react/dist/style.css";
import type { NodeState } from "@/modules/skill-tree/state";
import { cn } from "@/lib/utils";

export interface SkillNodeData extends Record<string, unknown> {
  title: string;
  xp: number;
  state: NodeState;
  slug: string;
}

/** Nodo personalizado con aspecto según su estado (bloqueado/disponible/hecho). */
function SkillNode({ data }: NodeProps<Node<SkillNodeData>>) {
  const { title, xp, state } = data;
  return (
    <div
      className={cn(
        "w-40 cursor-pointer rounded-lg border-2 px-3 py-2 text-center shadow-sm transition-colors",
        state === "completed" && "border-growth bg-growth/10 text-foreground",
        state === "available" &&
          "border-primary bg-card text-foreground hover:bg-primary/5",
        state === "locked" &&
          "border-border bg-muted text-muted-foreground opacity-70",
      )}
    >
      <Handle type="target" position={Position.Top} className="!bg-border" />
      <div className="flex items-center justify-center gap-1 text-sm font-medium">
        {state === "completed" && <Check className="text-growth size-4" />}
        {state === "locked" && <Lock className="size-3.5" />}
        <span className="line-clamp-2">{title}</span>
      </div>
      <div className="mt-1 text-xs opacity-70">{xp} XP</div>
      <Handle type="source" position={Position.Bottom} className="!bg-border" />
    </div>
  );
}

const nodeTypes = { skill: SkillNode };

export function SkillTreeCanvas({
  nodes: nodeData,
  edges,
  treeSlug,
}: {
  nodes: {
    id: string;
    title: string;
    xp: number;
    state: NodeState;
    slug: string;
    x: number;
    y: number;
  }[];
  edges: { id: string; source: string; target: string }[];
  treeSlug: string;
}) {
  const router = useRouter();

  const rfNodes: Node<SkillNodeData>[] = useMemo(
    () =>
      nodeData.map((n) => ({
        id: n.id,
        type: "skill",
        position: { x: n.x, y: n.y },
        data: { title: n.title, xp: n.xp, state: n.state, slug: n.slug },
      })),
    [nodeData],
  );

  const rfEdges: Edge[] = useMemo(
    () =>
      edges.map((e) => ({
        id: e.id,
        source: e.source,
        target: e.target,
        animated: false,
      })),
    [edges],
  );

  const onNodeClick = useCallback(
    (_: unknown, node: Node<SkillNodeData>) => {
      router.push(`/trees/${treeSlug}/skills/${node.data.slug}`);
    },
    [router, treeSlug],
  );

  return (
    <div className="border-border bg-background h-[600px] w-full overflow-hidden rounded-lg border">
      <ReactFlow
        nodes={rfNodes}
        edges={rfEdges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        nodesDraggable={false}
        nodesConnectable={false}
        fitView
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}
