"use client";

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

export default function EuropeQuestionnaire() {
  let index = 0;
  return (
    <div className="schengen-questionnaire">
      <div className="schengen-questionnaire__actions">
        <p>Опросник заполняется прямо на странице. Информация не отправляется на сайт или в консульство. Чтобы сохранить ответы, используйте печать в PDF.</p>
        <button type="button" className="button button-dark" onClick={() => window.print()}>Сохранить в PDF / распечатать ↗</button>
      </div>
      {groups.map((group) => (
        <section key={group.title} className="schengen-questionnaire__group">
          <h2>{group.title}</h2>
          {group.description && <p className="schengen-questionnaire__group-help">{group.description}</p>}
          <div className="schengen-questionnaire__fields">
            {group.questions.map((question) => {
              const id = `visa-question-${++index}`;
              return (
                <div key={id} className={`schengen-questionnaire__field ${question.wide ? "schengen-questionnaire__field--wide" : ""}`}>
                  <label htmlFor={id}>{question.label}</label>
                  {question.type === "select" ? (
                    <select id={id} name={id} defaultValue="">
                      <option value="">Выберите вариант</option>
                      {question.options?.map((value) => <option key={value} value={value}>{value}</option>)}
                    </select>
                  ) : question.type === "textarea" ? (
                    <textarea id={id} name={id} rows={3} />
                  ) : (
                    <input id={id} name={id} type={question.type ?? "text"} />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
      <div className="schengen-questionnaire__finish">
        <p>Это внутренний опросник VIZERA для подготовки к консультации и заполнению документов. Он не заменяет официальную визовую анкету. Требования различаются по стране, гражданству и месту подачи.</p>
        <p>Кипр оформляет национальные визы, а не шенгенские. Для него список вопросов служит только первоначальным сбором информации.</p>
        <button type="button" className="button button-dark" onClick={() => window.print()}>Сохранить ответы в PDF ↗</button>
      </div>
    </div>
  );
}
