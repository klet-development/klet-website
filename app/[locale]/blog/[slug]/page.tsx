import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { MDXContent } from "@/app/components/MDXContent/MDXContent";
import { posts } from "@/.velite";

import "./style.css";

const SITE_URL = "https://klet-development.com";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return posts.map((post) => ({
    locale: post.locale,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.locale === locale);
  if (!post) return {};

  const canonicalUrl =
    locale === "fr"
      ? `${SITE_URL}/blog/${slug}`
      : `${SITE_URL}/en/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: `${SITE_URL}/blog/${slug}`,
        en: `${SITE_URL}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: canonicalUrl,
      authors: ["Kameron Argis"],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug && p.locale === locale);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: "Kameron Argis",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Kameron Argis",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="article-page">
        <article className="article-grid">
          <div className="article-header">
            <div className="article-meta">
              {t("publishedOn")}{" "}
              {new Date(post.date).toLocaleDateString(
                locale === "fr" ? "fr-FR" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </div>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-description">{post.description}</p>
          </div>
          <div className="article-body">
            <MDXContent code={post.body} />
          </div>
          <div className="article-back">
            <Link href="/blog">{t("backToBlog")}</Link>
          </div>
        </article>
      </div>
    </>
  );
}
