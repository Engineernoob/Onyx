import ReactMarkdown from "react-markdown";
import wikiLinkPlugin from "remark-wiki-link";
import { getNoteSlugs, getNoteBySlug } from "../../lib/markdown";

export async function generateStaticParams() {
  const slugs = getNoteSlugs().map((f) => f.replace(/\.md$/, ""));
  return slugs.map((slug) => ({ note: slug })); // must match [note]
}

export default function NotePage({ params }: { params: { note: string } }) {
  const content = getNoteBySlug(params.note);

  return (
    <div className="prose prose-invert max-w-3xl mx-auto p-6">
      <ReactMarkdown remarkPlugins={[wikiLinkPlugin]}>{content}</ReactMarkdown>
    </div>
  );
}
