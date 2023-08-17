import {z, defineCollection} from 'astro:content';

const communitiesCollection = defineCollection({
    schema: z.object({
        foto: z.string(),
        logo: z.string(),
        nama: z.string(),
        singkatan: z.string(),
        hari: z.string(),
        ruangan: z.string(),
        jam: z.string(),
    })
});

const achievementsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        award: z.string(),
        competition: z.string(),
        imageSrc: z.string(),
        event: z.string(),
        team: z.string(),
        publishDate: z.date(),
    })
});

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

const portofolioCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        category: z.string(),
        date: z.date(),
        link: z.string(),
        image: z.string(),
    }),
});

const reviewCollection = defineCollection({
    type: "content",
    schema: z.object({
        name: z.string(),
        occupation: z.string(),
        review: z.string(),
        image: z.string(),
    }),
});

export const collections = {
    'communities': communitiesCollection,
    'achievements': achievementsCollection,
    'events': eventsCollection,
    'portofolios': portofolioCollection,
    'reviews': reviewCollection,
};
