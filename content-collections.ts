import type { Context } from "@content-collections/core";
import type { Pluggable } from "unified";

import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkSmartypants from "remark-smartypants";

interface TransformOptions {
  remarkPlugins: Pluggable[];
  rehypePlugins: Pluggable[];
}

const transformOptions: TransformOptions = {
  remarkPlugins: [remarkGfm, remarkSmartypants, remarkAlert],
  rehypePlugins: [[rehypeShiki, { theme: "github-dark" }]],
};

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
  transform: async (document, context) => ({
    ...document,
    html: await compileMarkdown(context, document, transformOptions),
  }),
});

const cv = defineCollection({
  name: "cv",
  directory: "content/cv",
  include: "**/*.md",
  schema: (z) => ({
    title: z.enum(["", "Software Engineer", "Backend Developer", "Frontend Developer", "Full-Stack Developer"]),
    employmentType: z.enum(["", "Full-time", "Freelance", "Self-Employed"]),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    mainPath: z.string().optional(),
  }),
  transform: async (document, context) => ({
    ...document,
    html: await compileMarkdown(context, document, transformOptions),
  }),
});

const pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.md",
  schema: (z) => ({ title: z.string() }),
  transform: async (document, context) => ({
    ...document,
    html: await compileMarkdown(context, document, transformOptions),
  }),
});

export default defineConfig({
  collections: [blogs, cv, pages],
});
