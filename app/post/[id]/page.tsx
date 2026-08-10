import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { Suspense } from "react";

import { allBlogPosts } from "@/content";

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    params: { id: post._meta.path },
  }));
}

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { id } = await params;
  const post = allBlogPosts.find((v) => v._meta.path === id);

  if (!post) return notFound();

  return {
    title: `${post.title} | Ali Hashemi`,
    description: post.description,
  } satisfies Metadata;
}

async function Page({ params }: BlogPageProps) {
  const { id } = await params;
  const post = allBlogPosts.find((v) => v._meta.path === id);

  if (!post) return notFound();

  return (
    <main className="prose overflow-hidden px-6 py-8 prose-zinc prose-invert" style={{ overflowWrap: "break-word" }}>
      <article dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}

export default async function BlogPostPage(props: BlogPageProps) {
  return (
    <Suspense>
      <Page {...props} />
    </Suspense>
  );
}
