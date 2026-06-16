import { client } from "./client";

type PortableTextSpan = {
  _type: "span";
  text?: string;
};

export type PortableTextBlock = {
  _key: string;
  _type: "block";
  style?: string;
  listItem?: string;
  children?: PortableTextSpan[];
};

export type SanityAuthor = {
  name: string;
  slug: string;
  image?: {
    asset: {
      url: string;
    };
  };
  bio?: PortableTextBlock[];
};

export type SanityBlogPost = {
  slug: string;
  number: number;
  readTime: string;
  updated: string;
  title: string;
  metaDescription: string;
  tldr: string;
  body: PortableTextBlock[];
  author?: SanityAuthor;
  publishedAt?: string;
};

type SanityPostResult = {
  slug: string;
  title?: string;
  publishedAt?: string;
  updatedAt?: string;
  body?: PortableTextBlock[];
  author?: {
    name: string;
    slug: { current: string };
    image?: {
      asset: {
        url: string;
      };
    };
    bio?: PortableTextBlock[];
  };
};

const postsQuery = `*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
  "slug": slug.current,
  title,
  publishedAt,
  "updatedAt": _updatedAt,
  body,
  author->{
    name,
    slug,
    image,
    bio
  }
}`;

const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  publishedAt,
  "updatedAt": _updatedAt,
  body,
  author->{
    name,
    slug,
    image,
    bio
  }
}`;

function getPlainText(blocks: PortableTextBlock[] = []) {
  return blocks
    .filter((block) => block._type === "block")
    .flatMap((block) => block.children ?? [])
    .map((child) => child.text ?? "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength).trim();
  const lastSpace = truncated.lastIndexOf(" ");

  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}...`;
}

function formatUpdatedDate(date?: string) {
  if (!date) return "Recently";

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function getReadTime(text: string) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

function normalizePost(post: SanityPostResult, index: number): SanityBlogPost {
  const body = post.body ?? [];
  const plainText = getPlainText(body);
  const fallbackTitle = "Untitled post";

  const author = post.author
    ? {
        name: post.author.name,
        slug:
          typeof post.author.slug === "object"
            ? post.author.slug.current
            : post.author.slug,
        image: post.author.image,
        bio: post.author.bio,
      }
    : undefined;

  return {
    slug: post.slug,
    number: index + 1,
    readTime: getReadTime(plainText),
    updated: formatUpdatedDate(post.publishedAt ?? post.updatedAt),
    title: post.title ?? fallbackTitle,
    metaDescription: truncateText(plainText, 160) || post.title || fallbackTitle,
    tldr: truncateText(plainText, 360) || "No summary available yet.",
    body,
    author,
    publishedAt: post.publishedAt,
  };
}

export async function getSanityBlogPosts() {
  const posts = await client.fetch<SanityPostResult[]>(
    postsQuery,
    {},
    { next: { revalidate: 60 } }
  );

  return posts.map(normalizePost);
}

export async function getSanityBlogPost(slug: string) {
  const [post, posts] = await Promise.all([
    client.fetch<SanityPostResult | null>(
      postBySlugQuery,
      { slug },
      { next: { revalidate: 60 } }
    ),
    getSanityBlogPosts(),
  ]);

  if (!post) {
    return { post: null, posts };
  }

  const index = posts.findIndex((item) => item.slug === slug);

  return {
    post: normalizePost(post, index >= 0 ? index : 0),
    posts,
  };
}
