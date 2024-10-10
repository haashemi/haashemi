import type { IconType } from "react-icons";
import {
  SiCaddy,
  SiDocker,
  SiGit,
  SiGo,
  SiMinio,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";

// Some of the things that I use often.
export const techStack = [
  // Programming languages
  { title: "Go", Icon: SiGo },
  { title: "Typescript", Icon: SiTypescript },

  // Frameworks
  { title: "Next.JS", Icon: SiNextdotjs },

  // Storage related
  { title: "Postgres", Icon: SiPostgresql },
  { title: "Minio", Icon: SiMinio },

  // Server related
  { title: "Docker", Icon: SiDocker },
  { title: "Nginx", Icon: SiNginx },
  { title: "Caddy", Icon: SiCaddy },

  // General
  { title: "Git", Icon: SiGit },
] as const;

export const TechStack = ({ title, Icon }: { title: string; Icon: IconType }) => (
  <li aria-label={title} className="flex items-center gap-3 border border-zinc-700 px-3 py-2 text-zinc-200">
    {<Icon className="h-full" />}
    <span className="text-sm">{title.toUpperCase()}</span>
  </li>
);
