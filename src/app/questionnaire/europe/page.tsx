import type { Metadata } from "next";
import Link from "next/link";
import EuropeQuestionnaire from "@/components/EuropeQuestionnaire";

export const metadata: Metadata = {
  title: "Опросный лист для европейских виз",
  description: "Общий опросный лист VIZERA для предварительной подготовки данных к оформлению европейских виз.",
};

export default function EuropeQuestionnairePage() {
  return (
    <>
      <section className="section schengen-questionnaire-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/visas">Все направления</Link>
            <span> / </span>
            <Link href="/visas#europe">Европа</Link>
            <span> / </span>
            <span>Опросный лист</span>
          </div>
          <p className="eyebrow">ВИЗОВЫЙ ОПРОСНИК</p>
          <h1>Расскажите о себе<br />и вашей поездке.</h1>
          <p>Вопросы собраны по структуре стандартной шенгенской анкеты: личные данные, паспорт, поездка, работа, принимающая сторона и расходы. Заполняйте только те пункты, которые относятся к вашей ситуации.</p>
        </div>
      </section>
      <section className="section schengen-questionnaire-section">
        <div className="container">
          <EuropeQuestionnaire />
        </div>
      </section>
    </>
  );
}
