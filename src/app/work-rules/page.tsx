import type { Metadata } from "next";
import { ruleItems } from "@/lib/data";
import { CtaBand, Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Правила работы" };

export default function WorkRulesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Eyebrow>НЕСКОЛЬКО СЛОВ О РАБОТЕ С НАМИ</Eyebrow>
          <h1>Правила<br /><em>работы.</em></h1>
          <p>Нам важно, чтобы сотрудничество было понятным и комфортным для всех. У нас есть несколько простых принципов, о которых мы предпочитаем говорить заранее.</p>
        </div>
      </section>
      <section className="section">
        <div className="container rules-list">
          {ruleItems.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")} /</span>
              <h2>{item.title}</h2>
              <div className="rules-list__copy">
                {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Есть вопрос о наших правилах?" description="Напишите нам — уточним детали и обсудим удобный формат работы." />
    </>
  );
}
