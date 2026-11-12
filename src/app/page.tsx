import Link from "next/link";
import { CtaBand, Eyebrow, Steps } from "@/components/SectionParts";
import ParallaxPhoto from "@/components/ParallaxPhoto";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const featured = [
  { name: "Европа", href: "/visas/europe", mark: "01", accent: "peach" },
  { name: "США", href: "/visas/usa", mark: "02", accent: "sand" },
  { name: "Великобритания", href: "/visas/uk", mark: "03", accent: "sage" },
  { name: "Канада", href: "/visas/canada", mark: "04", accent: "peach" },
  { name: "Австралия", href: "/visas/australia", mark: "05", accent: "sage" },
  { name: "Новая Зеландия", href: "/visas/new-zealand", mark: "06", accent: "sand" },
  { name: "Япония", href: "/visas/japan", mark: "07", accent: "peach" },
  { name: "Индия", href: "/visas/asia#india", mark: "08", accent: "sage" },
];

export default function HomePage() {
  return <>
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__photo" aria-hidden="true" style={{ "--hero-image": `url("${assetBasePath}/images/etretat-hero.webp")` } as React.CSSProperties} />
      <div className="home-hero__content">
        <h1 id="home-title">VIZERA Travel Agency</h1>
        <p>✦ Путешествуй с VIZERA ✦</p>
      </div>
      <a className="home-hero__down" href="#services" aria-label="Прокрутить к услугам">
        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" aria-hidden="true"><path d="m3 2 17 17L37 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </a>
    </section>

    <ParallaxPhoto
      imageUrl="https://images.unsplash.com/photo-1671800556283-bdd5c461c793?auto=format&fit=crop&w=2400&q=85"
      label="Зелёные альпийские луга и горы"
    />

    <section className="section service-section" id="services">
      <div className="container">
        <Eyebrow>ЧЕМ МЫ МОЖЕМ ПОМОЧЬ</Eyebrow>
        <h2 className="wide-title">Разные гражданства,<br />страны проживания<br /><span>и визовые направления.</span></h2>
        <p className="service-copy">Мы помогаем оформлять туристические, гостевые, учебные, деловые и другие визы. Учитываем ваш паспорт, страну проживания и особенности подачи документов. Екатерина лично курирует сложные вопросы.</p>
      </div>
    </section>

    <section className="section destinations-section">
      <div className="container">
        <div className="section-heading section-heading-with-link"><div><Eyebrow>ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</Eyebrow><h2>Куда отправимся?</h2></div><Link className="text-link" href="/visas">Все направления ↗</Link></div>
        <div className="feature-grid">{featured.map((item, index) => <Link key={item.name} href={item.href} className={`feature-card feature-${item.accent}`}>
          <div className="feature-top"><span>{String(index + 1).padStart(2, "0")}</span><span className="feature-arrow">↗</span></div><span className="feature-mark" aria-hidden="true">{item.mark}</span><h3>{item.name}</h3>
        </Link>)}</div>
      </div>
    </section>

    <Steps title="Этапы нашей работы" />
    <section className="section rules-preview"><div className="container rules-preview-inner"><div><Eyebrow>ВАЖНО ЗНАТЬ</Eyebrow><h2>Правила работы</h2></div><div><p>Мы не обещаем ответов 24/7 и не гонимся за скоростью в ущерб качеству. Согласовываем сроки и остаёмся на связи на каждом важном этапе.</p><Link href="/work-rules" className="text-link">Подробнее о правилах ↗</Link></div></div></section>
    <CtaBand title="Кажется, с визой всё сложно?" description="Возможно, не настолько. Расскажите о поездке — мы разберёмся в вашей ситуации и подскажем, с чего начать." />
  </>;
}
