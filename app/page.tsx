import { allBlogs, allExperiences } from "content-collections";

import { BlogLink } from "./_components/blog-link";
import { ExperienceLink } from "./_components/experience-link";
import { Section } from "./_components/section";
import { TechStack, techStack } from "./_components/tech-stack";

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-5">
      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-3 px-3">
          {techStack.map((ts) => (
            <TechStack Icon={ts.Icon} key={ts.title} title={ts.title} />
          ))}
        </div>
      </Section>

      <Section title="Blogs">
        <div className="flex flex-col gap-3 px-2">
          {allBlogs
            .filter((post) => post.publishedAt !== undefined)
            .toSorted((a, b) => b.publishedAt!.getTime() - a.publishedAt!.getTime())
            .map((post) => (
              <BlogLink blog={post} key={post._meta.path} />
            ))}
        </div>
      </Section>

      <Section title="Experiences">
        <div className="flex flex-col gap-3 px-2">
          {allExperiences
            .toSorted((a, b) => b.startDate.getTime() - a.startDate.getTime())
            .map((post) => (
              <ExperienceLink exp={post} key={post._meta.path} />
            ))}
        </div>
      </Section>
    </main>
  );
}
