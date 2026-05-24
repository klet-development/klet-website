import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import "../../legal/style.css";

export default function SfpPrivacyPage() {
  const t = useTranslations("sfpPrivacy");

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1 className="legal-title">{t("title")}</h1>

        <section className="legal-section">
          <h2>{t("app.title")}</h2>
          <dl className="legal-dl">
            <div>
              <dt>{t("app.nameLabel")}</dt>
              <dd>{t("app.name")}</dd>
            </div>
            <div>
              <dt>{t("app.publisherLabel")}</dt>
              <dd>{t("app.publisher")}</dd>
            </div>
            <div>
              <dt>{t("app.platformsLabel")}</dt>
              <dd>{t("app.platforms")}</dd>
            </div>
          </dl>
        </section>

        <section className="legal-section">
          <h2>{t("data.title")}</h2>
          <p>{t("data.intro")}</p>
          <dl className="legal-dl">
            <div>
              <dt>{t("data.auth.label")}</dt>
              <dd>{t("data.auth.value")}</dd>
            </div>
            <div>
              <dt>{t("data.ratings.label")}</dt>
              <dd>{t("data.ratings.value")}</dd>
            </div>
            <div>
              <dt>{t("data.local.label")}</dt>
              <dd>{t("data.local.value")}</dd>
            </div>
          </dl>
          <p>{t("data.noTracking")}</p>
        </section>

        <section className="legal-section">
          <h2>{t("purpose.title")}</h2>
          <p>{t("purpose.content")}</p>
        </section>

        <section className="legal-section">
          <h2>{t("subprocessors.title")}</h2>
          <p>{t("subprocessors.content")}</p>
        </section>

        <section className="legal-section">
          <h2>{t("retention.title")}</h2>
          <p>{t("retention.content")}</p>
        </section>

        <section className="legal-section">
          <h2>{t("rights.title")}</h2>
          <p>{t("rights.content")}</p>
        </section>

        <section className="legal-section">
          <h2>{t("contact.title")}</h2>
          <dl className="legal-dl">
            <div>
              <dt>Email</dt>
              <dd>{t("contact.email")}</dd>
            </div>
          </dl>
        </section>

        <section className="legal-section">
          <h2>{t("updated.title")}</h2>
          <p>{t("updated.content")}</p>
        </section>

        <div className="legal-back">
          <Link href="/">{t("back")}</Link>
        </div>
      </div>
    </div>
  );
}
