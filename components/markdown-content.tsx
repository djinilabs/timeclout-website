"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article className="prose prose-teal max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900 mb-8" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold text-teal-900 mt-8 mb-4" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold text-teal-900 mt-6 mb-3" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-teal-700 mb-4 leading-relaxed" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside text-teal-700 mb-4 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside text-teal-700 mb-4 space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-teal-700" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-teal-600 hover:text-teal-700 underline" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-teal-900" {...props} />
          ),
          code: ({ node, ...props }) => (
            <code className="bg-teal-50 text-teal-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-teal-300 pl-4 italic text-teal-700 my-4" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

