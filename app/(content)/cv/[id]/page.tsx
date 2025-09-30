import type { Metadata } from "next";

import { allCvs } from "@/content";

export function generateStaticParams() {
  return allCvs.map((cv) => ({
    params: { id: cv._meta.path },
  }));
}

interface CVPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CVPageProps) {
  const { id } = await params;
  const cv = allCvs.find((post) => post._meta.path === id)!;

  return {
    title: `${cv.title} @${cv.company} | Ali Hashemi`,
    description: `My experiences as a ${cv.title} @${cv.company}`,
  } satisfies Metadata;
}

export default async function CVPage({ params }: CVPageProps) {
  const { id } = await params;
  const cv = allCvs.find((post) => post._meta.path === id)!;

  return (
    <main className="prose overflow-hidden px-3 prose-zinc prose-invert" style={{ overflowWrap: "break-word" }}>
      <article dangerouslySetInnerHTML={{ __html: cv.html }} />
    </main>
  );
}
