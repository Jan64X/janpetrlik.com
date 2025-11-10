import { defineCollection, z } from 'astro:content';
import { Image } from 'astro:assets';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export components to be available in all MDX files
export const components = {
  img: Image,
};

export const collections = {
  blog,
};
