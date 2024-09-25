import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

import { cn } from "../_lib/cn";

interface ProjectCardProps {
  title: string;
  desc: string;
  url: string;
  repoUrl: string;
  bgClassName: string;
  textClassName: string;
}

export const ProjectCard = (props: ProjectCardProps) => (
  <div className="group flex aspect-[5/4] size-full flex-col gap-3 overflow-hidden rounded-xl bg-zinc-900">
    {/* Project name section */}
    <Link
      href={props.url}
      className="relative flex aspect-[19/9] w-full items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div
        className={cn(
          `absolute size-full -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-all group-hover:translate-y-0`,
          props.bgClassName,
        )}
      />

      <h2
        className={cn(
          `select-none text-5xl font-semibold text-zinc-100 transition-colors xl:text-6xl`,
          props.textClassName,
        )}
      >
        {props.title}
      </h2>
    </Link>

    {/* About project section */}
    <div className="flex flex-1 flex-col justify-between gap-3 px-5 pb-3">
      <p className="line-clamp-2 text-sm text-zinc-300 xl:text-base">{props.desc}</p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <a
            href={props.repoUrl}
            aria-label="`Open ${title} GitHub repository`"
            className="flex items-center justify-center rounded-xl border border-zinc-700 p-2 transition-colors hover:bg-zinc-700"
          >
            <FaGithub className="size-5 xl:size-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
