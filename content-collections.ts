import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, { rehypePlugins: [remarkGfm] });
    return { ...document, mdx };
  },
});

const works = defineCollection({
  name: "works",
  directory: "content/works",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(), // Software Engineer, Backend Developer, etc.
    employmentType: z.string(), // Full-time, Freelance, etc.
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    mainPath: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, { rehypePlugins: [remarkGfm] });
    return { ...document, mdx };
  },
});

export default defineConfig({
  collections: [blogs, works],
});
