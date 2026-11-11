import ContactForm from "./ContactForm";
import { steps } from "@/lib/data";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function CtaBand({ title = "Расскажите о своей поездке", description = "Опишите свою ситуацию — я изучу ваш запрос и подскажу, с чего начать." }: { title?: string; description?: string }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div><Eyebrow>ОСТАЛИСЬ ВОПРОСЫ?</Eyebrow><h2>{title}</h2><p>{description}</p></div>
        <ContactForm />
      </div>
    </section>
  );
}

export function Steps({ title = "Как я работаю" }: { title?: string }) {
  return (
    <section className="section">
      <div className="container">
        <Eyebrow>ПРОСТО И ПО ДЕЛУ</Eyebrow>
        <div className="section-heading"><h2>{title}</h2><p>Четыре этапа работы: на каждом вы будете понимать, что происходит дальше.</p></div>
        <div className="step-grid">{steps.map((step) => (
          <article className="step" key={step.num}>
            <span className="step-num">{step.num} / 04</span><h3>{step.title}</h3><p>{step.description}</p>
          </article>
        ))}</div>
      </div>
    </section>
  );
}
