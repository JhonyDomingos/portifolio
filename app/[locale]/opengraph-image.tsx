import { ImageResponse } from "next/og";
import type { Locale } from "@/i18n/routing";
import { getContent } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getContent(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#161826",
          backgroundImage:
            "radial-gradient(1200px 720px at 82% -160px, #2b2741, transparent 60%)",
          color: "#e9e9ed",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: 2,
            color: "#9184d9",
            marginBottom: 24,
          }}
        >
          {content.hero.kicker}
        </div>
        <div style={{ fontSize: 54, fontWeight: 600, maxWidth: 900, lineHeight: 1.15 }}>
          {content.hero.title}
        </div>
        <div style={{ fontSize: 26, color: "#9397ab", marginTop: 32 }}>
          Jhonatan Domingos da Silva
        </div>
      </div>
    ),
    { ...size }
  );
}
