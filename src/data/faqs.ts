import type { EntryFieldTypes } from "contentful";
import { contentfulClient } from "../lib/contentful";

export interface FAQ {
    question: string;
    answer: string;
}

export type FaqSkeleton = {
    contentTypeId: "faq"
    fields: {
        questions: EntryFieldTypes.Object<{ key: string, value: string }[]>
    }
}

export async function getFaqs() {
    const entries = await contentfulClient.getEntries<FaqSkeleton>({
        content_type: "faq",
        order: ["sys.createdAt"]
    });

    const faqs = entries.items.map((entry) => {
        const questions: FAQ[] = [];

        for (const en of entry.fields.questions) {
            questions.push({
                question: en.key,
                answer: en.value
            });
        }

        return questions;
    }).flat();

    return faqs;
}
