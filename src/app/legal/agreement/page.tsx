import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Договор об оказании услуг", robots: { index: false } };
export default function AgreementPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ</Eyebrow><h1>Договор об<br />оказании услуг</h1><p>Текст договора пока не предоставлен для переноса в React-проект.</p></div></section>
    <section className="section"><div className="container"><div className="legal-panel"><h2>Документ готовится</h2><p>Чтобы не публиковать неподтверждённые юридические условия, здесь пока нет текста договора. Официальные условия можно уточнить у Екатерины.</p><Link className="button button-dark" href="/contacts#contact-form">Задать вопрос ↗</Link></div></div></section>
  </>;
}
