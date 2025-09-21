import { useState } from "react";
import Link from "next/link";
import { getNoteSlugs } from "@/lib/markdown";

export default function Home({ slugs }: { slugs: string[] }) {
  const [query, setQuery] = useState("");

  const filtered = slugs.filter((slug) =>
    slug.toLocaleLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Onyx</h1>
      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <ul>
        {filtered.map((slug) => (
          <li key={slug}>
            <Link href={`/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: { slugs: getNoteSlugs().map((f) => f.replace(/\.md$/, "")) },
  };
}
