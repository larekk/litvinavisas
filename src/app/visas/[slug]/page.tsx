import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries, regions } from "@/lib/data";
import { CtaBand, Eyebrow, Steps } from "@/components/SectionParts";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...regions, ...countries].map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = regions.find((item) => item.slug === slug) ?? countries.find((item) => item.slug === slug);
  return { title: page?.title ?? "Направление" };
}

export default async function DirectionPage({ params }: Props) {
  const { slug } = await params;
  const region = regions.find((item) => item.slug === slug);
  if (region) return <>
    <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/visas">Визы</Link><span> / </span><span>{region.title}</span></div><Eyebrow>НАПРАВЛЕНИЯ · РЕГИОН</Eyebrow><h1>{region.title}</h1><p>{region.description}</p></div></section>
    <section className="section"><div className="container"><div className="section-heading"><h2>Страны региона</h2><p>Подробные страницы доступны для некоторых направлений. По остальным можно задать нам вопрос.</p></div>
      <div className="country-grid">{region.countries.map((destination) => (
        <Link id={destination.id} className="country-row" key={destination.id} href={destination.slug ? `/visas/${destination.slug}` : "/contacts#contact-form"}>
          <span>{destination.name}</span><span>{destination.slug ? "Подробнее ↗" : "Уточнить оформление ↗"}</span>
        </Link>
      ))}</div>
    </div></section>
    <Steps title="Шаг за шагом: оформление визы" />
    <CtaBand title="Остались вопросы по визе?" />
  </>;

  const country = countries.find((item) => item.slug === slug);
  if (!country) notFound();
  const parent = regions.find((item) => item.slug === country.region);

  if (country.region === "europe") return (
    <>
      <section className="section france-visa-hero" aria-labelledby="france-visa-title">
        <div className="container france-visa-hero__layout">
          <div className="france-visa-hero__copy">
            <div className="breadcrumbs">
              <Link href="/visas">Все направления</Link>
              <span> / </span>
              <Link href="/visas#europe">Европа</Link>
              <span> / </span>
              <span>{country.name}</span>
            </div>
            <Eyebrow>ВИЗОВОЕ НАПРАВЛЕНИЕ</Eyebrow>
            <h1 id="france-visa-title">{country.title}</h1>
            <p>{country.intro}</p>
            <div className="europe-visa-price" aria-label="Стоимость сопровождения">
              <span>СТОИМОСТЬ СОПРОВОЖДЕНИЯ</span>
              <strong>{country.priceRUB == null ? "— руб." : `${country.priceRUB.toLocaleString("ru-RU")} руб.`} / {country.priceBYN == null ? "— бел. руб." : `${country.priceBYN.toLocaleString("ru-RU")} бел. руб.`}</strong>
              <small>Тариф уточняется. Окончательную стоимость согласуем перед началом работы.</small>
            </div>
            <Link className="button button-dark" href="/contacts#contact-form">Оставить заявку ↗</Link>
          </div>
          {country.slug === "france" ? (
            <div
              className="france-visa-hero__image"
              role="img"
              aria-label="Париж, Франция"
              style={{ backgroundImage: `url("${assetBasePath}/images/destinations/europe.jpg")` }}
            />
          ) : (
            <div className="europe-visa-hero__art" aria-hidden="true">
              <span>VIZERA · EUROPE</span>
              <strong>{country.name}</strong>
              <span>✦ VISA CONSULTING ✦</span>
            </div>
          )}
        </div>
      </section>

      <section className="section france-visa-types" aria-labelledby="france-visa-types-title">
        <div className="container">
          <Eyebrow>ВАРИАНТЫ ОФОРМЛЕНИЯ</Eyebrow>
          <h2 id="france-visa-types-title">Для каких поездок</h2>
          <div className="france-visa-types__grid">
            {country.types.map((type, index) => (
              <article key={type.title} className="france-visa-type">
                <span className="france-visa-type__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </article>
            ))}
          </div>
          <p className="france-visa-types__note">Подходящая категория зависит от вашей ситуации. Перечень направлений носит ознакомительный характер.</p>
          {country.slug === "cyprus" && (
            <p className="europe-visa-cyprus-note">Кипр не входит в Шенгенскую зону и выдаёт национальные визы. Требования отличаются от шенгенских. Мы проверим, какой порядок въезда подходит именно вам.</p>
          )}
        </div>
      </section>

      <section className="section france-visa-documents" aria-labelledby="france-documents-title">
        <div className="container france-visa-documents__layout">
          <div className="france-visa-documents__intro">
            <Eyebrow>ПОДГОТОВКА К ПОДАЧЕ</Eyebrow>
            <h2 id="france-documents-title">Документы<br />и опросный лист</h2>
            <p>Ниже — ориентировочный список документов. Раскройте его, чтобы посмотреть, с чего можно начать подготовку.</p>
          </div>
          <div className="france-visa-documents__actions">
            <details className="france-visa-documents__disclosure">
              <summary>
                <span>Список документов</span>
                <span className="france-visa-documents__plus" aria-hidden="true">+</span>
              </summary>
              <div className="france-visa-documents__content">
                <ol>
                  <li>Паспорт(а)</li>
                  <li>Две фотографии</li>
                  <li>Подтверждение занятости (справка с работы, ИП, самозанятость, учёба, пенсионер и прочее)</li>
                  <li>Выписка из банка</li>
                  <li>Социально-экономические связи со страной, при наличии (недвижимость, семья)</li>
                </ol>
                <p className="france-visa-documents__disclaimer">Список документов может частично изменяться или дополняться в зависимости от ваших условий (гражданства и др.), а также от типа визы, которую вы хотели бы получить.</p>
              </div>
            </details>
            <Link className="france-visa-documents__download europe-questionnaire-link" href="/questionnaire/europe/">
              <span>Заполнить опросный лист</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <p className="france-visa-documents__coming-soon">{country.slug === "cyprus" ? "Общий опросник для предварительного разбора ситуации; это не официальная анкета Кипра." : "Общий опросник по данным для шенгенской анкеты. На его странице можно сохранить ответы в PDF."}</p>
          </div>
        </div>
      </section>

      <Steps title="Как проходит работа" />
      <CtaBand title={`Обсудим вашу поездку: ${country.name}`} hideEyebrow />
    </>
  );

  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/visas">Визы</Link><span> / </span><Link href={`/visas#${country.region}`}>{parent?.title}</Link><span> / </span><span>{country.name}</span></div><Eyebrow>ВИЗОВОЕ НАПРАВЛЕНИЕ</Eyebrow><h1>{country.title}</h1><p>{country.intro}</p><Link className="button button-dark" href="/contacts#contact-form">Оставить заявку ↗</Link></div></section>
    <section className="section"><div className="container"><div className="section-heading"><h2>Варианты оформления</h2><p>Перечень ориентировочный. Подходящая категория зависит от гражданства, цели поездки и актуальных требований.</p></div><div className="info-grid">{country.types.map((item, index) => <article className="info-card" key={item.title}><span className="card-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section soft-section"><div className="container two-col"><div><Eyebrow>КАК МЫ МОЖЕМ ПОМОЧЬ</Eyebrow><h2>Сопровождение<br />под вашу задачу.</h2></div><div className="body-copy"><p><strong>Полное сопровождение.</strong> Разбираем ситуацию, помогаем подготовить анкеты и комплект документов и объясняем порядок действий.</p><p><strong>Отдельные услуги.</strong> Можно обратиться за консультацией, заполнением или проверкой анкеты, подготовкой к подаче.</p><p className="fineprint">Визовые требования меняются. Перед подачей проверяйте действующие условия в официальных источниках.</p></div></div></section>
    <Steps title="Как проходит работа" />
    <CtaBand title={`Обсудим вашу поездку: ${country.name}`} />
  </>;
}
