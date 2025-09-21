"use client";

import dynamic from "next/dynamic";
import { buildGraph } from "@/lib/graph";
import { useState, useEffect } from "react";

const ForceGraph2D = dynamic(
  () => import("react-force-graph").then((mod) => mod.ForceGraph2D),
  { ssr: false }
);

export default function GraphPage() {
  const [data, setData] = useState<{ nodes: any[]; links: any[] }>({
    nodes: [],
    links: [],
  });
  useEffect(() => {
    setData(buildGraph());
  }, []);

  return (
    <main className="p-6 h-screen bg-obsidian-bg text-obsidian-fg">
      <h1 className="text-2xl font-bold mb-4">Graph View</h1>
      <div className="h-[80vh] border border-obsidian-muted rounded">
        <ForceGraph2D
          graphData={data}
          nodeAutoColorBy="id"
          linkDirectionalArrowLength={4}
          nodeLabel="id"
        />
      </div>
    </main>
  );
}
