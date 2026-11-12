"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { countries, regions } from "@/lib/data";
import BrandMark from "./BrandMark";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

const IconInstagram = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2.3" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.3" /><circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" /></svg>;
const IconTelegram = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m20.8 4-3.2 15.1c-.2 1.1-.9 1.4-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.3L5.2 12.6.5 11.2c-1-.3-1-1 .2-1.5L19 2.7c.9-.3 2 .2 1.8 1.3Z" /></svg>;
const reviewsUrl = process.env.NEXT_PUBLIC_REVIEWS_TG_URL?.trim() || "";
const validReviewsUrl = /^https:\/\/t\.me\/[a-zA-Z0-9_+/-]+$/.test(reviewsUrl) ? reviewsUrl : "";
const IconSearch = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.7" cy="10.7" r="6.4" stroke="currentColor" strokeWidth="1.7" /><path d="m15.6 15.6 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visasOpen, setVisasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setVisasOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMobileOpen(false); setVisasOpen(false); setSearchOpen(false); }
    };
    const onPointer = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setVisasOpen(false);
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) setSearchOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onPointer); };
  }, []);

  const closeAll = () => { setVisasOpen(false); setMobileOpen(false); setSearchOpen(false); };
  const searchResults = [
    ...regions.map((region) => ({ name: region.title, href: `/visas/${region.slug}`, type: "Регион" })),
    ...countries.map((country) => ({ name: country.name, href: `/visas/${country.slug}`, type: "Страна" })),
  ].filter((item) => item.name.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.desktopNav} aria-label="Основная навигация">
          <div className={styles.dropdownAnchor} ref={menuRef}>
            <button type="button" className={`${styles.navLink} ${pathname.startsWith("/visas") ? styles.active : ""}`}
              aria-expanded={visasOpen} aria-controls="visas-menu" onClick={() => { setVisasOpen(!visasOpen); setSearchOpen(false); }}>
              Визы <span aria-hidden="true" className={styles.chevron}>⌄</span>
            </button>
            {visasOpen && (
              <div className={styles.dropdown} id="visas-menu">
                <div><p className={styles.menuHeading}>По регионам</p>{regions.map((region) => <Link key={region.slug} href={`/visas/${region.slug}`} onClick={closeAll}>{region.title}</Link>)}</div>
                <div><p className={styles.menuHeading}>Популярные страны</p>{countries.map((country) => <Link key={country.slug} href={`/visas/${country.slug}`} onClick={closeAll}>{country.name}</Link>)}<Link className={styles.allLink} href="/visas" onClick={closeAll}>Все направления ↗</Link></div>
              </div>
            )}
          </div>
          <Link className={styles.navLink} href="/consultation">Консультация</Link>
          <Link className={styles.navLink} href="/contacts">Контакты</Link>
          {validReviewsUrl ? <a className={styles.navLink} href={validReviewsUrl} target="_blank" rel="noopener noreferrer">Отзывы ↗</a> : <span className={`${styles.navLink} ${styles.pendingLink}`} title="Ссылка на Telegram-канал отзывов ещё не добавлена">Отзывы</span>}
          <Link className={styles.navLink} href="/about">О нас</Link>
        </nav>
        <Link className={styles.brand} href="/" aria-label="VIZERA — на главную" onClick={closeAll}><BrandMark className={styles.brandIcon} /></Link>
        <div className={styles.actions}>
          <span className={styles.socialIcon} title="Instagram: адрес профиля пока не указан" aria-label="Instagram: адрес профиля пока не указан"><IconInstagram /></span>
          <a className={styles.socialIcon} href="https://t.me/KK4TI" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><IconTelegram /></a>
          <div className={styles.searchAnchor} ref={searchRef}>
            <button type="button" className={styles.searchButton} aria-label="Поиск направлений" aria-expanded={searchOpen} aria-controls="site-search" onClick={() => { setSearchOpen(!searchOpen); setVisasOpen(false); }}><IconSearch /></button>
            {searchOpen && <div className={styles.searchPanel} id="site-search"><label htmlFor="destination-search">Найти направление</label><input autoFocus id="destination-search" type="search" placeholder="Страна или регион" value={query} onChange={(event) => setQuery(event.target.value)} /><div className={styles.searchResults}>{searchResults.length ? searchResults.slice(0, 10).map((item) => <Link href={item.href} key={item.href} onClick={closeAll}><span>{item.name}</span><small>{item.type}</small></Link>) : <p>По вашему запросу направлений не найдено.</p>}</div></div>}
          </div>
          <ThemeToggle className={styles.themeToggle} />
          <Link className={styles.desktopCta} href="/contacts#contact-form">Оставить заявку</Link>
          <button type="button" className={styles.mobileToggle} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMobileOpen(!mobileOpen)}><span /><span /><span /></button>
        </div>
      </div>
      {mobileOpen && <nav className={styles.mobileNav} id="mobile-navigation" aria-label="Мобильная навигация">
        <Link onClick={closeAll} href="/">Главная</Link><Link onClick={closeAll} href="/visas">Все визы</Link>
        <button className={styles.mobileSubToggle} type="button" onClick={() => setVisasOpen(!visasOpen)} aria-expanded={visasOpen} aria-controls="mobile-regions">Регионы и страны <span>{visasOpen ? "−" : "+"}</span></button>
        {visasOpen && <div className={styles.mobileSub} id="mobile-regions">{regions.map((region) => <Link key={region.slug} href={`/visas/${region.slug}`} onClick={closeAll}>{region.title}</Link>)}{countries.map((country) => <Link key={country.slug} href={`/visas/${country.slug}`} onClick={closeAll}>{country.name}</Link>)}</div>}
        <Link onClick={closeAll} href="/consultation">Консультация</Link><Link onClick={closeAll} href="/contacts">Контакты</Link>{validReviewsUrl ? <a href={validReviewsUrl} target="_blank" rel="noopener noreferrer" onClick={closeAll}>Отзывы ↗</a> : <span className={styles.pendingLink} title="Ссылка на Telegram-канал отзывов ещё не добавлена">Отзывы</span>}<Link onClick={closeAll} href="/about">О нас</Link><Link className={styles.mobileContact} onClick={closeAll} href="/contacts#contact-form">Оставить заявку ↗</Link>
      </nav>}
    </header>
  );
}
