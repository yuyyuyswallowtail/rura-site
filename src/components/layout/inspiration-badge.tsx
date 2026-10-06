import { INSPIRATION_URL } from "@/lib/nav";

export function InspirationBadge() {
  return (
    <div className="bg-ink text-white">
      <div className="page flex h-8 items-center justify-between text-[10px] uppercase tracking-[0.14em]">
        <span className="hidden text-white/70 sm:inline">
          Design study · not affiliated with CURA
        </span>
        <a
          href={INSPIRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto underline-offset-4 hover:underline"
        >
          RURA — Inspired by CURA Climate ↗
        </a>
      </div>
    </div>
  );
}
