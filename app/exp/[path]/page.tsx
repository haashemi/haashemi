import { allWorks } from "content-collections";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface ExperiencePageProps {
  params: { path: string };
}

export function generateStaticParams() {
  return allWorks.map((work) => ({ path: work._meta.path }));
}

export function generateMetadata({ params: { path } }: ExperiencePageProps): Metadata {
  const exp = allWorks.find((v) => v._meta.path === path);

  if (!exp) notFound();

  return { title: `${exp.company} - Ali Hashemi` };
}

export default function ExperiencePage({ params: { path } }: ExperiencePageProps) {
  const exp = allWorks.find((v) => v._meta.path === path);

  if (!exp) notFound();

  return (
    <main className="prose prose-zinc prose-invert px-3">
      <div className="mb-10 h-0.5 w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <article dangerouslySetInnerHTML={{ __html: exp.html }} />
    </main>
  );
}
