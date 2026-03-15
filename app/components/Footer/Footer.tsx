import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import "./Footer.css";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-info">
          <span className="footer-copyright">{t("copyright")}</span>
          <span className="footer-separator">·</span>
          <span className="footer-location">{t("location")}</span>
        </div>
        <nav className="footer-nav">
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/legal">{t("legal")}</Link>
        </nav>
      </div>
    </footer>
  );
}
