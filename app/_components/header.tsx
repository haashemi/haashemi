import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

const socials = [
  { label: "Email", url: "mailto:contact@haashemi.dev", Icon: FaEnvelope },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/haashemi", Icon: FaLinkedin },
  { label: "GitHub", url: "https://github.com/haashemi", Icon: FaGithub },
  { label: "Telegram", url: "https://t.me/Byfron", Icon: FaTelegram },
];

export const Header = () => (
  <header className="my-16 flex justify-between gap-5 px-5 sm:px-12">
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-medium">Ali Hashemi</h1>
      <p className="text-lg text-zinc-400">Golang Developer</p>
    </div>

    <ul className="grid grid-cols-2 gap-5 self-center justify-self-center">
      {socials.map((v) => (
        <li key={v.label} className="group size-6">
          <a href={v.url} aria-label={v.label}>
            <v.Icon className="size-full fill-zinc-500 transition-colors group-hover:fill-zinc-100" />
          </a>
        </li>
      ))}
    </ul>
  </header>
);
