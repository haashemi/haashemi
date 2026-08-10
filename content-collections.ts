import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import rehypeShiki from "@shikijs/rehype";
import remarkGfm from "remark-gfm";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkSmartypants from "remark-smartypants";
import z from "zod";

type TransformOptions = Parameters<typeof compileMarkdown>[2];

const transformOptions: TransformOptions = {
  remarkPlugins: [remarkGfm, remarkSmartypants, remarkAlert],
  rehypePlugins: [[rehypeShiki, { theme: "github-dark" }]],
};

const blogPosts = defineCollection({
  name: "blogPosts",
  directory: "content/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => ({
    ...document,
    html: await compileMarkdown(context, document, transformOptions),
  }),
});

export default defineConfig({
  content: [blogPosts],
});
