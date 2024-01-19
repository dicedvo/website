import type { Entry, EntryFieldTypes } from "contentful";

export type CommunitySkeleton = {
    contentTypeId: "community"
    fields: {
        name: EntryFieldTypes.Text
        logo: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.Text
        website: EntryFieldTypes.Text
    }
}
