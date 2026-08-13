import pt from "@/content/pt.json";
import en from "@/content/en.json";
import es from "@/content/es.json";
import type { PortfolioContent } from "@/types/content";
import type { Locale } from "@/i18n/routing";

// JSON imports widen string fields (e.g. `icon`) to `string`, so we assert
// the shape here — the source files are authored against PortfolioContent.
const CONTENT = { pt, en, es } as unknown as Record<Locale, PortfolioContent>;

export function getContent(locale: Locale): PortfolioContent {
  return CONTENT[locale];
}
