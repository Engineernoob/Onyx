import Link from "next/link";
import { getNoteBySlug, getNoteSlugs } from "../lib/markdown";

export default function Home() {
  const slugs = getNoteSlugs().map((f) => f.replace(/\.md$/, ""));

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Onyx</h1>
      <Link
        href="/graph"
        className="block mb-4 text-obsidian-accent hover:underline"
      >
        📊 View Graph
      </Link>
      <p className="mb-4 text-obsidian-muted">
        Welcome! Select a note or create to get started:
      </p>

      <ul className="list-disc list-inside space-y-2">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              className="text-obsidian-accent hover:underline"
            >
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
