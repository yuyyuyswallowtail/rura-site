import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "light" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-cobalt text-white hover:bg-navy",
  dark: "bg-ink text-white hover:bg-cobalt",
  light: "bg-white text-ink hover:bg-ice",
  outline: "border border-ink/30 text-ink hover:border-ink hover:bg-white",
};

type Common = { children: ReactNode; variant?: Variant; className?: string };
type Props = Common &
  (
    | { href: string; type?: never; onClick?: never; disabled?: never }
    | {
        href?: never;
        type?: "button" | "submit";
        onClick?: () => void;
        disabled?: boolean;
      }
  );

export function Button(props: Props) {
  const { children, variant = "primary", className = "" } = props;
  const cls = `group inline-flex h-12 items-center gap-3 px-5 text-[13px] font-medium transition-colors ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="size-2 bg-current transition-all duration-300 group-hover:size-2.5"
      />
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="-ml-2 size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none"
      />
    </>
  );

  if (props.href !== undefined) {
    const href = props.href;
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} className={cls}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`${cls} disabled:opacity-60`}
    >
      {inner}
    </button>
  );
}
