import type { Metadata } from "next";
import { ruleItems } from "@/lib/data";
import { Eyebrow } from "@/components/SectionParts";

export const metadata: Metadata = { title: "Наш подход" };

export default function WorkRulesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Eyebrow>НАШ ПОДХОД</Eyebrow>
          <h1>Несколько слов о работе с нами.</h1>
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
