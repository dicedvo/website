import type { Entry, EntryFieldTypes } from "contentful"
import { contentfulClient, getAssetUrl } from "./contentful"
import resolveResponse from "contentful-resolve-response"

export interface Partner {
    name: string
    logo: string
    description?: string
    website?: string
}

export type PartnerSkeleton = {
    contentTypeId: "partner"
    fields: {
        name: EntryFieldTypes.Symbol
        logo: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.Text
        website: EntryFieldTypes.Text
    }
}

export async function getPartners() {
    const entries = await contentfulClient.getEntries<PartnerSkeleton>({
        content_type: "partner",
        order: ["fields.name"]
    });

    const resolved = resolveResponse(entries) as Entry<PartnerSkeleton, undefined, string>[];
    // resolve assets and entries
    return resolvePartners(resolved);
}

export function resolvePartners(entries: Array<Entry<PartnerSkeleton, undefined, string>>): Promise<Partner[]> {
    return Promise.all(entries.map(async (entry) => {
        let partner: Partner = {
            name: entry.fields.name as string,
            logo: "",
            description: entry.fields.description as string,
            website: entry.fields.website as string
        }
        partner.logo = await getAssetUrl(entry.fields.logo) ?? '';
        return partner;
    }));
}
