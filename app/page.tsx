import type { Metadata } from "next";

import { site } from "@/config/site";
import { allBlogPosts } from "@/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ali Hashemi",
  description: "Ali Hashemi's personal website",
};

export default function Home() {
  return (
    <main className="flex-1 *:p-4 *:not-last:border-b">
      <section className="px-6! py-8!">
        <p className="text-sm text-pretty text-muted-foreground">
          A <i>Software Developer</i> who is interested in developing things that no one usually expects.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2">
          <div className="size-1 bg-muted-foreground" /> Working On:
        </h2>

        <ul className="flex list-disc flex-col gap-2 px-2 text-sm text-muted-foreground">
          {site.clients.map((v) => (
            <li key={v.title} className="flex items-center gap-2">
              <div className="size-1 bg-muted-foreground" />
              <span>{v.title}</span>
              <span className="flex-1 border-t border-dashed" />
              <a href={v.url.href} className="hover:text-foreground hover:underline">
                {v.url.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2">
          <div className="size-1 bg-muted-foreground" /> Projects:
        </h2>

        <ul className="flex list-disc flex-col gap-2 px-2 text-sm text-muted-foreground">
          {site.projects.map((v) => (
            <li key={v.title} className="flex items-center gap-2">
              <div
                className={cn(
                  "size-1",
                  v.state === "active"
                    ? "bg-green-500"
                    : v.state === "on-hold"
                      ? "bg-yellow-500"
                      : v.state === "stopped"
                        ? "bg-red-500"
                        : "bg-muted",
                )}
              />
              <span>{v.title}</span>
              <span className="flex-1 border-t border-dashed" />
              <a href={v.url.href} className="hover:text-foreground hover:underline">
                {v.url.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2">
          <div className="size-1 bg-muted-foreground" /> Blog Posts:
        </h2>

        <ul className="flex list-disc flex-col gap-2 px-2 text-sm text-muted-foreground">
          {allBlogPosts
            //@ts-ignore Date is number.
            .toSorted((a, b) => b.pubDate - a.pubDate)
            .map((v) => (
              <li key={v.title} className="flex items-center gap-2">
                <div className="aspect-square size-1 bg-muted-foreground" />
                <span>{v.title}</span>
                <span className="flex-1 border-t border-dashed" />
                <a href={`/post/${v._meta.path}`} className="text-nowrap hover:text-foreground hover:underline">
                  Read More
                </a>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
