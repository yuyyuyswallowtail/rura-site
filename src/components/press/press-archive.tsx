"use client";

import { useState } from "react";
import type { PressArticle } from "@/data/types";
import { ArticleCard } from "./article-card";

const categories = ["All", "News", "Announcements", "Research", "Partnerships"] as const;

export function PressArchive({ articles }: { articles: PressArticle[] }) {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? articles : articles.filter((a) => a.category === cat);

  return (
    <div>
      <fieldset className="flex min-w-0 flex-wrap gap-x-6 gap-y-2 border-b border-ink/10 pb-4">
        <legend className="sr-only">Filter by category</legend>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`text-sm transition-colors ${cat === c ? "font-semibold text-ink underline underline-offset-8" : "text-muted hover:text-ink"}`}
          >
            {c}
          </button>
        ))}
      </fieldset>
      <p aria-live="polite" className="sr-only">
        {list.length} articles shown
      </p>
      <h2 className="sr-only">Articles</h2>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {list.map((a) => (
          <li key={a.slug}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>
    </div>
  );
}
