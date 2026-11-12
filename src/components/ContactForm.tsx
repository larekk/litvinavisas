"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const methods = ["WhatsApp/Телефон", "Telegram", "Viber", "Max"] as const;
type Method = (typeof methods)[number];
const hints: Record<Method, string> = {
  "WhatsApp/Телефон": "+7 916 000-00-00 или +375 29 000-00-00",
  Telegram: "@username или номер телефона",
  Viber: "+7 916 000-00-00 или +375 29 000-00-00",
  Max: "Ссылка на профиль или номер телефона",
};

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const formId = useId();
  const [method, setMethod] = useState<Method>("Telegram");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

  // Static GitHub Pages cannot host server-side API routes. Public endpoint only.
  const formEndpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const honeypot = String(new FormData(event.currentTarget).get("website") ?? "");
    if (!consent || name.trim().length < 2 || contact.trim().length < 3 || message.trim().length < 4) {
      setResult({ ok: false, message: "Заполните имя, контакты, ваш вопрос и согласие на обработку данных." });
      return;
    }
    if (honeypot) return;
    setSending(true);
    setResult(null);

    if (!formEndpoint) {
      const subject = `Заявка VIZERA — ${name.trim()}`;
      const body = `Имя: ${name.trim()}\nСпособ связи: ${method}\nКонтакт: ${contact.trim()}\nВопрос: ${message.trim()}\n\nСогласие на обработку данных: да`;
      window.location.href = `mailto:vizera@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setResult({ ok: true, message: "Заявка подготовлена. Проверьте письмо и нажмите «Отправить» в почтовом приложении. Если оно не открылось — напишите нам в Telegram." });
      setSending(false);
      return;
    }

    if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(formEndpoint)) {
      setResult({ ok: false, message: "Сервис приёма заявок пока не настроен. Напишите нам в Telegram." });
      setSending(false);
      return;
    }
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: name.trim(), preferred_contact: method, contact: contact.trim(),
          message: message.trim(), personal_data_consent: "да",
          _subject: "Новая заявка VIZERA", _gotcha: honeypot,
        }),
      });
      if (!response.ok) throw new Error("Сервис приёма заявок временно недоступен. Напишите нам в Telegram.");
      setResult({ ok: true, message: "Спасибо! Мы получили ваш запрос и скоро свяжемся с вами." });
      setName(""); setContact(""); setMessage(""); setConsent(false);
    } catch (error) {
      setResult({ ok: false, message: error instanceof Error ? error.message : "Не удалось отправить заявку. Напишите нам в Telegram." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={`${styles.form} ${compact ? styles.compact : ""}`} id="contact-form" onSubmit={handleSubmit}>
      <div className={styles.heading}>
        <span className={styles.eyebrow}>ФОРМА ОБРАТНОЙ СВЯЗИ</span>
        <h3>Оставить заявку</h3>
        <p>Расскажите о вашей поездке или вопросе — мы разберёмся и подскажем, чем можем помочь.</p>
      </div>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label htmlFor={`${formId}-name`}>Ваше имя <span aria-hidden="true">*</span></label>
          <input id={`${formId}-name`} autoComplete="name" required minLength={2} maxLength={80} placeholder="Как к вам обращаться" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <fieldset className={styles.methods}>
          <legend>Удобный способ связи <span aria-hidden="true">*</span></legend>
          <div className={styles.methodOptions}>
            {methods.map((item) => (
              <label key={item} className={`${styles.methodOption} ${method === item ? styles.selected : ""}`}>
                <input type="radio" name={`${formId}-method`} checked={method === item} onChange={() => { setMethod(item); setContact(""); setResult(null); }} value={item} />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <div className={styles.field}>
          <label htmlFor={`${formId}-contact`}>{method === "Telegram" || method === "Max" ? "Никнейм, ссылка или телефон" : "Номер телефона"} <span aria-hidden="true">*</span></label>
          <input id={`${formId}-contact`} required maxLength={120} placeholder={hints[method]} autoComplete={method === "WhatsApp/Телефон" || method === "Viber" ? "tel" : "off"} inputMode={method === "WhatsApp/Телефон" || method === "Viber" ? "tel" : "text"} value={contact} onChange={(event) => setContact(event.target.value)} />
        </div>
        <div className={styles.field}>
          <label htmlFor={`${formId}-message`}>Куда собираетесь / ваш вопрос <span aria-hidden="true">*</span></label>
          <textarea id={`${formId}-message`} rows={3} required minLength={4} maxLength={2000} placeholder="Например: нужна туристическая виза в Японию" value={message} onChange={(event) => setMessage(event.target.value)} />
        </div>
      </div>
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor={`${formId}-website`}>Ваш сайт</label><input id={`${formId}-website`} type="text" name="website" autoComplete="off" tabIndex={-1} /></div>
      <label className={styles.consent}>
        <input type="checkbox" required checked={consent} onChange={(event) => setConsent(event.target.checked)} />
        <span>Я согласен(на) на обработку персональных данных в соответствии с <Link href="/legal/privacy">политикой конфиденциальности</Link>.</span>
      </label>
      <button className={styles.submit} type="submit" disabled={sending}>{sending ? "Отправляем…" : formEndpoint ? "Отправить заявку" : "Подготовить заявку"}<span aria-hidden="true">↗</span></button>
      <p role="status" aria-live="polite" className={`${styles.status} ${result?.ok ? styles.success : styles.error}`}>{result?.message ?? ""}</p>
      <p className={styles.fallback}>Или напишите нам в <a href="https://t.me/KK4TI" target="_blank" rel="noopener noreferrer">Telegram @KK4TI ↗</a></p>
    </form>
  );
}
