"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { TechnologyStep } from "@/data/types";
import { Figure } from "../ui/figure";
import { ImageCaption } from "../ui/image-caption";
import { Photo } from "../ui/photo";

function StepRow({
  step,
  index,
  total,
  dark,
  active,
  onActive,
}: {
  step: TechnologyStep;
  index: number;
  total: number;
  dark: boolean;
  active: boolean;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <div
      ref={ref}
      className="py-12 lg:flex lg:min-h-[80svh] lg:items-center lg:py-0"
    >
      <div
        className={`transition-opacity duration-500 motion-reduce:transition-none ${active ? "lg:opacity-100" : "lg:opacity-30"}`}
      >
        <p
          className={`text-xs tabular-nums ${dark ? "text-white/70" : "text-muted"}`}
        >
          {step.number} / {String(total).padStart(2, "0")}
        </p>
        <h3 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
          {step.title}
        </h3>
        <p
          className={`mt-5 max-w-sm text-base ${dark ? "text-white/80" : "text-muted"}`}
        >
          {step.text}
        </p>
        <div className="mt-8 lg:hidden">
          <Figure img={step.image} aspect="aspect-[4/3]" sizes="100vw" />
        </div>
      </div>
    </div>
  );
}

export function ProcessSticky({
  steps,
  dark = false,
}: {
  steps: TechnologyStep[];
  dark?: boolean;
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        {steps.map((s, i) => (
          <StepRow
            key={s.id}
            step={s}
            index={i}
            total={steps.length}
            dark={dark}
            active={active === i}
            onActive={setActive}
          />
        ))}
      </div>
      <div className="hidden lg:col-span-7 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-mist">
            {steps.map((s, i) => (
              <div
                key={s.id}
                aria-hidden={i !== active}
                className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${i === active ? "opacity-100" : "opacity-0"}`}
              >
                <Photo img={s.image} sizes="(min-width: 1024px) 55vw, 100vw" />
              </div>
            ))}
          </div>
          <ImageCaption as="p" img={steps[active].image} light={dark} />
        </div>
      </div>
    </div>
  );
}
