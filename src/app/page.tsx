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
        <h1 id="home-title">VIZERA</h1>
        <p>✦ VISA CONSULTING ✦</p>
      </div>
      <a className="home-hero__down" href="#services" aria-label="Прокрутить к услугам">
        <svg width="40" height="22" viewBox="0 0 40 22" fill="none" aria-hidden="true"><path d="m3 2 17 17L37 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </a>
    </section>

    <section className="section brand-intro" aria-labelledby="brand-intro-title">
      <div className="container brand-intro__layout">
        <div>
          <Eyebrow>КОМАНДА VIZERA</Eyebrow>
          <h2 id="brand-intro-title">За брендом —<br />опыт и люди.</h2>
        </div>
        <div className="brand-intro__details">
          <p>VIZERA выросла из многолетней практики Екатерины. Сегодня над визовыми вопросами работает команда: мы внимательно изучаем каждую ситуацию, готовим документы и сопровождаем клиентов на разных этапах.</p>
          <Link href="/about" className="text-link">Подробнее о нас ↗</Link>
        </div>
      </div>
    </section>

    <section className="section service-section" id="services">
      <div className="container service-layout">
        <div className="service-layout__left">
          <Eyebrow>ЧЕМ МЫ МОЖЕМ ПОМОЧЬ</Eyebrow>
          <h2>Консультируем, готовим документы и сопровождаем оформление виз. Работаем с разными гражданствами, странами проживания и визовыми направлениями.</h2>
        </div>
        <div className="service-layout__right">
          <h3>В визовых вопросах очевидное не всегда верное.</h3>
          <p>Список документов можно найти в интернете. Но далеко не всегда понятно, какие правила относятся именно к вам и с чего вообще начинать.</p>
          <p>Мы задаём много вопросов. Иногда даже больше, чем вы ожидали. Не из любопытства — нам важно разобраться в вашей ситуации и заметить возможные сложности ещё до подачи.</p>
        </div>
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
    <section className="section rules-preview">
      <div className="container rules-preview-inner">
        <div><Eyebrow>НАШ ПОДХОД</Eyebrow><h2>Хорошая работа не любит спешки.</h2></div>
        <div>
          <p>Мы не стремимся принять как можно больше заявок. Нам важнее уделить достаточно времени каждому клиенту и качественно выполнить свою работу.</p>
          <p>У нас есть рабочие часы и сроки подготовки документов. Мы не обещаем ответить за пять минут, зато внимательно относимся к каждому запросу, который берём в работу.</p>
          <Link href="/work-rules" className="text-link">Подробнее о принципах работы ↗</Link>
        </div>
      </div>
    </section>
    <CtaBand title="Расскажите нам о своей поездке" minimal />
  </>;
}
