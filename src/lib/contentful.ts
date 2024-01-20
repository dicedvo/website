import contentful, { type Asset, type UnresolvedLink } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function getAssetUrl(unresolved: UnresolvedLink<"Asset"> | Asset<undefined, string>): Promise<string | null> {
  if ('fields' in unresolved) {
    return unresolved.fields.file?.url ?? null;
  }

  const asset = await contentfulClient.getAsset(unresolved.sys.id);
  return asset.fields.file?.url ?? null;
}
