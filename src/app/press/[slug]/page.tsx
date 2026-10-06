import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/press/article-card";
import { Figure } from "@/components/ui/figure";
import { SectionLabel } from "@/components/ui/section-label";
import { articles } from "@/data/site";
import { formatDate } from "@/lib/format";
import { pageMeta } from "@/lib/meta";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return pageMeta(`${a.title} — RURA News`, a.excerpt, `/press/${a.slug}`);
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();

  const related = articles
    .filter((x) => x.slug !== a.slug)
    .sort(
      (x, y) =>
        Number(y.category === a.category) - Number(x.category === a.category),
    )
    .slice(0, 2);

  return (
    <>
      <article>
        <header className="page pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="flex items-center gap-4">
            <SectionLabel>{a.category}</SectionLabel>
            <time dateTime={a.date} className="text-sm text-muted">
              {formatDate(a.date)}
            </time>
          </div>
          <h1 className="mt-6 max-w-5xl text-[clamp(2rem,5.5vw,5rem)] font-semibold leading-[1] tracking-[-0.04em]">
            {a.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            {a.excerpt}
          </p>
        </header>

        <div className="page">
          <Figure img={a.image} aspect="aspect-[16/9]" sizes="100vw" priority />
        </div>

        <div className="page grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <aside className="self-start lg:sticky lg:top-28 lg:col-span-3">
            <dl className="space-y-4 border-t border-ink/20 pt-4 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">
                  Category
                </dt>
                <dd>{a.category}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">
                  Published
                </dt>
                <dd>{formatDate(a.date)}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.14em] text-muted">
                  Source
                </dt>
                <dd>RURA (fictional)</dd>
              </div>
            </dl>
            <Link
              href="/press"
              className="mt-6 inline-block text-sm underline underline-offset-4"
            >
              ← All news
            </Link>
          </aside>
          <div className="max-w-[68ch] space-y-6 text-lg leading-relaxed lg:col-span-7 lg:col-start-5">
            {a.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-ink/10 py-20 md:py-28">
        <div className="page">
          <h2 className="mb-10 text-[11px] uppercase tracking-[0.14em] text-muted">
            Related articles
          </h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <ArticleCard article={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
