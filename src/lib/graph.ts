import fs from "fs";
import path from "path";

const notesDir = path.join(process.cwd(), "notes");

// Load all notes
export function getNotes() {
  return fs
    .readdirSync(notesDir)
    .filter((file) => file.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

//Get note content
export function getNoteContent(slug: string) {
  const filePath = path.join(notesDir, `${slug}.md`);
  return fs.readFileSync(filePath, "utf-8");
}

// Extract [[links]]
function extractLinks(content: string): string[] {
  const matches = content.match(/\[\[([^\]]+)\]\]/g) || [];
  return matches.map((m) => m.replace(/\[\[|\]\]/g, ""));
}

// Build graph data
export function buildGraph() {
  const notes = getNotes();
  const nodes = notes.map((id) => ({ id }));
  const links: { source: string; target: string }[] = [];

  notes.forEach((note) => {
    const content = getNoteContent(note);
    const linkedNotes = extractLinks(content);
    linkedNotes.forEach((target) => {
      if (notes.includes(target)) {
        links.push({ source: note, target });
      }
    });
  });
  return { nodes, links };
}
