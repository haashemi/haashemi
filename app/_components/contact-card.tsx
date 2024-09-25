import Link from "next/link";
import type { IconType } from "react-icons";

interface ContactCardProps {
  url: string;
  name: string;
  Icon: IconType;
}

export const ContactCard = ({ url, name, Icon }: ContactCardProps) => (
  <Link
    href={url}
    className="group flex aspect-video w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-zinc-900 bg-zinc-950 transition-all hover:border-zinc-950 hover:bg-zinc-900 focus:border-zinc-700 focus:bg-black sm:aspect-square"
  >
    <Icon className="size-1/3 text-zinc-200 transition-colors group-hover:text-white" />
    <p className="text-zinc-100 transition-colors group-hover:text-white">{name}</p>
  </Link>
);
