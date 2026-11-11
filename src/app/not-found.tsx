import Link from "next/link";
export default function NotFound() {
  return <section className="page-hero"><div className="container"><h1>404</h1><p>Такой страницы пока нет.</p><Link href="/visas" className="button button-dark">К направлениям ↗</Link></div></section>;
}
