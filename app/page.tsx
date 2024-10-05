import { allWorks } from "content-collections";

import { Section } from "./_components/section";
import { TechStack, techStack } from "./_components/tech-stack";
import { WorkExperience } from "./_components/work-experience";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-5">
      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-3 px-3">
          {techStack.map((ts) => (
            <TechStack key={ts.title} title={ts.title} Icon={ts.Icon} />
          ))}
        </div>
      </Section>

      <Section title="Work Experiences">
        <div className="flex flex-col gap-3 px-2">
          {allWorks
            .toSorted((a, b) => b.startDate.getTime() - a.startDate.getTime())
            .map((work) => (
              <WorkExperience key={work._meta.path} work={work} />
            ))}
        </div>
      </Section>
    </main>
  );
}
