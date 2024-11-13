import type { Metadata } from "next";

import { mdxComponents } from "@/app/_components/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allBlogs } from "content-collections";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: { path: string };
}

export const generateStaticParams = () => allBlogs.map((work) => ({ path: work._meta.path }));

export function generateMetadata({ params: { path } }: BlogPageProps): Metadata {
  const post = allBlogs.find((v) => v._meta.path === path);

  if (!post) notFound();

  return { title: `${post.title} - Ali Hashemi` };
}

export default function BlogPage({ params: { path } }: BlogPageProps) {
  const post = allBlogs.find((v) => v._meta.path === path);

  if (!post) notFound();

  return (
    <main className="prose prose-zinc prose-invert px-3">
      <article>
        <MDXContent code={post.mdx} components={mdxComponents} />
      </article>
    </main>
  );
}
