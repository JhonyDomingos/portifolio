import { setRequestLocale } from "next-intl/server";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Servicos } from "@/components/sections/Servicos";
import { Projetos } from "@/components/sections/Projetos";
import { ParaQuem } from "@/components/sections/ParaQuem";
import { Skills } from "@/components/sections/Skills";
import { Experiencia } from "@/components/sections/Experiencia";
import { Contato } from "@/components/sections/Contato";
import type { Locale } from "@/i18n/routing";
import { getContent } from "@/lib/content";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Jhonatan Domingos · Engenharia de Software",
    provider: {
      "@type": "Person",
      name: "Jhonatan Domingos da Silva",
      jobTitle: "Software Engineer",
      url: "https://www.linkedin.com/in/jhonatan-domingos-da-silva",
      sameAs: [
        "https://www.linkedin.com/in/jhonatan-domingos-da-silva",
        "https://github.com/JhonyDomingos",
      ],
    },
    areaServed: "BR",
    address: { "@type": "PostalAddress", addressLocality: "João Pessoa", addressRegion: "PB", addressCountry: "BR" },
    description: content.meta.description,
  };

  return (
    <div
      className="min-h-screen text-foreground"
      style={{
        background:
          "radial-gradient(1200px 720px at 82% -160px, color-mix(in srgb, var(--color-accent-900) 70%, transparent), transparent 60%), " +
          "radial-gradient(1100px 800px at -10% 100%, color-mix(in srgb, black 30%, transparent), transparent 55%), " +
          "var(--color-background)",
      }}
    >
      <script
        type="application/ld+json"
        // Escape `<` so stored content can never break out of the script tag
        // (e.g. a future edit accidentally containing "</script>").
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav whatsappMessage={content.whatsappMessage} ctaLabel={content.hero.ctaProjects} />

      <div className="mx-auto max-w-[1200px] px-[var(--edge)]">
        <Hero content={content.hero} whatsappMessage={content.whatsappMessage} />
        <hr className="hr" />
        <Sobre content={content.sobre} />
        <hr className="hr" />
        <Servicos content={content.servicos} whatsappMessage={content.whatsappMessage} />
        <hr className="hr" />
        <Projetos content={content.projetos} />
        <hr className="hr" />
        <ParaQuem content={content.paraQuem} />
        <div className="h-px bg-divider" />
        <Skills content={content.skills} />
        <hr className="hr" />
        <Experiencia content={content.experiencia} />
        <hr className="hr" />
        <Contato content={content.contato} whatsappMessage={content.whatsappMessage} />
        <Footer content={content.footer} />
      </div>
    </div>
  );
}
