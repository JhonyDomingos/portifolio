import { Icon } from "@/components/Icon";
import type { PortfolioContent } from "@/types/content";

const LINKEDIN_URL = "https://www.linkedin.com/in/jhonatan-domingos-da-silva";
const GITHUB_URL = "https://github.com/JhonyDomingos";

export function Footer({ content }: { content: PortfolioContent["footer"] }) {
  return (
    <footer className="flex flex-wrap items-center gap-3 border-t border-divider py-[var(--leading)] pb-[calc(2*var(--leading))] text-[13px] text-foreground/55">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1.5 hover:text-accent"
      >
        <Icon name="linkedin-logo" size={16} />
        LinkedIn
      </a>
      <span>·</span>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-1.5 hover:text-accent"
      >
        <Icon name="github-logo" size={16} />
        GitHub
      </a>
      <span>·</span>
      <span>© {new Date().getFullYear()} Jhonatan Domingos da Silva. {content.rights}</span>
    </footer>
  );
}
