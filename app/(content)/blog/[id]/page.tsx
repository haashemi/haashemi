import type { Metadata } from "next";

import { allBlogs } from "@hx/content";

export function generateStaticParams() {
  return allBlogs.map((post) => ({
    params: { id: post._meta.path },
  }));
}

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = allBlogs.find((post) => post._meta.path === id)!;

  return {
    title: `${blog.title} | Ali Hashemi`,
    description: blog.description,
  } satisfies Metadata;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blog = allBlogs.find((post) => post._meta.path === id)!;

  return (
    <main className="prose overflow-hidden px-3 prose-zinc prose-invert" style={{ overflowWrap: "break-word" }}>
      <article dangerouslySetInnerHTML={{ __html: blog.html }} />
    </main>
  );
}
