"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter, usePathname } from "@/i18n/navigation";

import "./Header.css";

export function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const otherLocale = locale === "fr" ? "en" : "fr";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <header className="site-header">
      <Link href="/" className="header-logo">
        [ KLET ]
      </Link>
      <nav className="header-nav">
        <Link href="/blog">{t("blog")}</Link>
        <Link href="/contact">{t("contact")}</Link>
        <button onClick={switchLocale} className="lang-toggle">
          {otherLocale.toUpperCase()}
        </button>
      </nav>
    </header>
  );
}
