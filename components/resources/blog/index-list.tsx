import Link from "next/link";
import { getSanityBlogPosts } from "@/lib/sanity/lib/blog";

export default async function IndexList() {
  const blogPosts = await getSanityBlogPosts();

  return (
    <section className="bg-dark  py-14 sm:px-8 sm:py-16">
      <div className="mx-auto grid px-6 md:px-10 max-w-7xl gap-5">
        {blogPosts.length === 0 && (
          <div className="rounded-xl border border-light-dark bg-dark p-6 text-neutral-400">
            No posts published yet.
          </div>
        )}
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/resources/blog/${post.slug}`}
            className="group rounded-xl border border-light-dark bg-dark p-6 transition-colors hover:border-brand/40 hover:bg-light-dark/40"
          >
            <div className="flex flex-wrap items-center gap-3 tracking-tight text-neutral-400">
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-100 transition-colors group-hover:text-brand sm:text-2xl">
              {post.title}
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-neutral-400 sm:text-base">
              {post.tldr}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="font-medium text-brand">
                Read article →
              </span>
              <span className="text-neutral-400">Updated {post.updated}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
