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
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900 mb-6 mt-8 first:mt-0" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold text-teal-900 mt-10 mb-4 first:mt-0" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-bold text-teal-900 mt-8 mb-3 first:mt-0" {...props} />
          ),
          h4: ({ node, ...props }) => (
            <h4 className="text-lg font-bold text-teal-900 mt-6 mb-2 first:mt-0" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-teal-700 mb-4 leading-relaxed text-base" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-outside text-teal-700 mb-4 ml-6 space-y-2" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-outside text-teal-700 mb-4 ml-6 space-y-2" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-teal-700 leading-relaxed" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-teal-600 hover:text-teal-700 underline font-medium" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-teal-900" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic text-teal-700" {...props} />
          ),
          code: ({ node, className, ...props }: any) => {
            const isInline = !className || !className.includes("language");
            return isInline ? (
              <code className="bg-teal-50 text-teal-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
            ) : (
              <code className={className} {...props} />
            );
          },
          pre: ({ node, ...props }) => (
            <pre className="bg-teal-50 text-teal-800 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4 border border-teal-200" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-teal-300 pl-4 italic text-teal-700 my-6" {...props} />
          ),
          hr: ({ node, ...props }) => (
            <hr className="border-t border-teal-200 my-8" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-8 -mx-4 md:mx-0">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border border-teal-200 rounded-lg">
                  <table className="min-w-full divide-y divide-teal-200" {...props} />
                </div>
              </div>
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-teal-100" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="bg-white divide-y divide-teal-200" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-teal-50 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-4 py-3 text-left text-xs font-bold text-teal-900 uppercase tracking-wider" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-4 py-3 text-sm text-teal-700" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}

