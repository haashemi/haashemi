import Image from "next/image";
import Link from "next/link";

import { cn } from "@/app/_lib";

interface ProjectCardProps {
  title: string;
  desc: string;
  bgClass: string;
  textClass: string;
  url: string;
  urls: {
    icon: React.ReactNode;
    url: string;
  }[];
}

const ProjectCard = (props: ProjectCardProps) => (
  <div className="group flex aspect-[5/4] size-full flex-col overflow-hidden rounded-lg bg-zinc-900">
    <div className="flex-[2] p-3 transition-all group-hover:p-0">
      <div className="relative flex h-full items-center justify-center overflow-hidden rounded-lg bg-zinc-950 group-hover:rounded-none">
        <div
          className={cn(
            `absolute size-full -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-all group-hover:translate-y-0`,
            props.bgClass,
          )}
        />

        <h2
          className={cn(
            `z-10 select-none text-6xl font-black text-zinc-200 transition-all group-hover:text-7xl`,
            props.textClass,
          )}
        >
          {props.title}
        </h2>
      </div>
    </div>
    <div className="flex flex-1 flex-col justify-between px-5 pb-3 pt-2">
      <p className="text-zinc-300">{props.desc}</p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {props.urls.map((v) => (
            <a
              key={v.url}
              href={v.url}
              className="rounded-xl border border-zinc-700 p-2 transition-colors hover:bg-zinc-700"
            >
              {v.icon}
            </a>
          ))}
        </div>

        <Link
          href={props.url}
          className="flex h-full items-center justify-center rounded-xl border border-zinc-700 px-5 text-lg transition-colors hover:bg-zinc-700"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
);

interface BlogPostCardProps {
  id: number;
  title: string;
  publishedAt: string;
}

const BlogPostCard = (props: BlogPostCardProps) => (
  <div className="flex aspect-[5/4] size-full flex-col gap-2 rounded-lg bg-zinc-900 p-2">
    <Image
      className="aspect-video w-full rounded-lg bg-zinc-800"
      alt={`Cover of post ${props.title}`}
      src={`/blog/${props.id}/cover.png`}
      width={0}
      height={0}
    />
    <div className="flex flex-1 flex-col justify-between gap-2 px-3">
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <div className="flex items-center justify-between">
        <p className="flex items-center justify-center text-sm text-zinc-300 transition-colors">{props.publishedAt}</p>
        <Link
          href={`/blog/${props.id}`}
          className="flex items-center justify-center rounded-xl border border-zinc-700 px-4 py-2 transition-colors hover:bg-zinc-700"
        >
          Read More
        </Link>
      </div>
    </div>
  </div>
);

export { BlogPostCard, ProjectCard };
