import type { ImageAsset } from "@/data/types";

export function ImageCaption({
  img,
  as = "figcaption",
  light = false,
  className = "",
}: {
  img: ImageAsset;
  as?: "figcaption" | "p";
  light?: boolean;
  className?: string;
}) {
  const Tag = as;
  return (
    <Tag
      className={`mt-2.5 text-[11px] leading-snug ${light ? "text-white/70" : "text-muted"} ${className}`}
    >
      <span className="block">{img.caption}</span>
      <span className="block text-[10px] uppercase tracking-[0.12em]">
        {img.credit}
      </span>
    </Tag>
  );
}
