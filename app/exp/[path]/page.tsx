import type { Metadata } from "next";

import { mdxComponents } from "@/app/_components/mdx-components";
import { MDXContent } from "@content-collections/mdx/react";
import { allExperiences } from "content-collections";
import { notFound } from "next/navigation";

interface ExperiencePageProps {
  params: Promise<{ path: string }>;
}

export const generateStaticParams = () => allExperiences.map((work) => ({ path: work._meta.path }));

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { path } = await params;

  const exp = allExperiences.find((v) => v._meta.path === path);

  if (!exp) notFound();

  return { title: `${exp.company} - Ali Hashemi` };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { path } = await params;

  const exp = allExperiences.find((v) => v._meta.path === path);

  if (!exp) notFound();

  return (
    <main className="prose prose-zinc prose-invert px-3">
      <article>
        <MDXContent code={exp.mdx} components={mdxComponents} />
      </article>
    </main>
  );
}
