import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/music" }),
  schema: z.object({
    title: z.string(),
    artist: z.enum(['roxy', 'lilly', 'wes']),
    genre: z.array(z.string()),
    mood: z.array(z.string()),
    date: z.coerce.date(),
    cover: z.string().optional(),
    sunoUrl: z.string().optional(),
    duration: z.string(),
    featured: z.boolean().default(false),
  }),
});

const fiction = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/fiction" }),
  schema: z.object({
    title: z.string(),
    genre: z.array(z.string()),
    status: z.enum(['in-progress', 'published', 'coming-soon']),
    cover: z.string().optional(),
    tagline: z.string(),
    date: z.coerce.date(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    readingTime: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { music, fiction, insights };
