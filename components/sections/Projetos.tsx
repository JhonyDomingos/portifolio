import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import type { PortfolioContent } from "@/types/content";

export function Projetos({ content }: { content: PortfolioContent["projetos"] }) {
  return (
    <section id="projetos" className="py-[calc(2.5*var(--leading))]">
      <span className="mb-[var(--half)] block text-[13px] uppercase tracking-[0.06em] text-accent">
        {content.kicker}
      </span>
      <h2 className="mb-[var(--leading)] max-w-[30ch] text-[28px]">
        {content.title}
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[var(--leading)]">
        {content.cards.map((card) => (
          <Card key={card.title}>
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-800">
              <Icon name={card.icon} size={20} className="text-accent-200" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.1em] text-accent">
              {card.kicker}
            </span>
            <h3 className="font-heading text-[17px] leading-tight">{card.title}</h3>
            <p className="flex-1 text-[13px] text-foreground/80">{card.body}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {card.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            {card.link && (
              <Button href={card.link} target="_blank" rel="noopener" variant="ghost" className="mt-2 self-start">
                <Icon name="github-logo" size={16} />
                {card.linkLabel}
              </Button>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
