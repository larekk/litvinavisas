import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import "./dark-theme.css";

export const metadata: Metadata = {
  title: { default: "LITVINAVISAS — визовое сопровождение", template: "%s | LITVINAVISAS" },
  description: "Визовые консультации и сопровождение с учётом гражданства, места проживания и цели поездки.",
  robots: { index: false, follow: false }, // убрать после завершения миграции и SEO-проверки
};

// Runs before hydration to avoid a flash of the wrong color scheme.
// Default is dark, matching the previous site version.
const themeInitScript = `(() => {
  try {
    const stored = localStorage.getItem("litvinavisas-theme");
    document.documentElement.dataset.theme = stored === "light" ? "light" : "dark";
  } catch (_) { document.documentElement.dataset.theme = "dark"; }
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" data-theme="dark" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head><body id="top"><Header /><main>{children}</main><Footer /></body></html>;
}
