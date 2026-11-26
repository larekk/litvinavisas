import { visaPrices, formatRub } from "@/lib/visaPrices";

export default function VisaPriceList({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const prices = visaPrices[slug];
  if (!prices?.length) return null;
  const bynKnown = prices.every((entry) => entry.byn != null);

  return (
    <div className={`visa-price-list ${compact ? "europe-visa-price" : ""}`} aria-label="Стоимость визового сопровождения">
      <span className="visa-price-list__eyebrow">СТОИМОСТЬ СОПРОВОЖДЕНИЯ</span>
      <dl className="visa-price-list__rows">
        {prices.map((entry) => (
          <div className="visa-price-list__row" key={entry.label}>
            <dt>{entry.label}</dt>
            <dd>
              <strong>{entry.from ? "от " : ""}{formatRub(entry.rub)}</strong>
              <span> / {entry.byn == null ? "— бел. руб." : entry.byn.toLocaleString("ru-RU") + " бел. руб."}</span>
              {entry.note && <small>{entry.note}</small>}
            </dd>
          </div>
        ))}
      </dl>
      {!bynKnown && <p className="visa-price-list__disclaimer">Суммы в белорусских рублях не указаны в предоставленном прайсе — уточните их при обращении.</p>}
      <p className="visa-price-list__disclaimer">Условия и окончательную стоимость согласуем перед началом работы.</p>
    </div>
  );
}
