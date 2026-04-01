import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { services } from "./lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/despre",
    "/contact",
    "/servicii",
    "/preturi",
    "/expertiza",
    "/intrebari-frecvente",
    "/confidentialitate",
  ];

  const serviceRoutes = services.map((service) => `/servicii/${service.slug}`);
  const expertiseRoutes = [
    "implantologie",
    "protetica",
    "endodontie",
    "ortodontie",
    "parodontologie",
    "chirurgie",
    "estetica",
    "pedodontie",
  ].map((slug) => `/expertiza/${slug}`);

  return [...staticRoutes, ...serviceRoutes, ...expertiseRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
