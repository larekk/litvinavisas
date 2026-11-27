import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CountryQuestionnaire from "@/components/CountryQuestionnaire";
import { countryQuestionnaires, questionnaireSlugs } from "@/lib/countryQuestionnaires";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return questionnaireSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const questionnaire = countryQuestionnaires[slug];
  return { title: questionnaire ? `Опросный лист — ${questionnaire.country}` : "Опросный лист" };
}

export default async function CountryQuestionnairePage({ params }: Props) {
  const { slug } = await params;
  const questionnaire = countryQuestionnaires[slug];
  if (!questionnaire) notFound();

  return (
    <>
      <section className="section schengen-questionnaire-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/visas">Все направления</Link>
            <span> / </span>
            <Link href={`/visas/${questionnaire.slug}`}>{questionnaire.country}</Link>
            <span> / </span>
            <span>Опросный лист</span>
          </div>
          <p className="eyebrow">ВИЗОВЫЙ ОПРОСНИК</p>
          <h1>Опросный лист<br />{questionnaire.country}</h1>
          <p>{questionnaire.subtitle}</p>
        </div>
      </section>
      <section className="section schengen-questionnaire-section">
        <div className="container">
          <CountryQuestionnaire questionnaire={questionnaire} />
        </div>
      </section>
    </>
  );
}
