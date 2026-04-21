import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-21");

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    ...services.map((service) => ({
      url: `${site.url}/${service.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    {
      url: `${site.url}/referencie`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${site.url}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${site.url}/ochrana-osobnych-udajov`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
