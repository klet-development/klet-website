"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import "./style.css";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail("contact" + "@" + "klet-development.com");
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-grid">
        <div className="contact-title">{t("title")}</div>
        <div className="contact-email">
          {email ? (
            <a href={`mailto:${email}`}>{email}</a>
          ) : (
            <span aria-hidden>...</span>
          )}
        </div>
        <div className="contact-back">
          <Link href="/">{t("back")}</Link>
        </div>
      </div>
    </div>
  );
}
