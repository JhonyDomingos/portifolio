"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { Button } from "./ui/Button";
import { Icon } from "./Icon";
import { getWhatsappUrl } from "@/lib/whatsapp";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export function Nav({
  whatsappMessage,
  ctaLabel,
}: {
  whatsappMessage: string;
  ctaLabel: string;
}) {
  const t = useTranslations("nav");
  const activeLocale = useLocale();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#sobre", label: t("sobre") },
    { href: "#servicos", label: t("servicos") },
    { href: "#projetos", label: t("projetos") },
    { href: "#skills", label: t("skills") },
    { href: "#experiencia", label: t("experiencia") },
  ];

  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-divider bg-background/82 px-[var(--edge)] py-3 backdrop-blur">
      <span className="mr-auto font-heading text-lg font-medium">
        Jhonatan Domingos
      </span>

      <div className="hidden items-center gap-4 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-foreground/85 hover:text-accent"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-md border border-divider md:inline-flex">
        {LOCALES.map((l) => (
          <Link
            key={l.code}
            href="/"
            locale={l.code}
            className={`border-l border-divider px-3 py-1.5 text-[13px] first:border-l-0 ${
              activeLocale === l.code
                ? "text-accent shadow-[inset_0_0_0_1px_var(--color-accent)]"
                : "hover:bg-foreground/7"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <Button
        href={getWhatsappUrl(whatsappMessage)}
        target="_blank"
        rel="noopener"
        className="hidden md:inline-flex"
      >
        <Icon name="whatsapp-logo" size={16} />
        {ctaLabel}
      </Button>

      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="ml-auto rounded-md border border-divider p-2 md:hidden"
      >
        <Icon name={open ? "x" : "list"} size={20} />
      </button>

      {open && (
        <div className="flex w-full flex-col gap-3 border-t border-divider pt-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-foreground/85"
            >
              {l.label}
            </a>
          ))}
          <div className="inline-flex w-fit overflow-hidden rounded-md border border-divider">
            {LOCALES.map((l) => (
              <Link
                key={l.code}
                href="/"
                locale={l.code}
                className={`border-l border-divider px-3 py-1.5 text-[13px] first:border-l-0 ${
                  activeLocale === l.code ? "text-accent" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Button
            href={getWhatsappUrl(whatsappMessage)}
            target="_blank"
            rel="noopener"
            className="w-full"
          >
            <Icon name="whatsapp-logo" size={16} />
            {ctaLabel}
          </Button>
        </div>
      )}
    </nav>
  );
}
