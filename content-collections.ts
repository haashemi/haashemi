import type { Options } from "@content-collections/mdx";

import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkCustomHeaderId from "remark-custom-header-id";
import remarkGfm from "remark-gfm";
import remarkGitHubAlters from "remark-github-alerts";

const mdxOptions: Options = {
  rehypePlugins: [remarkGfm],
  remarkPlugins: [remarkGitHubAlters, remarkCustomHeaderId],
};

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    updatedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(),
  }),
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document, mdxOptions),
  }),
});

const exps = defineCollection({
  name: "experiences",
  directory: "content/exps",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.enum(["Software Engineer", "Backend Developer", "Frontend Developer", "Full-Stack Developer"]),
    employmentType: z.enum(["Full-time", "Freelance", "Self-Employed"]),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    mainPath: z.string().optional(),
  }),
  transform: async (document, context) => ({
    ...document,
    mdx: await compileMDX(context, document, mdxOptions),
  }),
});

export default defineConfig({ collections: [blogs, exps] });
