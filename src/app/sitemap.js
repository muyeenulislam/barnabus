import { headers } from "next/headers";

import { getBaseUrl } from "@/utils/get-base-url";

import { ROUTES } from "@/utils/arrays";

export default async function sitemap() {
  const lastModified = new Date();

  const baseUrl = await getBaseUrl();

  return ROUTES.map((route) => ({
    url: `${baseUrl}${route.route}`,
    lastModified,
  }));
}
