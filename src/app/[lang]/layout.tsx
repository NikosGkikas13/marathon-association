import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveals } from "@/components/Reveals";
import { getDictionary } from "@/lib/dictionary";
import { LOCALES, isLocale } from "@/lib/i18n";
import "../globals.css";

const serif = Source_Serif_4({
  subsets: ["latin", "greek"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: { default: dict.meta.title, template: `%s · ${dict.brand.name}` },
    description: dict.meta.description,
    alternates: { languages: { el: "/el", en: "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={serif.variable}>
      <body>
        <Header lang={lang} dict={{ brand: dict.brand, nav: dict.nav }} />
        {children}
        <Footer lang={lang} dict={dict} />
        <Reveals />
      </body>
    </html>
  );
}
