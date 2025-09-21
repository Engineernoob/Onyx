import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import wikiLinkPlugin from "remark-wiki-link";
import { getNoteSlugs, getNoteBySlug } from "@/lib/markdown";

export default function NotePage({ content }: { content: string }) {
  return (
    <div className="prose p-6 max-w-3xl mx-auto">
      <ReactMarkdown remarkPlugins={[wikiLinkPlugin]}>{content}</ReactMarkdown>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getNoteSlugs().map((f) => f.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { note: slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = getNoteBySlug(params?.note as string);
  return { props: { content } };
};
