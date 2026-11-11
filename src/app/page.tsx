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
        <h1 id="home-title">LITVINAVISAS Travel Agency</h1>
        <p>✦ Путешествуй с LITVINAVISAS ✦</p>
      </div>
      <a className="home-hero__down" href="#about" aria-label="Прокрутить к информации обо мне">
        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" aria-hidden="true"><path d="m3 2 17 17L37 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </a>
    </section>

    <section className="home-about" id="about" aria-labelledby="about-title">
      <div className="home-about__content">
        <p className="home-about__eyebrow">НЕМНОГО ОБО МНЕ</p>
        <h2 id="about-title">Как появилась LITVINAVISAS</h2>
        <div className="home-about__body">
          <p>Больше семи лет я занимаюсь визами. Начинала работать в найме, изучала требования разных стран, помогала готовить документы — от обычных туристических поездок до сложных, нестандартных случаев.</p>
          <p>Со временем у меня появились постоянные клиенты, опыт и понимание того, какой я хочу видеть свою работу.<br />Так появилась LITVINAVISAS — мой проект, в котором я могу уделить внимание каждой истории.</p>
          <p>Сегодня я лично разбираю визовые вопросы, проверяю документы и ищу решения с учётом обстоятельств каждого клиента.</p>
          <p className="home-about__signature"><strong>Екатерина</strong><br />Основательница LITVINAVISAS</p>
        </div>
      </div>
    </section>

    <ParallaxPhoto
      imageUrl="https://images.unsplash.com/photo-1671800556283-bdd5c461c793?auto=format&fit=crop&w=2400&q=85"
      label="Зелёные альпийские луга и горы"
    />

    <section className="section service-section">
      <div className="container">
        <Eyebrow>ЧЕМ Я МОГУ БЫТЬ ПОЛЕЗНА</Eyebrow>
        <h2 className="wide-title">Разные гражданства,<br />страны проживания<br /><span>и визовые направления.</span></h2>
        <p className="service-copy">Я помогаю оформлять туристические, гостевые, учебные, деловые и другие визы. Учитываю ваш паспорт, страну проживания и особенности подачи документов.</p>
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

    <Steps title="Этапы работы со мной" />
    <section className="section rules-preview"><div className="container rules-preview-inner"><div><Eyebrow>ВАЖНО ЗНАТЬ</Eyebrow><h2>Работаю внимательно,<br />а не 24/7.</h2></div><div><p>Я заранее согласовываю с вами сроки, формат общения и условия работы, чтобы каждый этап был понятным.</p><Link href="/work-rules" className="text-link">Правила работы со мной ↗</Link></div></div></section>
    <CtaBand title="Кажется, с визой всё сложно?" description="Возможно, не настолько. Расскажите о поездке — я разберусь в вашей ситуации и подскажу, с чего начать." />
  </>;
}
