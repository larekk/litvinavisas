import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries, regions } from "@/lib/data";
import { CtaBand, Eyebrow, Steps } from "@/components/SectionParts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...regions, ...countries].map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = regions.find((item) => item.slug === slug) ?? countries.find((item) => item.slug === slug);
  return { title: page?.title ?? "Направление" };
}

export default async function DirectionPage({ params }: Props) {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (region) return <>
    <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/visas">Визы</Link><span> / </span><span>{region.title}</span></div><Eyebrow>НАПРАВЛЕНИЯ · РЕГИОН</Eyebrow><h1>{region.title}</h1><p>{region.description}</p></div></section>
    <section className="section"><div className="container"><div className="section-heading"><h2>Страны региона</h2><p>Подробные страницы доступны для некоторых направлений. По остальным можно задать мне вопрос.</p></div>
      <div className="country-grid">{region.countries.map((destination) => (
        <Link id={destination.id} className="country-row" key={destination.id} href={destination.slug ? `/visas/${destination.slug}` : "/contacts#contact-form"}>
          <span>{destination.name}</span><span>{destination.slug ? "Подробнее ↗" : "Уточнить оформление ↗"}</span>
        </Link>
      ))}</div>
    </div></section>
    <Steps title="Шаг за шагом: оформление визы" />
    <CtaBand title="Остались вопросы по визе?" />
  </>;

  const country = countries.find((item) => item.slug === slug);
  if (!country) notFound();
  const parent = regions.find((item) => item.slug === country.region);
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/visas">Визы</Link><span> / </span><Link href={`/visas/${country.region}`}>{parent?.title}</Link><span> / </span><span>{country.name}</span></div><Eyebrow>ВИЗОВОЕ НАПРАВЛЕНИЕ</Eyebrow><h1>{country.title}</h1><p>{country.intro}</p><Link className="button button-dark" href="/contacts#contact-form">Оставить заявку ↗</Link></div></section>
    <section className="section"><div className="container"><div className="section-heading"><h2>Варианты оформления</h2><p>Перечень ориентировочный. Подходящая категория зависит от гражданства, цели поездки и актуальных требований.</p></div><div className="info-grid">{country.types.map((item, index) => <article className="info-card" key={item.title}><span className="card-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section soft-section"><div className="container two-col"><div><Eyebrow>КАК Я МОГУ ПОМОЧЬ</Eyebrow><h2>Сопровождение<br />под вашу задачу.</h2></div><div className="body-copy"><p><strong>Полное сопровождение.</strong> Разбираю ситуацию, помогаю подготовить анкеты и комплект документов и объясняю порядок действий.</p><p><strong>Отдельные услуги.</strong> Можно обратиться за консультацией, заполнением или проверкой анкеты, подготовкой к подаче.</p><p className="fineprint">Визовые требования меняются. Перед подачей проверяйте действующие условия в официальных источниках.</p></div></div></section>
    <Steps title="Как проходит работа" />
    <CtaBand title={`Обсудим вашу поездку: ${country.name}`} />
  </>;
}
