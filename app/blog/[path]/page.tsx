import type { Metadata } from "next";

import { mdxComponents } from "@/app/_components/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allBlogs } from "content-collections";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{ path: string }>;
}

export const generateStaticParams = () => allBlogs.map((work) => ({ path: work._meta.path }));

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { path } = await params;

  const post = allBlogs.find((v) => v._meta.path === path);

  if (!post) notFound();

  return { title: `${post.title} - Ali Hashemi` };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { path } = await params;

  const post = allBlogs.find((v) => v._meta.path === path);

  if (!post) notFound();

  return (
    <main className="prose prose-zinc prose-invert overflow-hidden px-3" style={{ overflowWrap: "break-word" }}>
      <article>
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>
    </main>
  );
}
