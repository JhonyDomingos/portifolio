import { Tag } from "@/components/ui/Tag";
import type { PortfolioContent } from "@/types/content";

export function Skills({ content }: { content: PortfolioContent["skills"] }) {
  const groups: { label: string; items: string[] }[] = [
    { label: content.backend, items: content.backendItems },
    { label: content.frontend, items: content.frontendItems },
    { label: content.arch, items: content.archItems },
    { label: content.cloud, items: content.cloudItems },
    { label: content.security, items: content.securityItems },
    { label: content.ia, items: content.iaItems },
  ];

  return (
    <section id="skills" className="py-[calc(1.6*var(--leading))]">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.06em] text-foreground/50">
        {content.kicker}
      </span>
      <p className="mb-[var(--leading)] max-w-[60ch] text-[13.5px] text-foreground/55">
        {content.intro}
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[var(--leading)]">
        {groups.map((group) => (
          <div key={group.label}>
            <h4 className="mb-2 text-[12.5px] font-medium text-foreground/65">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
