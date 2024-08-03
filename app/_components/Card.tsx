import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";

import { cn } from "@/app/_lib";

interface ProjectCardProps {
  title: string;
  desc: string;
  url: string;
  repoUrl: string;
  bgClass: string;
  textClass: string;
}

const ProjectCard = (props: ProjectCardProps) => (
  <div className="group flex aspect-[5/4] size-full flex-col gap-3 overflow-hidden rounded-xl bg-zinc-900">
    {/* Project name section */}
    <Link
      href={props.url}
      className="relative flex aspect-[19/9] w-full items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div
        className={cn(
          `absolute size-full -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-all group-hover:translate-y-0`,
          props.bgClass,
        )}
      />

      <h2 className={cn(`select-none text-6xl font-black text-zinc-100 transition-colors`, props.textClass)}>
        {props.title}
      </h2>
    </Link>
    {/* About project section */}
    <div className="flex flex-1 flex-col justify-between px-5 pb-3">
      <p className="text-sm text-zinc-300 sm:text-base">{props.desc}</p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <a href={props.repoUrl} className="rounded-xl border border-zinc-700 p-2 transition-colors hover:bg-zinc-700">
            <FaGithub className="size-6" />
          </a>
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
  <div className="flex aspect-[5/4] size-full flex-col gap-2 rounded-xl bg-zinc-900 p-2">
    <Image
      className="aspect-video w-full rounded-xl bg-zinc-800"
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

interface ContactCardProps {
  Icon: IconType;
  user: string;
  url: string;
}

const ContactCard = ({ Icon, user, url }: ContactCardProps) => (
  <a
    href={url}
    className="group flex aspect-video w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-zinc-900 bg-zinc-950 transition-all hover:border-zinc-950 hover:bg-zinc-900 focus:border-zinc-700 focus:bg-black sm:aspect-square"
  >
    <Icon className="size-1/3 text-zinc-200 transition-colors group-hover:text-white" />
    <p className="text-zinc-100 transition-colors group-hover:text-white">{user}</p>
  </a>
);

export { BlogPostCard, ContactCard, ProjectCard };
