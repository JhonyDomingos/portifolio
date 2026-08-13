import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/Icon";
import { getWhatsappUrl } from "@/lib/whatsapp";
import type { PortfolioContent } from "@/types/content";

export function Contato({
  content,
  whatsappMessage,
}: {
  content: PortfolioContent["contato"];
  whatsappMessage: string;
}) {
  return (
    <section
      id="contato"
      className="py-[calc(3*var(--leading))] pb-[calc(2.5*var(--leading))] text-left"
    >
      <h2 className="mb-3 max-w-[24ch] text-[32px]">{content.title}</h2>
      <p className="mb-[var(--leading)] max-w-[var(--measure)] text-base leading-[var(--leading)] text-foreground/85">
        {content.sub}
      </p>
      <Button
        href={getWhatsappUrl(whatsappMessage)}
        target="_blank"
        rel="noopener"
        className="px-6 py-3 text-base"
      >
        <Icon name="whatsapp-logo" size={18} />
        {content.ctaLabel}
      </Button>
    </section>
  );
}
