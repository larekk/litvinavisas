/**
 * Тарифы перенесены из предоставленных заказчиком скриншотов прежнего сайта.
 * Источник содержит только рублёвые цены. BYN нельзя вычислять как фиксированный тариф из курса валют.
 * Для Германии и Польши показан общий тариф "Остальные страны Европы" — от 15 000 ₽, по запросу.
 */
export type VisaServicePrice = {
  label: string;
  rub: number;
  byn?: number;
  from?: boolean;
  note?: string;
};

export const visaPrices: Record<string, VisaServicePrice[]> = {
  france: [
    { label: "Стандарт", rub: 25000 },
    { label: "Ускоренная", rub: 35000 },
  ],
  italy: [
    { label: "Москва и МО", rub: 15000 },
    { label: "Санкт-Петербург и ЛО", rub: 20000 },
    { label: "Регионы", rub: 20000 },
  ],
  spain: [
    { label: "Оформление", rub: 20000 },
  ],
  greece: [
    { label: "Под свои бронирования", rub: 13000 },
    { label: "С нашими бронированиями", rub: 25000 },
  ],
  germany: [
    { label: "Подготовка по запросу", rub: 15000, from: true, note: "По общему тарифу «Остальные страны Европы». Индивидуальную стоимость уточняйте." },
  ],
  poland: [
    { label: "Подготовка по запросу", rub: 15000, from: true, note: "По общему тарифу «Остальные страны Европы». Индивидуальную стоимость уточняйте." },
  ],
  hungary: [
    { label: "Под свои бронирования", rub: 13000 },
  ],
  bulgaria: [
    { label: "Оформление", rub: 20000 },
  ],
  cyprus: [
    { label: "Со своим билетом", rub: 20000 },
    { label: "С нашим билетом", rub: 30000 },
  ],
  usa: [
    { label: "Взрослый", rub: 45000 },
    { label: "Ребёнок до 14 лет", rub: 40000 },
    { label: "Повторное обращение", rub: 40000 },
    { label: "Ребёнок до 14 лет (повторно)", rub: 45000 },
  ],
  uk: [
    { label: "6 месяцев", rub: 45000 },
    { label: "2 года", rub: 90000 },
    { label: "5 лет", rub: 140000 },
    { label: "10 лет", rub: 165000 },
  ],
  canada: [
    { label: "Сопровождение", rub: 45000 },
  ],
  australia: [
    { label: "Австралия", rub: 40000 },
    { label: "Австралия + Новая Зеландия", rub: 75000 },
  ],
  "new-zealand": [
    { label: "Новая Зеландия", rub: 50000 },
    { label: "Австралия + Новая Зеландия", rub: 75000 },
  ],
  japan: [
    { label: "Личная подача: запись, документы, сопровождение", rub: 13000 },
    { label: "Под ключ: подача, подготовка, получение, сбор", rub: 20000 },
  ],
  korea: [
    { label: "Подготовка и сбор", rub: 5000 },
  ],
  india: [
    { label: "Тариф 1", rub: 10000 },
    { label: "Тариф 2", rub: 15000 },
    { label: "Тариф 3", rub: 20000 },
  ],
  singapore: [
    { label: "Подготовка и сбор", rub: 20000 },
  ],
  thailand: [
    { label: "DTV: подготовка, сбор, нотариальный перевод", rub: 170000 },
    { label: "Туризм: подготовка, сбор и оплата", rub: 20000 },
    { label: "Под ключ: подготовка, сбор, оплата", rub: 47000 },
  ],
  philippines: [
    { label: "Подготовка", rub: 10000 },
  ],
};

export const formatRub = (amount: number) => amount.toLocaleString("ru-RU") + " руб.";
export function lowestRub(slugOrId: string): number | undefined {
  const values = visaPrices[slugOrId];
  return values?.length ? Math.min(...values.map((entry) => entry.rub)) : undefined;
}
