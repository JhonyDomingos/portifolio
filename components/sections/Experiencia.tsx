import type { PortfolioContent } from "@/types/content";

export function Experiencia({ content }: { content: PortfolioContent["experiencia"] }) {
  return (
    <section id="experiencia" className="py-[calc(2.5*var(--leading))]">
      <span className="mb-[var(--leading)] block text-[13px] uppercase tracking-[0.06em] text-accent">
        {content.kicker}
      </span>

      {content.items.map((item) => (
        <div
          key={item.company}
          className="grid grid-cols-[minmax(0,180px)_minmax(0,1fr)] gap-[var(--leading)] border-t border-divider py-4"
        >
          <p className="text-[13px] text-foreground/60">{item.period}</p>
          <div>
            <h3 className="mb-0.5 text-[19px]">{item.role}</h3>
            <p className="mb-2 text-sm text-accent-300">
              {item.company} · {item.location}
            </p>
            <p className="max-w-[60ch] text-[15px] leading-[var(--leading)] text-foreground/78">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
