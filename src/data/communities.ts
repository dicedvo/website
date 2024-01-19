import type { EntryFieldTypes } from 'contentful';
import { contentfulClient, getAssetUrl } from '../lib/contentful';

export type CommunitySkeleton = {
    contentTypeId: "community"
    fields: {
        name: EntryFieldTypes.Text
        logo: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.Text
        website: EntryFieldTypes.Text
    }
}

export interface Community {
    logo: string;
    name: string;
    description: string;
    url: string;
}

export async function getCommunities() {
    const entries = await contentfulClient.getEntries<CommunitySkeleton>({
        content_type: "community",
        order: ["sys.createdAt"]
    });

    return Promise.all(entries.items.map(async (entry) => {
        let community: Community = {
            logo: "",
            name: entry.fields.name as string,
            description: entry.fields.description as string,
            url: entry.fields.website as string
        }
        community.logo = await getAssetUrl(entry.fields.logo) ?? '';
        return community;
    }));
}
