import { Icon } from "@/components/Icon";
import type { PortfolioContent } from "@/types/content";

export function ParaQuem({ content }: { content: PortfolioContent["paraQuem"] }) {
  return (
    <section className="py-[calc(2.5*var(--leading))]">
      <span className="mb-[var(--half)] block text-[13px] uppercase tracking-[0.06em] text-accent">
        {content.kicker}
      </span>
      <p className="mb-[var(--leading)] max-w-[var(--measure)] text-[17px] leading-[var(--leading)] text-foreground/85">
        {content.lead}
      </p>
      <ul className="grid max-w-[1000px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-[var(--leading)] gap-y-3 p-0">
        {content.items.map((item) => (
          <li
            key={item}
            className="flex list-none items-baseline gap-2.5 text-[15px] leading-[var(--leading)] text-foreground/85"
          >
            <Icon name="check" size={16} className="shrink-0 text-accent" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
