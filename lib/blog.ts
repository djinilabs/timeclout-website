import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const blogDirectory = path.join(process.cwd(), "content/blog");

export function getAllBlogPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || fileName.replace(/\.md$/, ""),
        title: data.title || "",
        author: data.author || "",
        date: data.date || "",
        summary: data.summary || "",
        image: data.image || "",
        tags: data.tags || [],
        content: content,
      } as BlogPost;
    })
    .filter((post) => post.title && post.slug) // Filter out invalid posts
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return allPostsData;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug || slug,
      title: data.title || "",
      author: data.author || "",
      date: data.date || "",
      summary: data.summary || "",
      image: data.image || "",
      tags: data.tags || [],
      content: content,
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogSlugs(): string[] {
  const posts = getAllBlogPosts();
  return posts.map((post) => post.slug);
}

export function getRelatedBlogPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  
  if (!currentPost) {
    return [];
  }

  const allPosts = getAllBlogPosts();
  
  // Filter out current post and find posts with shared tags
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      // Calculate number of shared tags
      const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag));
      return {
        post,
        sharedTagCount: sharedTags.length,
      };
    })
    .filter((item) => item.sharedTagCount > 0) // Only posts with at least one shared tag
    .sort((a, b) => {
      // Sort by number of shared tags (descending), then by date (descending)
      if (b.sharedTagCount !== a.sharedTagCount) {
        return b.sharedTagCount - a.sharedTagCount;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, limit)
    .map((item) => item.post);

  return relatedPosts;
}




