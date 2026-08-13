import type { IconName } from "@/components/Icon";

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
  bullets?: string[];
  diagram?: string[];
  cta?: string;
  ctaSub?: string;
}

export interface ProjectCard {
  icon: IconName;
  kicker: string;
  title: string;
  body: string;
  tags: string[];
  link: string | null;
  linkLabel: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  desc: string;
}

export interface PortfolioContent {
  meta: { title: string; description: string };
  whatsappMessage: string;
  nav: {
    sobre: string;
    servicos: string;
    projetos: string;
    skills: string;
    experiencia: string;
  };
  hero: {
    kicker: string;
    title: string;
    sub1: string;
    ctaProjects: string;
    ctaContact: string;
    tags: string[];
  };
  sobre: {
    kicker: string;
    bio1: string;
    bio2: string;
    bio3: string;
    location: string;
  };
  servicos: { kicker: string; title: string; items: ServiceItem[] };
  projetos: { kicker: string; title: string; cards: ProjectCard[] };
  paraQuem: { kicker: string; lead: string; items: string[] };
  skills: {
    kicker: string;
    intro: string;
    backend: string;
    backendItems: string[];
    frontend: string;
    frontendItems: string[];
    arch: string;
    archItems: string[];
    cloud: string;
    cloudItems: string[];
    security: string;
    securityItems: string[];
    ia: string;
    iaItems: string[];
  };
  experiencia: { kicker: string; items: ExperienceItem[] };
  contato: { title: string; sub: string; ctaLabel: string };
  footer: { rights: string };
}
