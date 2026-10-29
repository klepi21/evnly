import type { Metadata, Viewport } from "next";
import { dict, type Locale } from "./content";

export const SITE_URL = "https://evnly.vercel.app";

export function buildMetadata(locale: Locale): Metadata {
  const t = dict[locale].meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: t.title,
    description: t.description,
    alternates: { canonical: locale === "el" ? "/" : "/en", languages: { el: "/", en: "/en" } },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: locale === "el" ? "/" : "/en",
      siteName: "evnly",
      locale: locale === "el" ? "el_GR" : "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "evnly" }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: ["/og.png"] },
  };
}

export const viewport: Viewport = { themeColor: "#0a0a0a" };
