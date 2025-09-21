import fs from "fs";
import path from "path";

const notesDir = path.join(process.cwd(), "notes");

export function getNoteSlugs() {
  return fs.readdirSync(notesDir).filter((file) => file.endsWith(".md"));
}

export function getNoteBySlug(slug: string) {
  const filePath = path.join(notesDir, `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  return content;
}
