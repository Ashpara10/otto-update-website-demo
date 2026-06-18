import Link from "next/link";
import { Nav } from "@/components/landing/nav";
import { Footer } from "@/components/landing/footer";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-dark text-neutral-100 flex flex-col">
      <Nav />
      <main className="flex-1 px-5 py-32 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            404
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
            Post not found
          </h1>
          <p className="mt-6 text-base text-neutral-400">
            The article you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/resources/blog"
            className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-base font-semibold text-neutral-100 transition-opacity hover:opacity-90"
          >
            Back to Blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
