"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AsciiChar } from "@/app/components/AsciiChar/AsciiChar";
import { useState } from "react";

import "./style.css";

export default function Home() {
  const t = useTranslations("home");
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">{t("hero.title")}</h1>
        <p className="hero-tagline">{t("hero.tagline")}</p>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        <div
          className="hero-ascii"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="ascii-grid">
            {Array.from({ length: 120 }).map((_, i) => (
              <AsciiChar key={i} isActive={isHovering} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2 className="section-title">{t("services.title")}</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-name">{t("services.web.name")}</h3>
            <p className="service-desc">{t("services.web.description")}</p>
            <span className="service-tech">{t("services.web.tech")}</span>
          </div>
          <div className="service-card">
            <h3 className="service-name">{t("services.mobile.name")}</h3>
            <p className="service-desc">{t("services.mobile.description")}</p>
            <span className="service-tech">{t("services.mobile.tech")}</span>
          </div>
          <div className="service-card">
            <h3 className="service-name">{t("services.consulting.name")}</h3>
            <p className="service-desc">{t("services.consulting.description")}</p>
            <span className="service-tech">{t("services.consulting.tech")}</span>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients">
        <h2 className="section-title">{t("clients.title")}</h2>
        <div className="clients-row">
          <img src="/logos/airbus.svg" alt="Airbus" className="client-logo" />
          <img src="/logos/sanofi.svg" alt="Sanofi" className="client-logo" />
          <img src="/logos/foncia.svg" alt="Foncia" className="client-logo" />
          <img src="/logos/idgarages.svg" alt="iDGarages" className="client-logo" />
        </div>
      </section>

      {/* About */}
      <section className="about">
        <h2 className="section-title">{t("about.title")}</h2>
        <div className="about-content">
          <p>{t("about.story")}</p>
          <p>{t("about.approach")}</p>
          <p className="about-tech">{t("about.tech")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <p className="cta-text">{t("cta.text")}</p>
        <Link href="/contact" className="cta-link">
          {t("cta.link")} →
        </Link>
      </section>
    </div>
  );
}
