import { headers } from "next/headers";

import { ROUTES } from "@/utils/arrays";

export const getBaseUrl = async () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? "https";

  return `${protocol}://${host}`;
};

export default async function sitemap() {
  const lastModified = new Date();

  const baseUrl = await getBaseUrl();

  return ROUTES.map((route) => ({
    url: `${baseUrl}${route.route}`,
    lastModified,
  }));
}
