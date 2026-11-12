import type { Metadata } from "next";
import { CtaBand, Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Консультация" };

const topics = ["Подбор типа визы", "Страна и способ подачи", "Индивидуальный список документов", "Порядок и сроки оформления", "Предыдущие отказы и сложные ситуации", "Оценка шансов на получение визы", "Вопросы по начатому оформлению"];

export default function ConsultationPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>РАЗБЕРЁМСЯ ВМЕСТЕ</Eyebrow><h1>Консультация</h1><p>Иногда достаточно одного разговора, чтобы стало понятно, что делать дальше. Мы поможем разобраться в вашей ситуации и составить понятный план действий. Екатерина подключается к сложным вопросам лично.</p></div></section>
    <section className="section"><div className="container"><div className="facts-grid">
      <div><span>Формат</span><strong>Онлайн</strong><p>Telegram, WhatsApp или другой удобный способ связи</p></div>
      <div><span>Продолжительность</span><strong>От 20 до 60 минут</strong><p>Формат и длительность подбираем под ваш запрос</p></div>
      <div><span>Короткий вопрос</span><strong>До 20 минут — бесплатно</strong><p>Если потребуется подробная консультация, стоимость согласуем заранее</p></div>
    </div></div></section>
    <section className="section soft-section"><div className="container"><Eyebrow>О ЧЁМ ПОГОВОРИМ</Eyebrow><h2>Какие вопросы можно разобрать</h2><div className="topic-grid">{topics.map((topic, i) => <div key={topic}><span>{String(i + 1).padStart(2, "0")}</span><h3>{topic}</h3></div>)}</div></div></section>
    <CtaBand title="Хотите обсудить свою ситуацию?" description="Напишите, с каким вопросом хотите разобраться. Мы предложим удобный формат и время консультации." />
  </>;
}
