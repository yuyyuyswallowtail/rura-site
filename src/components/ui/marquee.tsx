"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Marquee({
  text,
  reverse = false,
  className = "",
}: {
  text: string;
  reverse?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <p className={`page break-words ${className}`}>{text}</p>;
  }

  const group = (k: string) => (
    <div
      key={k}
      className="flex shrink-0 items-center gap-[0.4em] pr-[0.4em]"
      aria-hidden="true"
    >
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="overflow-hidden">
      <motion.div
        className={`flex w-max whitespace-nowrap ${className}`}
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {group("a")}
        {group("b")}
      </motion.div>
    </div>
  );
}
