import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    categoryBg: z.string().optional(),
    readTime: z.string(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.object({
      src: z.string().optional(),
      alt: z.string().optional(),
      gradient: z.string().optional(),
      icon: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { blog };
