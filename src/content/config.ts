import { z, defineCollection } from "astro:content";

// Partners
const partnerCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        logo: image(),
        description: z.string().optional(),
        website: z.string().url().optional()
    })
});

// Engagements
const engagementCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image(),
        description: z.string(),
        date: z.date(),
        location: z.string(),
        collaboratorLabelText: z.string().optional(),
        collaborators: z.array(z.string()).optional()
    })
});

// Communities
const communityCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        image: image(),
        description: z.string(),
        website: z.string().url()
    })
});

export const collections = {
    partners: partnerCollection,
    engagements: engagementCollection,
    communities: communityCollection
};