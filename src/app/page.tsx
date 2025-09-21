import Link from "next/link";

export default function Home() {
  const sampleNotes = ["SICP", "Resilient-Systems"];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Knowledge Base</h1>

      <p className="mb-4 text-obsidian-muted">
        Welcome! Select a note to get started:
      </p>

      <ul className="list-disc list-inside space-y-2">
        {sampleNotes.map((note) => (
          <li key={note}>
            <Link
              href={`/${note}`}
              className="text-obsidian-accent hover:underline"
            >
              {note}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
