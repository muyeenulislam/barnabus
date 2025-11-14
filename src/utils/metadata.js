import { getBaseUrl } from "./get-base-url";

const DEFAULT_OG_IMAGE = "/icons/logo-chrome.svg";
const DEFAULT_TAB_IMAGE = "/icons/barnabus-logo.svg";

export async function createMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
}) {
  const baseUrl = await getBaseUrl();
  const url = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    icons: {
      icon: [
        {
          url: DEFAULT_TAB_IMAGE,
          href: DEFAULT_TAB_IMAGE,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: "Barnabus",
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Barnabus agentic intelligence",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@barnabus-labs",
      images: [image],
    },
  };
}

export const metadataDefaults = {
  baseUrl: await getBaseUrl(),
  ogImage: DEFAULT_OG_IMAGE,
};
