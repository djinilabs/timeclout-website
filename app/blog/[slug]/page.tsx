import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MarkdownContent } from "@/components/markdown-content";
import { getBlogPostBySlug, getAllBlogSlugs, getRelatedBlogPosts } from "@/lib/blog";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - TimeClout Blog",
    };
  }

  const url = `https://timeclout.com/blog/${post.slug}`;
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://timeclout.com${post.image}`
    : "https://timeclout.com/team-1.jpg";

  return {
    title: `${post.title} - TimeClout Blog`,
    description: post.summary,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.summary,
      url: url,
      siteName: "TimeClout",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(params.slug, 3);

  const url = `https://timeclout.com/blog/${post.slug}`;
  const imageUrl = post.image
    ? post.image.startsWith("http")
      ? post.image
      : `https://timeclout.com${post.image}`
    : "https://timeclout.com/team-1.jpg";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    image: imageUrl,
    datePublished: post.date,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TimeClout",
      logo: {
        "@type": "ImageObject",
        url: "https://timeclout.com/timeclout-logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <article>
            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-teal-100 text-teal-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-900 mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-teal-700 mb-8">
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              </div>
            </div>

            <div className="prose-content">
              <MarkdownContent content={post.content} />
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-teal-200">
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-8 md:p-10 text-center">
                <h2 className="text-2xl font-bold text-teal-900 mb-3">
                  Ready to Transform Your Scheduling?
                </h2>
                <p className="text-teal-700 mb-6 max-w-2xl mx-auto">
                  Experience the power of AI-powered workforce management. Join TimeClout's private beta and start saving hours every week with intelligent scheduling automation.
                </p>
                <Link href="/">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white group"
                  >
                    Try TimeClout Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-teal-200">
                <h2 className="text-2xl font-bold text-teal-900 mb-6">
                  Related Articles
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group flex flex-col border rounded-lg overflow-hidden bg-white hover:shadow-lg hover:border-teal-300 transition-all duration-300"
                    >
                      {relatedPost.image && (
                        <div className="relative w-full aspect-video overflow-hidden bg-teal-50">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="flex flex-col flex-1 p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {relatedPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-medium bg-teal-100 text-teal-700 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-teal-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-teal-700 text-sm mb-4 line-clamp-3 flex-1">
                          {relatedPost.summary}
                        </p>
                        <div className="flex items-center justify-between text-sm text-teal-600 mt-auto pt-4 border-t">
                          <span className="font-medium">{relatedPost.author}</span>
                          <time dateTime={relatedPost.date}>
                            {format(new Date(relatedPost.date), "MMM d, yyyy")}
                          </time>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </div>
  );
}

