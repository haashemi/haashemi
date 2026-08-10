import Link from "next/link";

import { site } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 flex h-14 items-center justify-between gap-4 border-b bg-background px-6">
      <Link href="/" className="text-lg">
        Ali Hashemi
      </Link>

      <ul className="mt-1 flex gap-4">
        {site.socials.map((social) => (
          <li key={social.value} className="h-fit text-muted-foreground transition-colors hover:text-foreground">
            <a aria-label={social.value} href={social.url}>
              <social.Icon className="size-4" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
