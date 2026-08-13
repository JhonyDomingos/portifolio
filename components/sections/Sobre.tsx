import { Tag } from "@/components/ui/Tag";
import { Icon } from "@/components/Icon";
import type { PortfolioContent } from "@/types/content";

export function Sobre({ content }: { content: PortfolioContent["sobre"] }) {
  return (
    <section id="sobre" className="py-[calc(2.5*var(--leading))]">
      <span className="mb-[var(--half)] block text-[13px] uppercase tracking-[0.06em] text-accent">
        {content.kicker}
      </span>
      <p className="mb-[var(--leading)] max-w-[var(--measure)] text-[19px] font-medium leading-[calc(1.3*var(--leading))] text-foreground">
        {content.bio1}
      </p>
      <p className="mb-3 max-w-[var(--measure)] text-base leading-[var(--leading)] text-foreground/85">
        {content.bio2}
      </p>
      <p className="mb-[var(--leading)] max-w-[var(--measure)] text-base leading-[var(--leading)] text-foreground/85">
        {content.bio3}
      </p>
      <Tag variant="outline">
        <Icon name="map-pin" size={14} className="mr-1" />
        {content.location}
      </Tag>
    </section>
  );
}
