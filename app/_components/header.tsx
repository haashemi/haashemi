import Link from "next/link";

export const Header = () => (
  <header className="sticky top-0 z-40 h-20 border-b border-zinc-900 bg-black/30 backdrop-blur-sm">
    <nav className="container mx-auto flex h-full items-center justify-between px-3">
      <Link href="/" className="text-xl font-semibold">
        HASHEMI
      </Link>
      <ul className="flex flex-1 justify-end gap-3">
        <li>
          <Link href="/#Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);
