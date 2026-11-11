import type { Metadata } from "next";
import { CtaBand, Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Консультация" };

const topics = ["Подбор типа визы", "Страна и способ подачи", "Индивидуальный список документов", "Порядок и сроки оформления", "Предыдущие отказы и сложные ситуации", "Вопросы по начатому оформлению"];

export default function ConsultationPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>ОТДЕЛЬНАЯ УСЛУГА</Eyebrow><h1>Консультация</h1><p>Иногда достаточно одного разговора, чтобы понять, что делать дальше. Я помогу разобраться в вашей ситуации и составить понятный план действий.</p></div></section>
    <section className="section"><div className="container"><div className="facts-grid"><div><span>Формат</span><strong>Онлайн</strong><p>Telegram, WhatsApp или другой удобный способ связи</p></div><div><span>Продолжительность</span><strong>До 60 минут</strong></div><div><span>Стоимость*</span><strong>100 BYN / 3 000 RUB</strong></div></div><p className="fineprint">*Указано в исходном макете Tilda. Стоимость необходимо подтвердить перед публикацией.</p></div></section>
    <section className="section soft-section"><div className="container"><Eyebrow>О ЧЁМ ПОГОВОРИМ</Eyebrow><h2>Какие вопросы можно разобрать</h2><div className="topic-grid">{topics.map((topic, i) => <div key={topic}><span>0{i+1}</span><h3>{topic}</h3></div>)}</div></div></section>
    <CtaBand title="Хотите обсудить свою ситуацию?" description="Напишите, с каким вопросом хотите разобраться. Я предложу удобный формат и время консультации." />
  </>;
}
