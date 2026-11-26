"use client";
import { useState } from "react";

type Question = {
  label: string;
  type?: "text" | "date" | "email" | "tel" | "select" | "textarea";
  options?: string[];
  wide?: boolean;
  help?: string;
};
type QuestionGroup = { title: string; description?: string; questions: Question[] };

const groups: QuestionGroup[] = [
  {
    title: "01 / Личные данные",
    description: "Фамилию и имя указывайте латиницей, как в загранпаспорте.",
    questions: [
      { label: "Фамилия (латиницей)" }, { label: "Фамилия при рождении / предыдущие фамилии" },
      { label: "Имя / имена (латиницей)" }, { label: "Дата рождения", type: "date" },
      { label: "Место рождения" }, { label: "Страна рождения" },
      { label: "Текущее гражданство" }, { label: "Гражданство при рождении (если другое)" },
      { label: "Пол", type: "select", options: ["Женский", "Мужской", "Иное / уточнить"] },
      { label: "Семейное положение", type: "select", options: ["Не женат / не замужем", "В браке", "В разводе", "Вдовец / вдова", "Другое"] },
      { label: "Национальный идентификационный номер (если есть)" },
      { label: "Для несовершеннолетних: ФИО и контакты родителя или опекуна", type: "textarea", wide: true },
    ],
  },
  {
    title: "02 / Заграничный паспорт",
    questions: [
      { label: "Тип проездного документа", type: "select", options: ["Обычный загранпаспорт", "Дипломатический", "Служебный", "Другой"] },
      { label: "Серия и номер паспорта" },
      { label: "Дата выдачи", type: "date" },
      { label: "Действителен до", type: "date" },
      { label: "Кем и какой страной выдан паспорт" },
      { label: "Есть ли второй действующий паспорт?", type: "select", options: ["Нет", "Да"] },
    ],
  },
  {
    title: "03 / Адрес, контакты и проживание",
    questions: [
      { label: "Адрес проживания (страна, город, улица, дом, индекс)", wide: true },
      { label: "Электронная почта", type: "email" },
      { label: "Номер телефона", type: "tel" },
      { label: "Страна проживания, если отличается от гражданства" },
      { label: "Основание проживания: ВНЖ, виза, иной статус / номер и срок действия", type: "textarea", wide: true },
    ],
  },
  {
    title: "04 / Занятость и работа",
    questions: [
      { label: "Текущий род занятий", type: "select", options: ["Наёмный сотрудник", "ИП / бизнес", "Самозанятость", "Учёба", "Пенсионер", "Не работаю", "Другое"] },
      { label: "Должность / вид деятельности" },
      { label: "Название работодателя или учебного заведения" },
      { label: "Адрес и телефон работодателя / учебного заведения", type: "textarea", wide: true },
    ],
  },
  {
    title: "05 / Поездка",
    questions: [
      { label: "Для какой страны нужен визовый опросник?", type: "select", options: ["Франция", "Италия", "Испания", "Германия", "Греция", "Польша", "Болгария", "Венгрия", "Кипр (национальная виза)", "Другая"] },
      { label: "Основная цель поездки", type: "select", options: ["Туризм", "Посещение родственников / друзей", "Бизнес", "Краткосрочная учёба", "Культура / спорт", "Медицинская цель", "Транзит", "Другая"] },
      { label: "Дополнительные сведения о цели поездки", type: "textarea", wide: true },
      { label: "Основная страна пребывания" },
      { label: "Страна первого въезда" },
      { label: "Планируемая дата въезда", type: "date" },
      { label: "Планируемая дата выезда", type: "date" },
      { label: "Сколько дней планируете находиться?" },
      { label: "Количество въездов", type: "select", options: ["Однократный", "Двукратный", "Многократный", "Нужна консультация"] },
      { label: "Страны и даты предыдущих шенгенских виз за последние годы", type: "textarea", wide: true },
      { label: "Сдавали ли отпечатки пальцев на шенгенскую визу? Когда?", type: "textarea", wide: true },
      { label: "Требуется ли разрешение на въезд в страну конечного следования (для транзита)?", type: "textarea", wide: true },
    ],
  },
  {
    title: "06 / Проживание и принимающая сторона",
    questions: [
      { label: "Название и адрес отеля / места проживания", type: "textarea", wide: true },
      { label: "Контактный телефон и почта отеля" },
      { label: "ФИО, адрес и контакты приглашающего лица (если есть)", type: "textarea", wide: true },
      { label: "Название, адрес и контакты приглашающей компании (если есть)", type: "textarea", wide: true },
    ],
  },
  {
    title: "07 / Финансы и особые обстоятельства",
    questions: [
      { label: "Кто оплачивает поездку?", type: "select", options: ["Сам заявитель", "Спонсор / родственник", "Компания / организация", "Иное"] },
      { label: "Какие средства планируете использовать?", type: "select", options: ["Банковская карта", "Наличные", "Предоплата проживания / транспорта", "Несколько вариантов", "Иное"] },
      { label: "Если есть спонсор: ФИО, отношение к вам, контакты", type: "textarea", wide: true },
      { label: "Есть ли близкий родственник — гражданин ЕС, ЕЭЗ или Швейцарии? Данные и степень родства (если применимо)", type: "textarea", wide: true },
      { label: "Были ли отказы в визах? Уточните страну, дату и причину, если известна", type: "textarea", wide: true },
      { label: "Другие обстоятельства, которые важно учесть", type: "textarea", wide: true },
    ],
  },
];


const questionGroups = groups.map((group, groupIndex) => ({
  ...group,
  questions: group.questions.map((question, questionIndex) => ({
    ...question,
    id: `visa-question-${groupIndex + 1}-${questionIndex + 1}`,
  })),
}));

export default function EuropeQuestionnaire() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState("");
  const [exporting, setExporting] = useState(false);
  const updateAnswer = (id: string, value: string) => {
    setAnswers((previous) => ({ ...previous, [id]: value }));
    if (feedback) setFeedback("");
  };

  function plainText() {
    return [
      "VIZERA — ОПРОСНЫЙ ЛИСТ ДЛЯ ЕВРОПЕЙСКОЙ ВИЗЫ",
      "Дата: " + new Date().toLocaleDateString("ru-RU"),
      "",
      ...questionGroups.flatMap((group) => [
        group.title,
        ...group.questions.map((question) => `${question.label}: ${answers[question.id]?.trim() || "—"}`),
        "",
      ]),
      "Предварительный опросник, не официальная визовая анкета.",
    ].join("\n");
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(plainText());
      setFeedback("Ответы скопированы. Их можно вставить в Word, письмо или другой документ.");
    } catch {
      setFeedback("Не удалось скопировать автоматически. Используйте экспорт в Word или PDF.");
    }
  }

  async function downloadDocx() {
    if (exporting) return;
    setExporting(true);
    setFeedback("");
    try {
      // Word is generated locally in the browser, without sending the answers.
      const { Document, HeadingLevel, Packer, Paragraph, TextRun } = await import("docx");
      const content = [
        new Paragraph({ text: "ОПРОСНЫЙ ЛИСТ VIZERA", heading: HeadingLevel.TITLE }),
        new Paragraph({ text: "Европейские визы — предварительные данные", spacing: { after: 160 } }),
        new Paragraph({ text: `Дата: ${new Date().toLocaleDateString("ru-RU")}`, spacing: { after: 260 } }),
        ...questionGroups.flatMap((group) => [
          new Paragraph({ text: group.title, heading: HeadingLevel.HEADING_1, spacing: { before: 260, after: 140 } }),
          ...group.questions.map((question) => new Paragraph({
            children: [
              new TextRun({ text: question.label + ": ", bold: true }),
              new TextRun({ text: answers[question.id]?.trim() || "—" }),
            ],
            spacing: { after: 150 },
          })),
        ]),
        new Paragraph({ text: "Это предварительный опросник, а не официальная визовая анкета.", spacing: { before: 240 } }),
      ];
      const wordDoc = new Document({
        creator: "VIZERA",
        title: "Опросный лист — европейские визы",
        sections: [{ properties: {}, children: content }],
      });
      const blob = await Packer.toBlob(wordDoc);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "vizera-europe-questionnaire.docx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 30000);
      setFeedback("Файл Word сформирован. Текст в нём можно выделять, копировать и редактировать.");
    } catch {
      setFeedback("Не удалось создать файл Word. Можно скопировать ответы или сохранить PDF.");
    } finally {
      setExporting(false);
    }
  }

  function printPdf() {
    setFeedback("В окне печати выберите «Сохранить как PDF». Ответы будут обычным выделяемым текстом.");
    window.print();
  }

  return (
    <div className="schengen-questionnaire">
      <div className="schengen-questionnaire__actions">
        <p>Заполняйте поля прямо на странице. Ответы не отправляются на сервер и не сохраняются после закрытия страницы. Выберите удобный формат экспорта:</p>
        <div className="schengen-questionnaire__buttons">
          <button type="button" className="button button-dark" onClick={downloadDocx} disabled={exporting}>
            {exporting ? "Создаём Word…" : "Скачать заполненный Word (.docx) ↓"}
          </button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={printPdf}>Сохранить PDF с текстом ↗</button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={copyAll}>Скопировать все ответы</button>
        </div>
      </div>
      {feedback && <p className="schengen-questionnaire__feedback" role="status">{feedback}</p>}

      {questionGroups.map((group) => (
        <section key={group.title} className="schengen-questionnaire__group">
          <h2>{group.title}</h2>
          {group.description && <p className="schengen-questionnaire__group-help">{group.description}</p>}
          <div className="schengen-questionnaire__fields">
            {group.questions.map((question) => (
              <div key={question.id} className={`schengen-questionnaire__field ${question.wide ? "schengen-questionnaire__field--wide" : ""}`}>
                <label htmlFor={question.id}>{question.label}</label>
                {question.type === "select" ? (
                  <select id={question.id} name={question.id}
                    value={answers[question.id] ?? ""}
                    onChange={(event) => updateAnswer(question.id, event.target.value)}>
                    <option value="">Выберите вариант</option>
                    {question.options?.map((value) => <option key={value} value={value}>{value}</option>)}
                  </select>
                ) : question.type === "textarea" ? (
                  <textarea id={question.id} name={question.id} rows={3}
                    value={answers[question.id] ?? ""}
                    onChange={(event) => updateAnswer(question.id, event.target.value)}
                  />
                ) : (
                  <input id={question.id} name={question.id} type={question.type ?? "text"}
                    value={answers[question.id] ?? ""}
                    onChange={(event) => updateAnswer(question.id, event.target.value)}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
      <div className="schengen-questionnaire__finish">
        <p>Это внутренний опросник VIZERA для подготовки к консультации и заполнению документов. Он не заменяет официальную визовую анкету. Требования различаются по стране, гражданству и месту подачи.</p>
        <p>Кипр оформляет национальные визы, а не шенгенские. Для него список вопросов служит только первоначальным сбором информации.</p>
        <div className="schengen-questionnaire__buttons">
          <button type="button" className="button button-dark" onClick={downloadDocx} disabled={exporting}>Скачать Word (.docx) ↓</button>
          <button type="button" className="schengen-questionnaire__button-secondary" onClick={printPdf}>Сохранить PDF с текстом ↗</button>
        </div>
      </div>

      <div className="schengen-questionnaire__print" aria-hidden="true">
        <h1>VIZERA — Опросный лист для европейской визы</h1>
        <p>Дата: {new Date().toLocaleDateString("ru-RU")}</p>
        {questionGroups.map((group) => (
          <section key={group.title}>
            <h2>{group.title}</h2>
            {group.questions.map((question) => (
              <p key={question.id}>
                <strong>{question.label}:</strong>{" "}
                <span>{answers[question.id]?.trim() || "—"}</span>
              </p>
            ))}
          </section>
        ))}
        <p>Предварительный опросник VIZERA — не официальная визовая анкета.</p>
      </div>
    </div>
  );
}
