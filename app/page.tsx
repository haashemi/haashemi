import { allProjects } from "content-collections";

import { Section } from "./_components/section";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-5">
      <Section title="Projects">
        <div className="flex flex-col gap-3 px-2">
          {allProjects
            .toSorted((a, b) => a.priority - b.priority)
            .map((v) => (
              // TODO: Link to its own page.
              <a
                key={v._meta.path}
                aria-label={v.name}
                href={v.githubUrl}
                className="group relative flex-1 border-l-2 border-zinc-800 px-4 py-2 transition-colors duration-300 hover:border-zinc-500"
              >
                <span className="absolute left-0 top-0 size-full bg-gradient-to-r from-zinc-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex flex-col gap-2">
                  <span>{v.name}</span>
                  <p className="text-sm text-zinc-500">{v.summary}</p>
                </div>
              </a>
            ))}
        </div>
      </Section>
    </main>
  );
}
