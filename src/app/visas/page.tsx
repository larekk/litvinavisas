import Link from "next/link";
import type { Metadata } from "next";
import { regions } from "@/lib/data";
import { CtaBand } from "@/components/SectionParts";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = { title: "Все направления" };

export default function VisasPage() {
  return (
    <>
      <section className="visas-index-hero" aria-labelledby="visas-index-title">
        <div className="container visas-index-hero__grid">
          <div className="visas-index-hero__copy">
            <h1 id="visas-index-title">Все направления</h1>
            <p>Европа, Америка, Азия и не только. Выберите нужную страну в списке ниже. А если её там нет — напишите нам. Вероятно, мы сможем помочь и с ней.</p>
          </div>
          <figure className="visas-index-hero__figure">
            <img
              src={assetBasePath + "/images/visas-sheep.jpg"}
              width={1365}
              height={2048}
              alt="Овечка посреди туманного горного пейзажа"
            />
            <figcaption className="visas-index-hero__thought">Where the fuck i am</figcaption>
          </figure>
        </div>
      </section>

      <div className="visas-index-regions">
        {regions.map((region, i) => (
          <section className="section visas-index-region" id={region.slug} key={region.slug} aria-labelledby={`region-heading-${region.slug}`}>
            <div className="container">
              <div className="visas-index-region__heading">
                <span className="visas-index-region__number">{String(i + 1).padStart(2, "0")} /</span>
                <h2 id={`region-heading-${region.slug}`}>{region.title}</h2>
              </div>
              <div className="country-grid visas-index-region__countries">
                {region.countries.map((destination) => {
                  const hasPage = Boolean(destination.slug);
                  return (
                    <Link
                      id={destination.id}
                      className="country-row visas-index-country"
                      key={destination.id}
                      href={hasPage ? `/visas/${destination.slug}` : "/contacts#contact-form"}
                      aria-label={`${destination.name} — ${hasPage ? "открыть страницу направления" : "оставить заявку"}`}
                    >
                      <span>{destination.name}</span>
                      <span>{hasPage ? "Подробнее ↗" : "Оставить заявку ↗"}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand title="Нет вашей страны в списке?" description="Мы работаем не только с перечисленными направлениями. Расскажите о своей поездке." />
    </>
  );
}
