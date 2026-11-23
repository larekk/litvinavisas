import type { Metadata } from "next";
import { Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Консультация" };

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const topics = [
  "Какую визу выбрать.",
  "Где и как подать документы.",
  "Какие документы понадобятся.",
  "Сколько времени может занять оформление.",
  "Что делать после отказа.",
  "Вопросы по уже начатому оформлению.",
];

export default function ConsultationPage() {
  return (
    <>
      <section className="consultation-hero section">
        <div className="container consultation-hero__grid">
          <div className="consultation-hero__copy">
            <h1>Консультация</h1>
            <p className="consultation-hero__lead">Иногда достаточно одного разговора, чтобы понять, что делать дальше.</p>
            <p>Планируете поездку, не знаете, какую визу выбрать, получили отказ или просто запутались в требованиях?</p>
            <p>Необязательно искать ответы самостоятельно. Обсудим вашу ситуацию, ответим на вопросы и подскажем, с чего лучше начать.</p>
          </div>
          <div className="consultation-hero__visual">
            <img
              src={assetBasePath + "/images/consultation-workspace.jpg"}
              alt="Карта, ноутбук и записи для планирования поездки"
              width={1400}
              height={1100}
            />
          </div>
        </div>
      </section>

      <section className="section consultation-details">
        <div className="container consultation-details__grid">
          <div className="consultation-details__topics">
            <Eyebrow>ЧТО МОЖНО ОБСУДИТЬ</Eyebrow>
            <ul className="consultation-topics">
              {topics.map((topic) => <li key={topic}>{topic}</li>)}
            </ul>
            <p>Не нашли свой вопрос в списке? Всё равно напишите. Мы посмотрим, сможем ли помочь.</p>
            <p>Не каждый вопрос требует полного оформления визы. Иногда достаточно консультации, чтобы дальше действовать самостоятельно. А если понадобится наша помощь с документами — будем рады продолжить работу.</p>
          </div>
          <aside className="consultation-pricing" aria-label="Формат и стоимость консультации">
            <div className="consultation-pricing__item">
              <span>ФОРМАТ</span>
              <strong>Онлайн — Telegram, WhatsApp или другой удобный способ связи</strong>
            </div>
            <div className="consultation-pricing__item">
              <span>ПРОДОЛЖИТЕЛЬНОСТЬ</span>
              <strong>От 20 до 60 минут</strong>
            </div>
            <div className="consultation-pricing__item">
              <span>СТОИМОСТЬ</span>
              <strong>100 BYN / 3 000 RUB</strong>
            </div>
            <p className="consultation-pricing__note">Короткий вопрос до 10 минут — бесплатно.</p>
          </aside>
        </div>
      </section>

    </>
  );
}
