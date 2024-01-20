/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly CONTENTFUL_SPACE_ID: string;
    readonly CONTENTFUL_DELIVERY_TOKEN: string;
    readonly CONTENTFUL_PREVIEW_TOKEN: string;
    readonly FACEBOOK_PAGE_ID: string;
    readonly FIREBASE_API_KEY: string;
    readonly FIREBASE_AUTH_DOMAIN: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_STORAGE_BUCKET: string;
    readonly FIREBASE_MESSAGING_SENDER_ID: string;
    readonly FIREBASE_APP_ID: string;
    readonly FIREBASE_MEASUREMENT_ID: string;
  }
