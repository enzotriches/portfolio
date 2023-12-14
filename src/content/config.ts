import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    datetime: z.date(),
    description: z.string().default(""),
    external: z.boolean().default(false),
  }),
});

export const collections = { posts: postsCollection };
