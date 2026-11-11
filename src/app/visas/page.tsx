import Link from "next/link";
import type { Metadata } from "next";
import { countries, regions } from "@/lib/data";
import { CtaBand, Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Визы и направления" };

export default function VisasPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>НАПРАВЛЕНИЯ</Eyebrow><h1>Визы в разные<br /><em>страны мира.</em></h1><p>Помогу разобраться с визовыми требованиями для вашей поездки. Выберите регион или конкретную страну.</p></div></section>
    <section className="section"><div className="container"><div className="section-heading"><h2>Регионы</h2><p>Выберите часть света — внутри найдёте направления, с которыми я работаю.</p></div><div className="region-grid">{regions.map((region, i) => <Link className="region-card" key={region.slug} href={`/visas/${region.slug}`}><span>{String(i + 1).padStart(2,"0")}</span><h3>{region.title}</h3><span className="region-card-bottom">{region.countries.length} направлений <b>↗</b></span></Link>)}</div></div></section>
    <section className="section soft-section"><div className="container"><div className="section-heading"><h2>Отдельные страны</h2><p>Страницы с подробной информацией о визовых услугах.</p></div><div className="country-grid">{countries.map((country) => <Link className="country-row" href={`/visas/${country.slug}`} key={country.slug}><span>{country.name}</span><span>Подробнее ↗</span></Link>)}</div></div></section>
    <CtaBand title="Нет вашей страны в списке?" description="Я работаю не только с перечисленными направлениями. Расскажите о своей поездке." />
  </>;
}
