import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { posts } from "@/.velite";

import "./style.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title").replace(/[\[\]]/g, "").trim(),
    alternates: {
      languages: {
        fr: "/blog",
        en: "/en/blog",
      },
    },
  };
}

function BlogList({ locale }: { locale: string }) {
  const t = useTranslations("blog");

  const localePosts = posts
    .filter((p) => p.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="blog-page">
      <div className="blog-grid">
        <div className="blog-title">{t("title")}</div>
        {localePosts.length === 0 ? (
          <div className="blog-empty">Coming soon :)</div>
        ) : (
          localePosts.map((post) => (
            <div key={post.slug} className="blog-item">
              <div className="blog-item-meta">
                <span className="blog-item-date">
                  {t("publishedOn")}{" "}
                  {new Date(post.date).toLocaleDateString(
                    locale === "fr" ? "fr-FR" : "en-US",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </span>
              </div>
              <div className="blog-item-title">{post.title}</div>
              <div className="blog-item-description">{post.description}</div>
              <div className="blog-item-link">
                <Link href={`/blog/${post.slug}`}>{t("readMore")}</Link>
              </div>
            </div>
          ))
        )}
        <div className="blog-back">
          <Link href="/">{t("back")}</Link>
        </div>
      </div>
    </div>
  );
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BlogList locale={locale} />;
}
