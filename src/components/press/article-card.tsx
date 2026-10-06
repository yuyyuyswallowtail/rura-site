import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PressArticle } from "@/data/types";
import { formatDate } from "@/lib/format";
import { Figure } from "../ui/figure";
import { SectionLabel } from "../ui/section-label";

export function ArticleCard({ article }: { article: PressArticle }) {
  return (
    <article className="group h-full border border-ink/10 bg-white transition-colors hover:border-ink">
      <Link
        href={`/press/${article.slug}`}
        className="flex h-full flex-col p-3 md:p-4"
      >
        <Figure
          img={article.image}
          aspect="aspect-[16/10]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="mt-5 flex items-center gap-3">
          <SectionLabel>{article.category}</SectionLabel>
          <time dateTime={article.date} className="text-xs text-muted">
            {formatDate(article.date)}
          </time>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-tight tracking-[-0.02em] md:text-2xl">
          {article.title}
        </h3>
        <p className="mt-3 text-sm text-muted">{article.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium">
          Read article
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </span>
      </Link>
    </article>
  );
}
