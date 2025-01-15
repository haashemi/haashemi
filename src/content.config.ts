import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const exp = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/exp" }),
  schema: z.object({
    title: z.enum(["Software Engineer", "Backend Developer", "Frontend Developer", "Full-Stack Developer"]),
    employmentType: z.enum(["Full-time", "Freelance", "Self-Employed"]),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    mainPath: z.string().optional(),
  }),
});

export const collections = { blog, exp };
