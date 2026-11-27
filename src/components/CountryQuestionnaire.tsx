"use client";

import { useState } from "react";
import type { VisaQuestionnaire } from "@/lib/countryQuestionnaires";

export default function CountryQuestionnaire({ questionnaire }: { questionnaire: VisaQuestionnaire }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState("");
  const [exporting, setExporting] = useState(false);

  const groups = questionnaire.groups.map((group, groupIndex) => ({
    ...group,
    questions: group.questions.map((question, questionIndex) => ({
      ...question,
      id: `country-question-${questionnaire.slug}-${groupIndex + 1}-${questionIndex + 1}`,
    })),
  }));

  const update = (id: string, value: string) => {
    setAnswers((previous) => ({ ...previous, [id]: value }));
    if (feedback) setFeedback("");
  };
  const displayAnswer = (id: string) => answers[id]?.trim() || "—";

  function exportText() {
    return [
      `VIZERA — ОПРОСНЫЙ ЛИСТ: ${questionnaire.country.toUpperCase()}`,
      `Дата заполнения: ${new Date().toLocaleDateString("ru-RU")}`,
      "",
      ...groups.flatMap((group) => [
        group.title,
        ...group.questions.map((question) => `${question.label}: ${displayAnswer(question.id)}`),
        "",
      ]),
      "Это внутренний опросник VIZERA, а не официальная визовая анкета.",
    ].join("\n");
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(exportText());
      setFeedback("Вопросы и ответы скопированы. Их можно вставить в Word, письмо или другой документ.");
    } catch {
      setFeedback("Браузер не разрешил копирование. Можно скачать заполненный Word или PDF.");
    }
  }

  async function downloadDocx() {
    if (exporting) return;
    setExporting(true);
    setFeedback("");
    try {
      // The completed document is created on-device; the answers are not uploaded.
      const { Document, HeadingLevel, Packer, Paragraph, TextRun } = await import("docx");
      const content = [
        new Paragraph({ text: "ОПРОСНЫЙ ЛИСТ VIZERA", heading: HeadingLevel.TITLE }),
        new Paragraph({ text: questionnaire.country, spacing: { after: 160 } }),
        new Paragraph({ text: `Дата: ${new Date().toLocaleDateString("ru-RU")}`, spacing: { after: 260 } }),
        ...groups.flatMap((group) => [
          new Paragraph({ text: group.title, heading: HeadingLevel.HEADING_1, spacing: { before: 260, after: 140 } }),
          ...group.questions.map((question) => new Paragraph({
            children: [
              new TextRun({ text: question.label + ": ", bold: true }),
              new TextRun({ text: displayAnswer(question.id) }),
            ],
            spacing: { after: 150 },
          })),
        ]),
        new Paragraph({ text: "Опросник для предварительной подготовки; не является официальной визовой анкетой.", spacing: { before: 240 } }),
      ];
      const doc = new Document({
        creator: "VIZERA",
        title: `Опросный лист VIZERA — ${questionnaire.country}`,
        sections: [{ properties: {}, children: content }],
      });
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `vizera-questionnaire-${questionnaire.slug}.docx`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30000);
      setFeedback("Редактируемый Word-файл готов. Текст в нём можно выделять и копировать.");
    } catch {
      setFeedback("Не удалось создать файл Word. Можно скопировать ответы или сохранить PDF.");
    } finally {
      setExporting(false);
    }
  }

  function printPdf() {
    setFeedback("Выберите «Сохранить как PDF» в окне печати. Ответы будут обычным выделяемым текстом.");
    window.print();
  }

  return (
    <div className="schengen-questionnaire">
      <div className="schengen-questionnaire__actions">
        <p>Заполните нужные поля. Ответы не отправляются на сайт, в консульство или агентству и не сохраняются после закрытия страницы. Выберите удобный формат:</p>
        <div className="schengen-questionnaire__buttons">
          <button type="button" className="button button-dark" onClick={downloadDocx} disabled={exporting}>
            {exporting ? "Создаём Word…" : "Скачать заполненный Word (.docx) ↓"}
          </button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={printPdf}>Сохранить PDF с текстом ↗</button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={copyAll}>Скопировать все ответы</button>
        </div>
      </div>
      {feedback && <p className="schengen-questionnaire__feedback" role="status">{feedback}</p>}

      {groups.map((group) => (
        <section key={group.title} className="schengen-questionnaire__group">
          <h2>{group.title}</h2>
          {group.description && <p className="schengen-questionnaire__group-help">{group.description}</p>}
          <div className="schengen-questionnaire__fields">
            {group.questions.map((question) => (
              <div key={question.id}
                className={`schengen-questionnaire__field ${question.wide ? "schengen-questionnaire__field--wide" : ""}`}>
                <label htmlFor={question.id}>{question.label}</label>
                {question.hint && <span className="schengen-questionnaire__group-help">{question.hint}</span>}
                {question.type === "select" ? (
                  <select id={question.id} name={question.id} value={answers[question.id] ?? ""}
                    onChange={(event) => update(question.id, event.target.value)}>
                    <option value="">Выберите вариант</option>
                    {question.options?.map((option) => <option value={option} key={option}>{option}</option>)}
                  </select>
                ) : question.type === "textarea" ? (
                  <textarea id={question.id} name={question.id} rows={4} value={answers[question.id] ?? ""}
                    onChange={(event) => update(question.id, event.target.value)} />
                ) : (
                  <input id={question.id} name={question.id}
                    type={question.type ?? "text"} value={answers[question.id] ?? ""}
                    onChange={(event) => update(question.id, event.target.value)} />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="schengen-questionnaire__finish">
        <p>Это внутренний опросник VIZERA для подготовки к консультации и заполнению документов. Он не заменяет официальную анкету для визы в {questionnaire.country}. Некоторые вопросы могут не относиться к вашей ситуации — такие пункты можно пропустить.</p>
        <p>Анкета может содержать персональные, семейные и другие чувствительные сведения. Сохраняйте документы в защищённом месте и передавайте только тем, кому доверяете.</p>
        <div className="schengen-questionnaire__buttons">
          <button type="button" className="button button-dark" onClick={downloadDocx} disabled={exporting}>Скачать Word (.docx) ↓</button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={printPdf}>Сохранить PDF с текстом ↗</button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={copyAll}>Скопировать ответы</button>
        </div>
      </div>

      <div className="schengen-questionnaire__print" aria-hidden="true">
        <h1>VIZERA — Опросный лист: {questionnaire.country}</h1>
        <p>Дата: {new Date().toLocaleDateString("ru-RU")}</p>
        {groups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.questions.map((question) => (
              <p key={question.id}>
                <strong>{question.label}:</strong>{" "}
                <span>{displayAnswer(question.id)}</span>
              </p>
            ))}
          </section>
        ))}
        <p>Опросник VIZERA для предварительной подготовки — не официальная визовая анкета.</p>
      </div>
    </div>
  );
}
