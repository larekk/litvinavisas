import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { originalUrl } from "@/lib/data";
import { Eyebrow } from "@/components/SectionParts";
import OfferDocument from "@/components/OfferDocument";

type Props = { params: Promise<{ slug: string }> };
const documents: Record<string, { title: string; id: string }> = {
  privacy: { title: "Политика конфиденциальности", id: "83329416" },
  offer: { title: "Публичная оферта", id: "83314476" },
};

export function generateStaticParams() { return Object.keys(documents).map((slug) => ({ slug })); }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  return {title: documents[slug]?.title ?? "Документ"};
}

export default async function LegalPage({params}: Props) {
  const {slug} = await params;
  const document = documents[slug];
  if (!document) notFound();
  if (slug === "offer") {
    return <>
      <section className="page-hero"><div className="container"><Eyebrow>ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ</Eyebrow><h1>Публичная оферта</h1><p>Договор оказания услуг ООО «Визэра»</p></div></section>
      <section className="section"><div className="container"><OfferDocument /></div></section>
    </>;
  }
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ</Eyebrow><h1>{document.title}</h1><p>На время разработки полный документ доступен на Tilda. Перед публикацией нового сайта текст и реквизиты нужно проверить и перенести.</p></div></section>
    <section className="section"><div className="container"><div className="legal-panel"><h2>Открыть действующий документ</h2><p>Здесь пока ссылка на исходный документ, без сокращений и изменений его юридического содержания.</p><a className="button button-dark" href={originalUrl(document.id)} target="_blank" rel="noreferrer">Читать на Tilda ↗</a><p><Link href="/contacts#contact-form" className="text-link">Написать Екатерине →</Link></p></div></div></section>
  </>;
}
