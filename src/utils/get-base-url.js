import { headers } from "next/headers";

export const getBaseUrl = async () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  const h = await headers();

  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const protocol = h.get("x-forwarded-proto") ?? "https";

  return `${protocol}://${host}`;
};
