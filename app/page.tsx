import { allProjects } from "content-collections";
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

const socials = [
  { label: "Email", url: "mailto:contact@haashemi.dev", Icon: FaEnvelope },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/haashemi", Icon: FaLinkedin },
  { label: "GitHub", url: "https://github.com/haashemi", Icon: FaGithub },
  { label: "Telegram", url: "https://t.me/Byfron", Icon: FaTelegram },
];

export default function Home() {
  return (
    <main className="flex w-full flex-col gap-5">
      <div className="my-20 flex h-14 flex-col gap-4 px-4">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-medium">Ali Hashemi</h1>
          <p className="text-zinc-400">Golang Developer</p>
        </div>

        <ul className="flex justify-center gap-3">
          {socials.map((v) => (
            <li key={v.label} className="group size-5">
              <a href={v.url} aria-label={v.label}>
                <v.Icon className="size-full fill-zinc-500 transition-colors group-hover:fill-zinc-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5">
        <div className="sticky top-0 z-10 flex w-full items-center gap-2 bg-gradient-to-b from-zinc-950 via-zinc-950 to-transparent py-2">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-zinc-700" />
          <h2 className="text-center text-xl font-light text-zinc-500">Projects</h2>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-700" />
        </div>

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
      </div>
    </main>
  );
}
