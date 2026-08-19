import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    industry: z.string(),
    services: z.array(z.enum(["Build", "Launch", "Rescue", "Upgrade", "Care"])),
    access: z.enum(["public", "restricted", "confidential"]),
    demoData: z.boolean().default(true),
    featured: z.boolean(),
    priority: z.number(),
    cover: z.string(),
    coverAlt: z.string(),
    coverWidth: z.number().int().positive(),
    coverHeight: z.number().int().positive(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string(),
          width: z.number().int().positive(),
          height: z.number().int().positive(),
        }),
      )
      .min(1)
      .optional(),
    clientDisplayName: z.string(),
    testimonialStatus: z.enum(["none", "draft", "approved"]),
    testimonial: z
      .object({
        quote: z.string(),
        name: z.string(),
        role: z.string(),
      })
      .optional(),
    category: z.string(),
    accessNote: z.string(),
    challenge: z.array(z.string()),
    solution: z.array(z.string()),
    features: z.array(z.string()).max(7),
    contributions: z.array(z.string()),
    results: z.array(z.string()),
    technologies: z.array(z.string()),
    liveUrl: z.string().url().optional(),
  }),
});

export const collections = { work };
