import type { Metadata } from "next";

import Section from "@hx/components/Section";
import { allBlogs } from "@hx/content";
import { socials } from "@hx/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "Ali Hashemi's personal website",
};

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between gap-5 px-5 sm:px-12">
        <Link className="flex flex-col gap-2" href="/">
          <h1 className="text-4xl font-medium">Ali Hashemi</h1>
          <p className="text-lg text-zinc-400">Golang Developer</p>
        </Link>

        <Link
          className="flex items-center gap-3 border border-zinc-600 px-3 py-2 text-lg text-white hover:bg-zinc-800"
          href="/cv"
        >
          Resume
        </Link>
      </header>

      <main className="flex w-full flex-col gap-5">
        <Section title="Socials">
          <div className="flex flex-col gap-2 px-3">
            {socials.map((social) => (
              <a
                className="flex items-center gap-3 text-lg text-zinc-200 hover:underline"
                href={social.url}
                key={social.url}
              >
                <social.Icon className="h-full text-zinc-500" />
                <span>{social.value}</span>
              </a>
            ))}
          </div>
        </Section>

        <Section title="Blogs">
          <div className="flex flex-col gap-3 px-2">
            {allBlogs
              .toSorted((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
              .map((post) => (
                <Link
                  className="group relative flex-1 border-l-2 border-zinc-800 px-4 py-2 hover:border-zinc-500"
                  href={`/blog/${post._meta.path}`}
                  key={post._meta.path}
                >
                  <span className="absolute top-0 left-0 size-full bg-gradient-to-r from-zinc-900 to-transparent opacity-0 group-hover:opacity-100" />

                  <div className="relative flex flex-col gap-2">
                    <h2>{post.title}</h2>
                    <p className="text-sm text-zinc-500">{post.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </Section>
      </main>
    </>
  );
}
