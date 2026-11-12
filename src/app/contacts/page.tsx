import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Контакты VIZERA" };

export default function ContactsPage() {
  return <>
    <section className="page-hero"><div className="container"><Eyebrow>МЫ НА СВЯЗИ</Eyebrow><h1>Связаться<br /><em>с нами.</em></h1><p>Мы помогаем с визовыми вопросами и оформлением документов. Екатерина — основательница и главный контакт нашей команды. Работаем онлайн, звонки согласовываем заранее.</p></div></section>
    <section className="section contacts-section"><div className="container contacts-layout">
      <div className="contact-details">
        <Eyebrow>ПРЯМЫЕ КОНТАКТЫ</Eyebrow>
        <h2>Екатерина</h2>
        <p>Основательница и руководитель VIZERA</p>
        <div className="contact-list">
          <a href="https://t.me/KK4TI" target="_blank" rel="noopener noreferrer"><span>Telegram</span><b>@KK4TI ↗</b></a>
          <a href="https://wa.me/79167229053" target="_blank" rel="noopener noreferrer"><span>WhatsApp / Телефон (Россия)</span><b>+7 916 722-90-53 ↗</b></a>
          <a href="tel:+375292773076"><span>Viber / Телефон (Беларусь)</span><b>+375 29 277-30-76 ↗</b></a>
          <a href="mailto:vizera@gmail.com"><span>Email</span><b>vizera@gmail.com ↗</b></a>
        </div>
        <p className="contact-schedule">На связи: пн–пт · 10:00–18:00</p>
      </div>
      <ContactForm compact />
    </div></section>
  </>;
}
