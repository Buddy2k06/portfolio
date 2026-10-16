import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    pitch: z.string(),
    status: z.string(),
    role: z.string(),
    team: z.string(),
    engine: z.string(),
    timeline: z.string(),
    tags: z.array(z.string()),
    order: z.number().default(99),
    hero: z.string().optional(),      // path under /public, image or .webm/.mp4/.gif. Empty = placeholder
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
  }),
});
export const collections = { projects };
