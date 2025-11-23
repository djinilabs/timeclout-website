import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllBlogPosts } from "@/lib/blog";
import { format } from "date-fns";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - TimeClout",
  description:
    "Read the latest articles about AI-powered workforce management, scheduling best practices, and productivity tips from the TimeClout team.",
  keywords: [
    "workforce management blog",
    "scheduling tips",
    "AI scheduling",
    "employee scheduling",
    "workforce planning",
  ],
  openGraph: {
    title: "Blog - TimeClout",
    description:
      "Read the latest articles about AI-powered workforce management and scheduling.",
    url: "https://timeclout.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - TimeClout",
    description: "Read the latest articles about AI-powered workforce management.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900 mb-4">
                Blog
              </h1>
              <p className="text-teal-700 md:text-xl max-w-2xl mx-auto">
                Insights, tips, and updates about AI-powered workforce management
              </p>
            </div>

            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-teal-700">No blog posts available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col border rounded-lg overflow-hidden bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300"
                  >
                    {post.image && (
                      <div className="relative w-full aspect-video overflow-hidden bg-teal-50">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-xl font-bold text-teal-900 mb-2 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-teal-700 text-sm mb-4 line-clamp-3 flex-1">
                        {post.summary}
                      </p>
                      <div className="flex items-center justify-between text-sm text-teal-600 mt-auto pt-4 border-t">
                        <span className="font-medium">{post.author}</span>
                        <time dateTime={post.date}>
                          {format(new Date(post.date), "MMM d, yyyy")}
                        </time>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}




