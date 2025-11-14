const DEFAULT_OG_IMAGE = "/icons/logo-chrome.svg";
const DEFAULT_TAB_IMAGE = "/icons/barnabus-logo.svg";

export async function generateMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
}) {
  const url = `${path}`;

  return {
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
