const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jhonatandomingos.dev";

export const SITE_URL = /^https?:\/\//i.test(configuredSiteUrl)
  ? configuredSiteUrl
  : `https://${configuredSiteUrl}`;
