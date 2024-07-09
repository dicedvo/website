import type { EntryFieldTypes } from 'contentful';
import { contentfulClient, getAssetUrl } from './contentful';

export type PageSkeleton = {
    contentTypeId: "page"
    fields: {
        title: EntryFieldTypes.Text
        subtitle: EntryFieldTypes.Text
        slug: EntryFieldTypes.Text
        content: EntryFieldTypes.RichText
    }
}

export interface Page {
    title: string;
    subtitle: string;
    slug: string;
    content: string;
}

export async function getPages(prop?: { first?: number }) {
    const entries = await contentfulClient.getEntries<PageSkeleton>({
        content_type: "page",
        limit: prop?.first
    });

    return entries.items;
}
