import type { Work } from "content-collections";
import Link from "next/link";

export const WorkExperience = ({ work }: { work: Work }) => {
  const path: string = work.mainPath ?? work._meta.path;

  return (
    <Link
      href={`/exp/${path}`}
      className="group relative flex-1 border-l-2 border-zinc-800 px-4 py-2 transition-colors duration-300 hover:border-zinc-500"
    >
      <span className="absolute left-0 top-0 size-full bg-gradient-to-r from-zinc-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-2">
        <h2>{work.company}</h2>

        <div className="flex flex-col">
          <p className="text-sm text-zinc-500">
            {work.title} - {work.employmentType}
          </p>

          <p className="text-sm text-zinc-500">
            {work.startDate.toLocaleString("en", { year: "numeric", month: "short" })}
            {" - "}
            {work.endDate ? work.endDate.toLocaleString("en", { year: "numeric", month: "short" }) : "Present"}
          </p>
        </div>
      </div>
    </Link>
  );
};
