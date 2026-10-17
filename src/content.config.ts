import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    role: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    pubDate: z.date(),
    image: z.string(),
    image_alt: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = { projects };

const button = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
    title: z.string(),
    link: z.string(),
    variant: z.string(),
    icon: z.string().optional(),
  }),
})