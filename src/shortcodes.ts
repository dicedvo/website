import type { Next } from '@contentful/rich-text-html-renderer';
import type { Block, Inline, Text } from '@contentful/rich-text-types';
import { replace, type Shortcode } from '@wordpress/shortcode';

const validShortcodeTags = ['html'];

export function interpretShortcodeText(node: Block | Inline, next: Next): string {
    if (node.content.length === 2 && node.content[0].nodeType === 'text' && node.content[1].nodeType === 'text') {
        const text = node.content.map((n: Text) => n.value).join('');
        const extracted = parseShortcode(text);
        
        if (extracted !== text) {
            return extracted;
        }
    }
    return '<p>' + next(node.content) + '</p>';
}

export function parseShortcode(input: string): string {
    let replaced = input;

    for (const tag of validShortcodeTags) {
        replaced = replace(tag, replaced, interpretShortcode);
    }

    return replaced;
}

function interpretShortcode(shortcode: Shortcode): string {
    if (shortcode.type === 'self-closing') {
        return interpretInlineShortcode(shortcode);
    }
    return interpretBlockShortcode(shortcode);
}

function interpretInlineShortcode(shortcode: Shortcode): string {
    //@ts-expect-error content is missing in shortcode
    return shortcode.content;
}

function interpretBlockShortcode(shortcode: Shortcode): string {
    switch (shortcode.tag) {
    case 'html':
        //@ts-expect-error content is missing in shortcode
        return shortcode.content;
    default:
        return '';
    }
}