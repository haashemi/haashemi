import type { Metadata } from "next";

import { allPages } from "@hx/content";

export const metadata: Metadata = {
  title: "Resume | Ali Hashemi",
  description: "Ali Hashemi's resume",
};

export default function CVPage() {
  const cv = allPages.find((page) => page._meta.path === "cv")!;

  return (
    <main className="prose overflow-hidden px-3 prose-zinc prose-invert" style={{ overflowWrap: "break-word" }}>
      <article dangerouslySetInnerHTML={{ __html: cv.html }} />
    </main>
  );
}
