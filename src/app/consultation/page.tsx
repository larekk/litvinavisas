import type { Metadata } from "next";
import { CtaBand, Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Консультация" };

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const topics = [
  "Какой тип визы подходит под вашу ситуацию;",
  "Где и как можно подать документы;",
  "Какие документы понадобятся именно вам;",
  "Сроки и порядок оформления;",
  "Предыдущие отказы и сложные моменты;",
  "Вопросы по уже начатому оформлению.",
];

export default function ConsultationPage() {
  return (
    <>
      <section className="consultation-hero section">
        <div className="container consultation-hero__grid">
          <div className="consultation-hero__copy">
            <Eyebrow>КОНСУЛЬТАЦИЯ</Eyebrow>
            <h1>Консультация</h1>
            <p className="consultation-hero__lead">Иногда достаточно одного разговора, чтобы понять, что делать дальше.</p>
            <p>Если вы только планируете поездку, сомневаетесь в типе визы, получили отказ или хотите разобраться в своей ситуации до начала оформления — можно начать с консультации.</p>
            <p>Обсудим ваш случай, ответим на вопросы и определим, что делать дальше.</p>
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
            <p>Если вашего вопроса нет в списке — всё равно напишите нам. Перед консультацией уточним тему и скажем, сможем ли помочь.</p>
            <p>Если потребуется оформление визы, можно продолжить работу с нами. Если нет — консультация остаётся самостоятельной услугой.</p>
          </div>
          <aside className="consultation-pricing" aria-label="Стоимость консультации">
            <Eyebrow>СТОИМОСТЬ</Eyebrow>
            <h2>Стоимость консультации</h2>
            <div className="consultation-pricing__item">
              <span>Короткий вопрос</span>
              <strong>Бесплатно</strong>
              <p>До 20 минут.</p>
            </div>
            <div className="consultation-pricing__item">
              <span>Подробная консультация</span>
              <strong>По согласованию</strong>
              <p>20–60 минут. Стоимость уточняем заранее, до записи.</p>
            </div>
            <p className="consultation-pricing__note">Консультации проводим онлайн, в заранее согласованное время.</p>
          </aside>
        </div>
      </section>

      <CtaBand title="Есть вопрос? Обсудим его." description="Напишите, что хотите обсудить, и мы согласуем удобное время." submitLabel="Записаться на консультацию" />
    </>
  );
}
