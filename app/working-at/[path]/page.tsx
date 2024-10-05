import { allWorks } from "content-collections";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allWorks.map((work) => ({
    path: work._meta.path,
  }));
}

export default function WorkPage({ params: { path } }: { params: { path: string } }) {
  const work = allWorks.find((v) => v._meta.path === path);

  if (!work) notFound();

  return (
    <main>
      <div className="mb-10 h-0.5 w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      <article className="prose prose-invert" dangerouslySetInnerHTML={{ __html: work.html }} />
    </main>
  );
}
