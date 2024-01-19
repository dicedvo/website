import type { EntryFieldTypes } from "contentful"
import { contentfulClient } from "../lib/contentful"
import { marked } from "marked"

export interface Meta {
    fullName: string
    shortName: string
    description: string
    socials: {
        facebook: string
        linkedin: string
        instagram: string
    }
    landingPage: {
        heroTitle: string
        heroSubtitle: string
        ctaButtonText: string
        ctaButtonLink: string
        missionStatements: {
            title: string
            subtitle: string
        }[]
        vision: {
            title: string
            subtitle: string
        }[]
    }
}

export type MetaSkeleton = {
    contentTypeId: "meta"
    fields: {
        fullName: EntryFieldTypes.Text
        shortName: EntryFieldTypes.Text
        description: EntryFieldTypes.Text
        facebookLink: EntryFieldTypes.Text
        linkedInLink: EntryFieldTypes.Text
        instagramLink: EntryFieldTypes.Text
        landingPageHeroTitle: EntryFieldTypes.Text
        landingPageHeroSubtitle: EntryFieldTypes.Text
        landingPageCtaButtonText: EntryFieldTypes.Text
        landingPageCtaButtonLink: EntryFieldTypes.Text
        missionStatement1Title: EntryFieldTypes.Text
        missionStatement1Subtitle: EntryFieldTypes.Text
        missionStatement2Title: EntryFieldTypes.Text
        missionStatement2Subtitle: EntryFieldTypes.Text
        vision1Title: EntryFieldTypes.Text
        vision1Subtitle: EntryFieldTypes.Text
        vision2Title: EntryFieldTypes.Text
        vision2Subtitle: EntryFieldTypes.Text
        vision3Title: EntryFieldTypes.Text
        vision3Subtitle: EntryFieldTypes.Text
    }
}

let meta: Meta = {
    fullName: "",
    shortName: "",
    description: "",
    socials: {
        facebook: "",
        linkedin: "",
        instagram: ""
    },
    landingPage: {
        heroTitle: "",
        heroSubtitle: "",
        ctaButtonText: "",
        ctaButtonLink: "",
        missionStatements: [
            {
                title: "",
                subtitle: ""
            },
            {
                title: "",
                subtitle: ""
            }
        ],
        vision: [
            {
                title: "",
                subtitle: ""
            },
            {
                title: "",
                subtitle: ""
            },
            {
                title: "",
                subtitle: ""
            }
        ]
    }
};

export async function getMeta() {
    if (meta.fullName.length > 0) {
        return meta;
    }

    const entries = await contentfulClient.getEntries<MetaSkeleton>({
        content_type: "meta",
    });

    if (entries.total === 0) {
        return meta;
    }

    const firstEntry = entries.items[0];

    meta = {
        fullName: firstEntry.fields.fullName,
        shortName: firstEntry.fields.shortName,
        description: firstEntry.fields.description,
        socials: {
            facebook: firstEntry.fields.facebookLink,
            linkedin: firstEntry.fields.linkedInLink,
            instagram: firstEntry.fields.instagramLink
        },
        landingPage: {
            heroTitle: firstEntry.fields.landingPageHeroTitle,
            heroSubtitle: firstEntry.fields.landingPageHeroSubtitle,
            ctaButtonText: firstEntry.fields.landingPageCtaButtonText,
            ctaButtonLink: firstEntry.fields.landingPageCtaButtonLink,
            missionStatements: [
                {
                    title: firstEntry.fields.missionStatement1Title,
                    subtitle: firstEntry.fields.missionStatement1Subtitle
                },
                {
                    title: firstEntry.fields.missionStatement2Title,
                    subtitle: firstEntry.fields.missionStatement2Subtitle
                }
            ],
            vision: [
                {
                    title: firstEntry.fields.vision1Title,
                    subtitle: await marked.parse(firstEntry.fields.vision1Subtitle)
                },
                {
                    title: firstEntry.fields.vision2Title,
                    subtitle: await marked.parse(firstEntry.fields.vision2Subtitle)
                },
                {
                    title: firstEntry.fields.vision3Title,
                    subtitle: await marked.parse(firstEntry.fields.vision3Subtitle)
                }
            ]
        }
    }

    return meta;
}

export default meta;
