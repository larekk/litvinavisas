/** Источник контента: публичные страницы проекта Tilda, ноябрь 2026. */
export type Destination = {
  name: string;
  slug?: string;
  id: string;
};
export type Region = {
  slug: string;
  title: string;
  description: string;
  tildaPageId: string;
  countries: Destination[];
};
export type CountryPage = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  tildaPageId: string;
  region: string;
  types: { title: string; description: string }[];
};

export const regions: Region[] = [
  {
    slug: "europe", title: "Европа", tildaPageId: "83334676",
    description: "Мы поможем разобраться с визовыми требованиями и подачей документов для поездок по Европе.",
    countries: ["Италия", "Испания", "Германия", "Греция", "Польша", "Франция", "Болгария", "Венгрия", "Кипр"]
      .map((name, i) => ({ name, id: `europe-${i}` })),
  },
  {
    slug: "uk-ireland", title: "Великобритания и Ирландия", tildaPageId: "83368476",
    description: "Подскажем, какое оформление требуется для вашей поездки в Великобританию или Ирландию.",
    countries: [{ name: "Великобритания", slug: "uk", id: "uk" }, { name: "Ирландия", id: "ireland" }],
  },
  {
    slug: "americas", title: "Северная и Южная Америка", tildaPageId: "83370876",
    description: "Поможем подобрать порядок оформления виз и разрешений для поездок в страны Америки.",
    countries: [
      { name: "США", slug: "usa", id: "usa" }, { name: "Канада", slug: "canada", id: "canada" },
      ...["Багамы", "Доминиканская Республика", "Коста-Рика", "Мексика", "Колумбия", "Чили"]
        .map((name, i) => ({ name, id: `americas-${i}` })),
    ],
  },
  {
    slug: "asia", title: "Азия", tildaPageId: "83376636",
    description: "Визы, электронные разрешения и документы для поездок по Азии.",
    countries: [
      { name: "Япония", slug: "japan", id: "japan" },
      ...["Китай", "Таиланд", "Тайвань", "Сингапур", "Южная Корея", "Индия", "Филиппины"]
        .map((name, i) => ({ name, id: ["china", "thailand", "taiwan", "singapore", "korea", "india", "philippines"][i] })),
    ],
  },
  {
    slug: "africa", title: "Африка", tildaPageId: "83378366",
    description: "Оформление виз в африканские страны — по индивидуальному запросу.",
    countries: ["Кения", "ЮАР", "Марокко", "Ангола", "Алжир", "Гана"]
      .map((name, i) => ({ name, id: `africa-${i}` })),
  },
  {
    slug: "oceania", title: "Австралия и Океания", tildaPageId: "83375416",
    description: "Разберём возможные варианты въезда и подготовку к поездке.",
    countries: [
      { name: "Австралия", slug: "australia", id: "australia" },
      { name: "Новая Зеландия", slug: "new-zealand", id: "new-zealand" },
    ],
  },
];

export const countries: CountryPage[] = [
  {
    slug: "usa", name: "США", title: "Виза в США", region: "americas", tildaPageId: "98036086",
    intro: "Поможем подготовить документы, заполнить анкету и организовать подачу с учётом вашей ситуации.",
    types: [
      { title: "B1/B2", description: "Краткосрочные туристические, гостевые и деловые поездки." },
      { title: "Рабочие визы", description: "Категории H-1B, L-1, O-1 и другие при наличии основания." },
      { title: "Учебные визы", description: "Категории F-1 и M-1 для обучения." },
      { title: "C1/D и ESTA", description: "Транзит, экипажи и отдельные случаи безвизового въезда." },
    ],
  },
  {
    slug: "canada", name: "Канада", title: "Виза в Канаду", region: "americas", tildaPageId: "98263906",
    intro: "Разберём цель поездки и подскажем подходящий способ оформления.",
    types: [
      { title: "Temporary Resident Visa", description: "Для туристических, гостевых и деловых поездок." },
      { title: "eTA", description: "Электронное разрешение для заявителей, отвечающих условиям программы." },
    ],
  },
  {
    slug: "uk", name: "Великобритания", title: "Виза в Великобританию", region: "uk-ireland", tildaPageId: "98297876",
    intro: "Сориентируем по категориям, срокам и необходимым документам для поездки.",
    types: [
      { title: "Standard Visitor", description: "Туризм, посещение близких, деловые встречи и некоторые краткосрочные программы." },
      { title: "ETA", description: "Электронное разрешение для тех, кому оно доступно по гражданству." },
    ],
  },
  {
    slug: "australia", name: "Австралия", title: "Виза в Австралию", region: "oceania", tildaPageId: "98297696",
    intro: "Поможем разобраться с доступными вариантами временного въезда в Австралию.",
    types: [
      { title: "Visitor visa (subclass 600)", description: "Туризм, визиты к близким и краткосрочные деловые поездки." },
      { title: "eVisitor / ETA", description: "Электронные разрешения, доступность которых зависит от гражданства." },
    ],
  },
  {
    slug: "new-zealand", name: "Новая Зеландия", title: "Виза в Новую Зеландию", region: "oceania", tildaPageId: "98325576",
    intro: "Подготовим план оформления с учётом цели вашей поездки.",
    types: [
      { title: "Visitor Visa", description: "Временные туристические, гостевые и деловые поездки." },
      { title: "NZeTA", description: "Электронное разрешение для соответствующих заявителей." },
    ],
  },
  {
    slug: "japan", name: "Япония", title: "Виза в Японию", region: "asia", tildaPageId: "98298006",
    intro: "Поможем с анкетой, списком документов, подачей и получением паспорта, когда это возможно.",
    types: [
      { title: "Туристическая виза", description: "Подготовка документов под вашу цель поездки и место подачи." },
      { title: "Проверка документов", description: "Отдельная консультация и проверка комплекта перед подачей." },
    ],
  },
];

export const steps = [
  { num: "01", title: "Разбираемся", description: "Изучаем вашу ситуацию и выбираем подходящий вариант подачи." },
  { num: "02", title: "Собираем", description: "Согласовываем список документов и помогаю всё подготовить." },
  { num: "03", title: "Проверяем", description: "Сверяем анкеты, подтверждения и важные детали перед подачей." },
  { num: "04", title: "Сопровождаем", description: "Остаёмся на связи на согласованных этапах процесса." },
];

export const ruleItems = [
  { title: "Рабочее время", description: "Мы на связи с понедельника по пятницу, с 10:00 до 18:00. В остальное время отвечаю по возможности." },
  { title: "Звонки", description: "Просим согласовывать время звонка заранее, чтобы уделить вашему вопросу достаточно внимания." },
  { title: "Срочные заявки", description: "Работа в сжатые сроки возможна по согласованию и может оплачиваться отдельно." },
  { title: "Работа вне графика", description: "Дополнительная работа в нерабочее время обсуждается индивидуально." },
  { title: "Переносы и пропуски", description: "Заранее предупреждайте об изменениях времени встреч, консультаций или подач." },
  { title: "Уважение", description: "Мы ценим спокойное, бережное и уважительное общение." },
];

export const tildaBase = "https://project15670296.tilda.ws";
export const originalUrl = (pageId: string) => `${tildaBase}/page${pageId}.html`;

export const pageMap = [
  { title: "Главная", path: "/", id: "82666576" },
  { title: "Визы", path: "/visas", id: "83090656" },
  ...regions.map((region) => ({ title: region.title, path: `/visas/${region.slug}`, id: region.tildaPageId })),
  ...countries.map((country) => ({ title: country.title, path: `/visas/${country.slug}`, id: country.tildaPageId })),
  { title: "Консультация", path: "/consultation", id: "83102666" },
  { title: "Контакты", path: "/contacts", id: "82933076" },
  { title: "Политика конфиденциальности", path: "/legal/privacy", id: "83329416" },
  { title: "Публичная оферта", path: "/legal/offer", id: "83314476" },
];
