import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { projects } from "@/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    if (process.env.URL) {
      baseUrl = process.env.URL;
    } else if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
      baseUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    } else if (process.env.VERCEL_URL) {
      baseUrl = `https://${process.env.VERCEL_URL}`;
    } else {
      baseUrl = "https://nadeemalamportfolio.netlify.app";
    }
  }

  baseUrl = baseUrl.replace(/\/+$/, "");

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
