import Link from "next/link";
import { CtaBand, Eyebrow, Steps } from "@/components/SectionParts";

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const featured = [
  { name: "Европа", href: "/visas/europe", mark: "01", accent: "peach", photo: "europe.jpg" },
  { name: "США", href: "/visas/usa", mark: "02", accent: "sand", photo: "usa.jpg" },
  { name: "Великобритания", href: "/visas/uk", mark: "03", accent: "sage", photo: "uk.jpg" },
  { name: "Канада", href: "/visas/canada", mark: "04", accent: "peach", photo: "canada.jpg" },
  { name: "Австралия", href: "/visas/australia", mark: "05", accent: "sage", photo: "australia.jpg" },
  { name: "Новая Зеландия", href: "/visas/new-zealand", mark: "06", accent: "sand", photo: "new-zealand.jpg" },
  { name: "Япония", href: "/visas/japan", mark: "07", accent: "peach", photo: "japan.jpg" },
  { name: "Индия", href: "/visas/asia#india", mark: "08", accent: "sage", photo: "india.jpg" },
];

export default function HomePage() {
  return <>
    <section className="home-hero" aria-labelledby="home-title">
      <div className="home-hero__photo" aria-hidden="true" style={{ "--hero-image": `url("${assetBasePath}/images/hero-etretat.jpg")` } as React.CSSProperties} />
      <div className="home-hero__content">
        <h1 id="home-title">VIZERA Travel Agency</h1>
        <p>✦ Путешествуй с VIZERA ✦</p>
      </div>
      <a className="home-hero__down" href="#services" aria-label="Прокрутить к услугам">
        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" aria-hidden="true"><path d="m3 2 17 17L37 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </a>
    </section>

    <section className="section service-section" id="services">
      <div className="container">
        <Eyebrow>ЧЕМ МЫ МОЖЕМ ПОМОЧЬ</Eyebrow>
        <h2 className="wide-title">Оформление виз<br />с учётом гражданства<br /><span>и страны проживания.</span></h2>
        <p className="service-copy">Помогаем с туристическими, гостевыми, учебными, деловыми и другими визами. Подбираем порядок оформления под ваше гражданство, страну проживания и конкретную цель поездки. Сложные вопросы лично курирует Екатерина.</p>
      </div>
    </section>

    <section className="section destinations-section">
      <div className="container">
        <div className="section-heading section-heading-with-link"><div><Eyebrow>ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</Eyebrow><h2>Куда отправимся?</h2></div><Link className="text-link" href="/visas">Все направления ↗</Link></div>
        <div className="feature-grid">{featured.map((item, index) => <Link key={item.name} href={item.href} className={`feature-card feature-${item.accent}`}>
          <span className="feature-card__photo" aria-hidden="true" style={{ backgroundImage: `url("${assetBasePath}/images/destinations/${item.photo}")` }} />
          <div className="feature-top"><span>{String(index + 1).padStart(2, "0")}</span><span className="feature-arrow">↗</span></div><span className="feature-mark" aria-hidden="true">{item.mark}</span><h3>{item.name}</h3>
        </Link>)}</div>
      </div>
    </section>

    <Steps title="Этапы нашей работы" />
    <section className="section rules-preview"><div className="container rules-preview-inner"><div><Eyebrow>ВАЖНО ЗНАТЬ</Eyebrow><h2>Правила работы</h2></div><div><p>Мы не обещаем ответов 24/7 и не гонимся за скоростью в ущерб качеству. Согласовываем сроки и остаёмся на связи на каждом важном этапе.</p><Link href="/work-rules" className="text-link">Подробнее о правилах ↗</Link></div></div></section>
    <CtaBand title="Кажется, с визой всё сложно?" description="Возможно, не настолько. Расскажите о поездке — мы разберёмся в вашей ситуации и подскажем, с чего начать." />
  </>;
}
