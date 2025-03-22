import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";

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
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
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
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
});

const pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.md",
  schema: (z) => ({ title: z.string() }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return { ...document, html };
  },
});

export default defineConfig({ collections: [blogs, cv, pages] });
