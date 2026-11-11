import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Контакты Екатерины" };

export default function ContactsPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>Я НА СВЯЗИ</Eyebrow><h1>Связаться<br /><em>со мной.</em></h1><p>Меня зовут Екатерина. Я лично отвечаю на вопросы по визам, помогаю с оформлением и согласовываю встречи заранее. Работаю онлайн.</p></div></section>
    <section className="section contacts-section"><div className="container contacts-layout">
      <div className="contact-details">
        <Eyebrow>ПРЯМЫЕ КОНТАКТЫ</Eyebrow>
        <h2>Екатерина</h2>
        <p>Основательница LITVINAVISAS</p>
        <div className="contact-list">
          <a href="https://t.me/KK4TI" target="_blank" rel="noopener noreferrer"><span>Telegram</span><b>@KK4TI ↗</b></a>
          <a href="https://wa.me/79167229053" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><b>+7 916 722-90-53 ↗</b></a>
          <a href="tel:+375292773076"><span>Viber / телефон</span><b>+375 29 277-30-76 ↗</b></a>
          <a href="mailto:vizera@gmail.com"><span>Email</span><b>vizera@gmail.com ↗</b></a>
        </div>
        <p className="contact-schedule">На связи: пн–пт · 10:00–18:00</p>
      </div>
      <ContactForm compact />
    </div></section>
  </>;
}
