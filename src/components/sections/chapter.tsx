export function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-ink/20 pt-4">
      <span className="text-xs tabular-nums">{n}</span>
      <span className="text-[11px] uppercase tracking-[0.14em]">{title}</span>
    </div>
  );
}
