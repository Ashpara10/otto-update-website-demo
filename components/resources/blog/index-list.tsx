import Link from "next/link";
import { getSanityBlogPosts } from "@/lib/sanity/lib/blog";

export default async function IndexList() {
  const blogPosts = await getSanityBlogPosts();

  return (
    <section className="bg-white  py-14 sm:px-8 sm:py-16">
      <div className="mx-auto grid px-6 md:px-10 max-w-7xl gap-5">
        {blogPosts.length === 0 && (
          <div className="rounded-xl border border-neutral-200 bg-white p-6 text-neutral-600">
            No posts published yet.
          </div>
        )}
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/resources/blog/${post.slug}`}
            className="group rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-green-contrast/40 hover:bg-neutral-50"
          >
            <div className="flex flex-wrap items-center gap-3 tracking-tight text-neutral-500">
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-800 transition-colors group-hover:text-green-contrast sm:text-2xl">
              {post.title}
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-neutral-600 sm:text-base">
              {post.tldr}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm">
              <span className="font-medium text-green-contrast">
                Read article →
              </span>
              <span className="text-neutral-500">Updated {post.updated}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
