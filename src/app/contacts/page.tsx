import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Контакты VIZERA" };

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ContactsPage() {
  return (
    <>
      <section className="page-hero contacts-hero">
        <div className="container contacts-hero__grid">
          <div>
            <Eyebrow>МЫ НА СВЯЗИ</Eyebrow>
            <h1>Контакты</h1>
            <p>Напишите нам удобным способом или оставьте заявку через форму. Мы поможем разобраться в вашем визовом вопросе.</p>
          </div>
          <div className="contacts-hero__visual">
            <img
              src={assetBasePath + "/images/contacts-workspace.jpg"}
              alt="Рабочий стол с ноутбуком, чашкой кофе и телефоном"
              width={1300}
              height={1100}
            />
          </div>
        </div>
      </section>

      <section className="section contacts-section">
        <div className="container contacts-layout">
          <div className="contact-details">
            <Eyebrow>ПРЯМЫЕ КОНТАКТЫ</Eyebrow>
            <h2>Екатерина</h2>
            <div className="contact-list">
              <a href="https://t.me/KK4TI" target="_blank" rel="noopener noreferrer"><span>Telegram</span><b>@KK4TI ↗</b></a>
              <a href="https://wa.me/79167229053" target="_blank" rel="noopener noreferrer"><span>WhatsApp / Телефон (Россия)</span><b>+7 916 722-90-53 ↗</b></a>
              <a href="tel:+375292773076"><span>Viber / Телефон (Беларусь)</span><b>+375 29 277-30-76 ↗</b></a>
              <a href="mailto:vizera@gmail.com"><span>Email</span><b>vizera@gmail.com ↗</b></a>
            </div>
            <div className="contact-office-note">
              <p>Мы работаем без офиса — онлайн и по предварительной договорённости.</p>
              <p>Если нужно встретиться или передать документы, заранее согласуем удобное время и место.</p>
            </div>
            <p className="contact-schedule">На связи: пн–пт · 10:00–18:00</p>
          </div>
          <ContactForm compact submitLabel="Отправить" />
        </div>
      </section>
    </>
  );
}
