import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
});

const works = defineCollection({
  name: "works",
  directory: "content/works",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(), // Software Engineer, Backend Developer, etc.
    employmentType: z.string(), // Full-time, Freelance, etc.
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    mainPath: z.string().optional(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
});

export default defineConfig({
  collections: [blogs, works],
});
