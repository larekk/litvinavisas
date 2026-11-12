import type { Metadata } from "next";
import { CtaBand } from "@/components/SectionParts";

export const metadata: Metadata = { title: "О нас" };

export default function AboutPage() {
  return <>
    <section className="page-hero"><div className="container"><p className="eyebrow">КОМАНДА VIZERA</p><h1>О нас</h1><p>Мы помогаем людям уверенно готовиться к поездкам, разбираемся в сложных визовых вопросах и сопровождаем на каждом важном этапе.</p></div></section>
    <section className="home-about" id="about" aria-labelledby="about-title">
      <div className="home-about__content">
        <p className="home-about__eyebrow">НЕМНОГО О НАС</p>
        <h2 id="about-title">Как появилась VIZERA</h2>
        <div className="home-about__body">
          <p>История VIZERA началась с опыта Екатерины. Уже больше семи лет она занимается визовыми вопросами: изучает требования разных стран, помогает собирать документы и находит решения как для обычных туристических поездок, так и для нестандартных ситуаций.</p>
          <p>Со временем появилось понимание, каким должен быть сервис: с вниманием к человеку, понятными условиями и без обещаний невозможного. Так родилась VIZERA.</p>
          <p>Сегодня мы — команда. Вместе разбираем запросы, проверяем детали и сопровождаем клиентов. Екатерина остаётся главным человеком проекта: руководит работой и лично участвует в решении сложных случаев.</p>
          <p>Для нас важно не просто подготовить документы, а сделать каждый этап спокойным и понятным для вас.</p>
          <p className="home-about__signature"><strong>Екатерина</strong><br />Основательница и руководитель VIZERA</p>
        </div>
      </div>
    </section>
    <CtaBand title="Рады знакомству!" description="Расскажите нам о вашей поездке, и мы подскажем, с чего начать." />
  </>;
}
