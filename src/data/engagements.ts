import type { Entry, EntryFieldTypes } from "contentful"
import { contentfulClient, getAssetUrl } from "../lib/contentful"
import { resolvePartners, type Partner, type PartnerSkeleton } from "./partners"
import resolveResponse from "contentful-resolve-response"

export type EngagementSkeleton = {
    contentTypeId: "engagement"
    fields: {
        title: EntryFieldTypes.Text
        date: EntryFieldTypes.Date
        location: EntryFieldTypes.Text
        image: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.Text
        collaboratorLabelText: EntryFieldTypes.Text
        collaborators: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PartnerSkeleton>>
    }
}

export interface Engagement {
    title: string
    date: string
    location: string
    image: string
    description: string
    collaboratorLabelText: string
    collaborators: Partner[]
}

export async function getEngagements() {
    const entries = await contentfulClient.getEntries<EngagementSkeleton>({
        content_type: "engagement",
        order: ["fields.date"]
    });

    const resolved = resolveResponse(entries) as Entry<EngagementSkeleton, undefined, string>[];

    // resolve assets and entries
    return Promise.all(resolved.map(async (entry) => {
        let engagement: Engagement = {
            title: entry.fields.title as string,
            date: new Date(entry.fields.date as string).toDateString(),
            location: entry.fields.location as string,
            image: "",
            description: entry.fields.description as string,
            collaboratorLabelText: entry.fields.collaboratorLabelText as string,
            collaborators: entry.fields.collaborators ? await resolvePartners(
                entry.fields.collaborators as Entry<PartnerSkeleton, undefined, string>[]
            ) : []
        }
        const asset = await getAssetUrl(entry.fields.image);
        if (asset) {
            engagement.image = asset;
        }
        return engagement;
    }));
}
