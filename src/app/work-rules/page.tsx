import type { Metadata } from "next";
import { ruleItems } from "@/lib/data";

export const metadata: Metadata = { title: "Принципы работы" };

export default function WorkRulesPage() {
  return (
    <>
      <section className="section work-rules-intro">
        <div className="container">
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
    </>
  );
}
