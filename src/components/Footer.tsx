import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <nav className={styles.legal} aria-label="Юридические документы">
          <Link href="/legal/privacy">Политика конфиденциальности</Link>
          <Link href="/legal/agreement">Договор об оказании услуг</Link>
          <Link href="/legal/offer">Публичная оферта</Link>
        </nav>
        <div className={styles.contacts} aria-label="Контакты Екатерины">
          <a href="mailto:vizera@gmail.com">vizera@gmail.com</a>
          <a href="https://t.me/KK4TI" target="_blank" rel="noopener noreferrer">Telegram @KK4TI</a>
          <a href="tel:+375292773076">+375 29 277-30-76</a>
        </div>
        <a className={styles.top} href="#top">Наверх <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
