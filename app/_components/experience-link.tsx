import type { Experience } from "content-collections";

import { Link } from "next-view-transitions";

export const ExperienceLink = ({ exp }: { exp: Experience }) => {
  const path: string = exp.mainPath ?? exp._meta.path;

  return (
    <Link
      className="group relative flex-1 border-l-2 border-zinc-800 px-4 py-2 transition-colors duration-300 hover:border-zinc-500"
      href={`/exp/${path}`}
    >
      <span className="absolute left-0 top-0 size-full bg-gradient-to-r from-zinc-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-2">
        <h2>{exp.company}</h2>

        <div className="flex flex-col">
          <p className="text-sm text-zinc-500">
            {exp.title} - {exp.employmentType}
          </p>

          <p className="text-sm text-zinc-500">
            {exp.startDate.toLocaleString("en", { year: "numeric", month: "short" })}
            {" - "}
            {exp.endDate ? exp.endDate.toLocaleString("en", { year: "numeric", month: "short" }) : "Present"}
          </p>
        </div>
      </div>
    </Link>
  );
};
