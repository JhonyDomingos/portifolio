import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { getWhatsappUrl } from "@/lib/whatsapp";
import type { PortfolioContent } from "@/types/content";

export function Servicos({
  content,
  whatsappMessage,
}: {
  content: PortfolioContent["servicos"];
  whatsappMessage: string;
}) {
  return (
    <section id="servicos" className="py-[calc(2.5*var(--leading))]">
      <span className="mb-[var(--half)] block text-[13px] uppercase tracking-[0.06em] text-accent">
        {content.kicker}
      </span>
      <h2 className="mb-[var(--leading)] max-w-[28ch] text-[28px]">
        {content.title}
      </h2>

      {content.items.map((item) => (
        <div
          key={item.num}
          className="grid grid-cols-[minmax(48px,80px)_minmax(0,1fr)] items-baseline gap-x-[clamp(20px,4vw,64px)] gap-y-[var(--leading)] border-t border-divider py-[calc(1.1*var(--leading))]"
        >
          <p className="font-heading text-[15px] font-medium text-accent">
            {item.num}
          </p>
          <div>
            <h3 className="mb-1.5 text-xl">{item.title}</h3>
            <p className="max-w-[60ch] text-[15px] leading-[var(--leading)] text-foreground/78">
              {item.desc}
            </p>

            {item.bullets && (
              <ul className="mt-3 grid max-w-[60ch] grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-4 gap-y-1.5 p-0">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex list-none items-baseline gap-2 text-sm text-foreground/78"
                  >
                    <span className="text-accent">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {item.diagram && (
              <div className="mt-3 flex flex-col gap-2.5">
                {item.diagram.map((line) => {
                  const steps = line.split(" → ");
                  return (
                    <div key={line} className="flex flex-wrap items-center gap-1.5">
                      {steps.map((step, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <Tag variant="outline">{step}</Tag>
                          {i < steps.length - 1 && (
                            <span className="text-accent" aria-hidden>
                              →
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}

            {item.cta && (
              <div className="mt-3">
                <p className="mb-2 text-sm text-foreground/78">{item.ctaSub}</p>
                <Button href={getWhatsappUrl(whatsappMessage)} target="_blank" rel="noopener">
                  {item.cta}
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
