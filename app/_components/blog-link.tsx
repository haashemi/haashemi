import type { Blog } from "content-collections";
import Link from "next/link";

export const BlogLink = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog._meta.path}`}
      className="group relative flex-1 border-l-2 border-zinc-800 px-4 py-2 transition-colors duration-300 hover:border-zinc-500"
    >
      <span className="absolute left-0 top-0 size-full bg-gradient-to-r from-zinc-900 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col gap-2">
        <h2>{blog.title}</h2>

        <p className="text-sm text-zinc-500">{blog.summary}</p>
      </div>
    </Link>
  );
};
