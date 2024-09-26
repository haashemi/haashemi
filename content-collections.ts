import { defineCollection, defineConfig } from "@content-collections/core";

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blogs",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.md",
  schema: (z) => ({
    name: z.string(),
    summary: z.string(),
    priority: z.number(),
    githubUrl: z.string().url(),
    themeColor: z.string(),
  }),
});

export default defineConfig({
  collections: [blogs, projects],
});
