import { HandshakeIcon } from "lucide-react";

import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="flex items-center gap-2 border-t py-2 text-center text-xs text-muted-foreground select-none">
      <span className="flex flex-1 justify-end">
        <a href={site.url} className="border-b hover:border-foreground hover:text-foreground">
          Ali Hashemi
        </a>
      </span>
      <span>
        <HandshakeIcon className="size-3" />
      </span>
      <span className="flex flex-1 justify-start">
        <a href={site.team.url} className="border-b hover:border-foreground hover:text-foreground">
          {site.team.name}
        </a>
      </span>
    </footer>
  );
}
