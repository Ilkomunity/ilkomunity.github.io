import {z, defineCollection} from 'astro:content';

const jadwalCommunities = defineCollection({
    schema: z.object({
        foto: z.string(),
        logo: z.string(),
        nama: z.string(),
        hari: z.string(),
        detailRuangan: z.string(),
        ruangan: z.string(),
        jam: z.string(),
    })
});

export const collections = {
    'communities': jadwalCommunities,
};