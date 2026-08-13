import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Icon } from "@/components/Icon";
import { getWhatsappUrl } from "@/lib/whatsapp";
import type { PortfolioContent } from "@/types/content";

export function Hero({
  content,
  whatsappMessage,
}: {
  content: PortfolioContent["hero"];
  whatsappMessage: string;
}) {
  return (
    <section className="pt-[calc(3.5*var(--leading))] pb-[calc(2.5*var(--leading))]">
      <span className="mb-[var(--half)] block text-[13px] uppercase tracking-[0.06em] text-accent">
        {content.kicker}
      </span>
      <h1 className="max-w-[22ch] text-[clamp(34px,5.6vw,58px)] leading-[1.15] tracking-[-0.01em]">
        {content.title}
      </h1>
      <p className="mt-[calc(1.2*var(--leading))] max-w-[var(--measure)] text-lg leading-[var(--leading)] text-foreground/85">
        {content.sub1}
      </p>
      <div className="mt-[var(--leading)] flex flex-wrap gap-3">
        <Button href={getWhatsappUrl(whatsappMessage)} target="_blank" rel="noopener">
          <Icon name="whatsapp-logo" size={16} />
          {content.ctaProjects}
        </Button>
        <Button href="#servicos" variant="secondary">
          {content.ctaContact}
        </Button>
      </div>
      <div className="mt-[calc(1.5*var(--leading))] flex flex-wrap gap-2">
        {content.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </section>
  );
}
