import type { MetadataRoute } from "next";

const baseUrl = "https://unifiedfieldtheory.vercel.app";

const pages = [
  "/",
  "/theory/overview",
  "/theory/time",
  "/theory/mass",
  "/theory/field",
  "/theory/equations",
  "/theory/unification-equation",
  "/theory/deep-dive",
  "/theory/visualization",
  "/experiment/overview",
  "/experiment/setup",
  "/experiment/videos",
  "/experiment/replicate",
  "/comparison/navy-patents",
  "/comparison/mainstream",
  "/applications/overview",
  "/guoke/overview",
  "/guoke/evolution",
  "/guoke/book",
  "/about/zhang",
  "/about/project",
];

const locales = ["zh", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page === "/" ? "" : page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "/" ? 1 : page.includes("overview") ? 0.8 : 0.6,
      });
    }
  }

  return entries;
}
