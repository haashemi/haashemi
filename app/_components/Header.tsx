const Header = () => (
  <header className="sticky top-0 z-40 h-20 border-b border-zinc-900 bg-black/30 backdrop-blur-sm">
    <nav className="container mx-auto flex h-full items-center justify-between px-3">
      <a href="/" className="text-xl font-bold">
        HASHEMI
      </a>
      <ul className="flex flex-1 justify-end gap-3">
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
