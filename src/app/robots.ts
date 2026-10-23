import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    try {
      const headerList = await headers();
      const host = headerList.get("x-forwarded-host") || headerList.get("host");
      const proto = headerList.get("x-forwarded-proto") || "https";
      if (host) {
        baseUrl = `${proto}://${host}`;
      }
    } catch {
      // Fallback if headers() is unavailable
    }
  }

  if (!baseUrl) {
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      baseUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    } else if (process.env.VERCEL_URL) {
      baseUrl = `https://${process.env.VERCEL_URL}`;
    } else {
      baseUrl = "https://nadeem-portfolio.vercel.app";
    }
  }

  baseUrl = baseUrl.replace(/\/+$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
