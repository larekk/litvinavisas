import type { Metadata } from "next";
import { ruleItems } from "@/lib/data";
import { CtaBand, Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Правила работы" };

export default function WorkRulesPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>МОЙ ПОДХОД</Eyebrow><h1>Правила<br /><em>работы со мной.</em></h1><p>Мне важно, чтобы сотрудничество было понятным и комфортным для обеих сторон.</p></div></section>
    <section className="section"><div className="container rules-list">{ruleItems.map((item, index) => <article key={item.title}><span>{String(index+1).padStart(2,"0")}</span><h2>{item.title}</h2><p>{item.description}</p></article>)}</div></section>
    <CtaBand title="Есть вопрос по условиям работы?" />
  </>;
}
