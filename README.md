# Portfólio — Jhonatan Domingos

Landing page pessoal (PT/EN/ES) construída em Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, usando o design system "Nocturne". Objetivo: converter visitantes (donos de empresa, indicações de rede) em contato via WhatsApp.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `next-intl` para rotas por idioma (`/pt`, `/en`, `/es`)
- `@phosphor-icons/react`

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

- `NEXT_PUBLIC_WHATSAPP_NUMBER` — número usado nos CTAs (formato `55DDDNUMERO`, só dígitos)
- `NEXT_PUBLIC_SITE_URL` — URL canônica usada em metadata, sitemap e OG image

## Conteúdo

Os textos ficam em `content/{pt,en,es}.json`, tipados por `types/content.ts`. Editar esses arquivos atualiza o site sem tocar em componentes.

## Deploy

Projeto pensado para deploy na Vercel (zero-config para Next.js). Ver `.env.example` para as variáveis a configurar no projeto.
