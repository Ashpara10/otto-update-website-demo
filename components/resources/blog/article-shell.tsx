import Link from "next/link";
import type { PortableTextBlock, SanityBlogPost } from "@/lib/sanity/lib/blog";

function getAdjacentPosts(currentPost: SanityBlogPost, posts: SanityBlogPost[]) {
  if (posts.length === 0) {
    return { next: currentPost, related: currentPost };
  }

  const currentIndex = Math.max(
    0,
    posts.findIndex((post) => post.slug === currentPost.slug)
  );

  return {
    next: posts[(currentIndex + 1) % posts.length],
    related: posts[(currentIndex + 2) % posts.length],
  };
}

function getBlockText(block: PortableTextBlock) {
  return (block.children ?? []).map((child) => child.text ?? "").join("");
}

function BlogBody({ blocks }: { blocks: PortableTextBlock[] }) {
  return (
    <div className="mt-10 space-y-6 text-base leading-8 text-muted-foreground">
      {blocks.map((block) => {
        const text = getBlockText(block);

        if (!text) return null;

        if (block.listItem === "bullet") {
          return (
            <ul key={block._key} className="list-disc pl-6">
              <li>{text}</li>
            </ul>
          );
        }

        if (block.style === "h2") {
          return (
            <h2
              key={block._key}
              className="pt-4 text-2xl font-semibold tracking-tight text-heading"
            >
              {text}
            </h2>
          );
        }

        if (block.style === "h3") {
          return (
            <h3
              key={block._key}
              className="pt-2 text-xl font-semibold tracking-tight text-heading"
            >
              {text}
            </h3>
          );
        }

        if (block.style === "blockquote") {
          return (
            <blockquote
              key={block._key}
              className="border-l-2 border-brand pl-5 text-heading"
            >
              {text}
            </blockquote>
          );
        }

        return <p key={block._key}>{text}</p>;
      })}
    </div>
  );
}

export default function ArticleShell({
  post,
  posts,
}: {
  post: SanityBlogPost;
  posts: SanityBlogPost[];
}) {
  const { next, related } = getAdjacentPosts(post, posts);

  return (
    <section className="bg-dark px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/resources/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-brand"
        >
          ← Back to Blog
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>
            Blog {post.number} of {posts.length}
          </span>
          <span>{post.readTime}</span>
          <span>Updated {post.updated}</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-heading sm:text-5xl">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-foreground/85">
          {post.metaDescription}
        </p>

        <div className="mt-8 rounded-xl border border-brand/20 bg-brand/10 p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            TLDR
          </div>
          <p className="mt-4 text-base leading-8 text-foreground/85">
            {post.tldr}
          </p>
        </div>

        <BlogBody blocks={post.body} />

        <div className="mt-10 rounded-xl border border-light-dark bg-light-dark/40 p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
            Keep reading
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Link
              href={`/resources/blog/${next.slug}`}
              className="rounded-lg border border-light-dark bg-dark p-5 transition-colors hover:border-brand/35 hover:bg-light-dark/40"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Read next
              </span>
              <p className="mt-3 text-lg font-medium text-heading">
                {next.title}
              </p>
            </Link>
            <Link
              href={`/resources/blog/${related.slug}`}
              className="rounded-lg border border-light-dark bg-dark p-5 transition-colors hover:border-brand/35 hover:bg-light-dark/40"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Related
              </span>
              <p className="mt-3 text-lg font-medium text-heading">
                {related.title}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
