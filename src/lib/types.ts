import type { Entry, EntryFieldTypes } from "contentful";

export type PartnerSkeleton = {
    contentTypeId: "partner"
    fields: {
        name: EntryFieldTypes.Text
        logo: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.Text
        website: EntryFieldTypes.Text
    }
}

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

export type CommunitySkeleton = {
    contentTypeId: "community"
    fields: {
        name: EntryFieldTypes.Text
        logo: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.Text
        website: EntryFieldTypes.Text
    }
}

export type Partner = Entry<PartnerSkeleton, undefined>
export type Engagement = Entry<EngagementSkeleton, undefined>
export type Engagement2 = Engagement & { fields: { collaborators: Partner[] } }
export type Community = Entry<CommunitySkeleton, undefined>