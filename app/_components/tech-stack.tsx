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

import { Section } from "./section";

// Some of the things that I use often.
const techStack = [
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

export const TechStackSection = () => (
  <Section title="Tech Stack">
    <div className="flex flex-wrap gap-3 px-3">
      {techStack.map((ts) => (
        <li
          key={ts.title}
          aria-label={ts.title}
          className="flex items-center gap-3 border border-zinc-700 px-3 py-2 text-zinc-200"
        >
          {<ts.Icon className="h-full" />}
          <span className="text-sm">{ts.title.toUpperCase()}</span>
        </li>
      ))}
    </div>
  </Section>
);
