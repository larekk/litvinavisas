import ContactForm from "./ContactForm";
import { steps } from "@/lib/data";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function CtaBand({ title = "Расскажите о своей поездке", description = "Опишите свою ситуацию — мы изучим ваш запрос и подскажем, с чего начать.", minimal = false, submitLabel }: { title?: string; description?: string; minimal?: boolean; submitLabel?: string }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>{!minimal && <Eyebrow>ОСТАЛИСЬ ВОПРОСЫ?</Eyebrow>}<h2>{title}</h2>{!minimal && <p>{description}</p>}</div>
        <ContactForm hideIntro={minimal} submitLabel={submitLabel} />
      </div>
    </section>
  );
}

export function Steps({ title = "Как мы работаем" }: { title?: string }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading"><h2>{title}</h2></div>
        <div className="step-grid">{steps.map((step) => (
          <article className="step" key={step.num}>
            <span className="step-num">{step.num} /</span><h3>{step.title}</h3><p>{step.description}</p>
          </article>
        ))}</div>
      </div>
    </section>
  );
}
