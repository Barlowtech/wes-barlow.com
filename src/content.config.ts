import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const music = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/music" }),
  schema: z.object({
    title: z.string(),
    album: z.string().optional(),
    genre: z.array(z.string()),
    mood: z.array(z.string()),
    date: z.coerce.date(),
    cover: z.string().optional(),
    sunoUrl: z.string().optional(),
    spotifyUrl: z.string().optional(),
    duration: z.string(),
    featured: z.boolean().default(false),
  }),
});

const audio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/audio" }),
  schema: z.object({
    title: z.string(),
    format: z.enum(['podcast', 'audiobook', 'audio-drama']),
    style: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string(),
    speechifyUrl: z.string().optional(),
    featured: z.boolean().default(false),
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

export const collections = { music, audio, insights };
