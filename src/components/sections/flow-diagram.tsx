export function FlowDiagram({
  nodes,
  caption,
}: {
  nodes: string[];
  caption: string;
}) {
  return (
    <figure>
      <ol className="flex flex-col md:flex-row md:items-stretch">
        {nodes.map((n, i) => (
          <li
            key={n}
            className="flex flex-1 flex-col md:flex-row md:items-center"
          >
            <div className="flex min-h-[96px] flex-1 flex-col justify-between border border-ink/20 bg-white p-4 text-sm font-medium">
              <span className="text-[10px] tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {n}
            </div>
            {i < nodes.length - 1 && (
              <div
                aria-hidden="true"
                className="mx-auto h-6 w-px bg-ink/30 md:mx-0 md:h-px md:w-6"
              />
            )}
          </li>
        ))}
      </ol>
      <figcaption className="mt-2.5 text-[11px] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
