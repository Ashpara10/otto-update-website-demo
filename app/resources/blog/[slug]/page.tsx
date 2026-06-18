import { notFound } from "next/navigation";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";
import ArticleShell from "@/components/resources/blog/article-shell";
import { getSanityBlogPost } from "@/lib/sanity/lib/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post } = await getSanityBlogPost(slug);
  if (!post) return { title: "Not found · Otto Blog" };
  return {
    title: `${post.title} · Otto Blog`,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { post, posts } = await getSanityBlogPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-dark text-heading flex flex-col">
      <Nav />
      <main>
        <ArticleShell post={post} posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
