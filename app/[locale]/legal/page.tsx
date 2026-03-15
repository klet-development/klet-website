import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import "./style.css";

export default function LegalPage() {
  const t = useTranslations("legal");

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">{t("title")}</h1>

        <section className="legal-section">
          <h2>{t("editor.title")}</h2>
          <dl className="legal-dl">
            <div>
              <dt>Société</dt>
              <dd>{t("editor.companyName")}</dd>
            </div>
            <div>
              <dt>SIREN</dt>
              <dd>{t("editor.siren")}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{t("editor.email")}</dd>
            </div>
          </dl>
        </section>

        <section className="legal-section">
          <h2>{t("hosting.title")}</h2>
          <dl className="legal-dl">
            <div>
              <dt>Hébergeur</dt>
              <dd>{t("hosting.provider")}</dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>{t("hosting.address")}</dd>
            </div>
            <div>
              <dt>Site</dt>
              <dd>{t("hosting.website")}</dd>
            </div>
          </dl>
        </section>

        <section className="legal-section">
          <h2>{t("privacy.title")}</h2>
          <p>{t("privacy.content")}</p>
        </section>

        <section className="legal-section">
          <h2>{t("intellectual.title")}</h2>
          <p>{t("intellectual.content")}</p>
        </section>

        <div className="legal-back">
          <Link href="/">{t("back")}</Link>
        </div>
      </div>
    </div>
  );
}
