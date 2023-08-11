import { defineCollection, z } from "astro:content";

const eventsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eventDate: z.date(),
    image: z.string(),
    isHighlighted: z.boolean().default(false),
  }),
});

export const collections = {
    'events': eventsCollection,
};