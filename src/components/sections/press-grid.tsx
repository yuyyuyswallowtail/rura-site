import Link from "next/link";
import { articles } from "@/data/site";
import { ArticleCard } from "../press/article-card";
import { Headline } from "../ui/headline";
import { SectionLabel } from "../ui/section-label";

export function PressGrid() {
  return (
    <section className="py-24 md:py-36">
      <div className="page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>News &amp; press</SectionLabel>
            <Headline
              lines={["Progress, partnerships,", "and industry recognition"]}
              className="mt-6 text-4xl md:text-6xl"
            />
          </div>
          <Link href="/press" className="text-sm underline underline-offset-4">
            All news →
          </Link>
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {articles.slice(0, 4).map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
