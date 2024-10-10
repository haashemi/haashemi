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
    updatedAt: z.coerce.date().optional(),
    publishedAt: z.coerce.date().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, { rehypePlugins: [remarkGfm] });
    return { ...document, mdx };
  },
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
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, { rehypePlugins: [remarkGfm] });
    return { ...document, mdx };
  },
});

export default defineConfig({
  collections: [blogs, exps],
});
