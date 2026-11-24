import type { Metadata } from "next";
import { CtaBand } from "@/components/SectionParts";

export const metadata: Metadata = { title: "О VIZERA" };

export default function AboutPage() {
  return (
    <>
      <section className="home-about" id="about" aria-labelledby="about-title">
        <div className="home-about__content">
          <p className="home-about__eyebrow">О VIZERA</p>
          <h1 id="about-title">Давайте знакомиться 😊</h1>
          <div className="home-about__body">
            <p>Меня зовут Екатерина Литвина. Уже больше семи лет работаю с визами. За это время были и простые туристические обращения, и случаи, над которыми приходилось серьёзно подумать.</p>
            <p>VIZERA — мой собственный проект. Здесь для меня важнее качество, а не количество заявок. Все по делу, без лишних обещаний и оформления ради оформления.</p>
            <p className="home-about__signature">Founded by Katerina Litvina 🧡️</p>
          </div>
        </div>
      </section>
      <CtaBand title="Рады знакомству!" description="Расскажите нам о вашей поездке, и мы подскажем, с чего начать." />
    </>
  );
}
