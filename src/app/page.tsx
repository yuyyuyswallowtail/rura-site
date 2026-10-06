import { Factory, Flame, Zap } from "lucide-react";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTASection } from "@/components/sections/cta-section";
import { PartnerGrid } from "@/components/sections/partner-grid";
import { PressGrid } from "@/components/sections/press-grid";
import { ProcessSticky } from "@/components/sections/process-sticky";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/count-up";
import { Figure } from "@/components/ui/figure";
import { Headline } from "@/components/ui/headline";
import { ImageCaption } from "@/components/ui/image-caption";
import { Marquee } from "@/components/ui/marquee";
import { Parallax } from "@/components/ui/parallax";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { IMG } from "@/data/images";
import { processSteps } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "RURA — Industrial Decarbonization Technology",
  "RURA develops electrified process technologies that help heavy industry reduce emissions without rebuilding everything around it.",
  "/",
);

const cards = [
  {
    icon: Flame,
    title: "Process emissions",
    text: "Heating limestone releases CO₂ as part of the chemistry itself, regardless of the fuel used.",
  },
  {
    icon: Zap,
    title: "Energy intensity",
    text: "Thermal steps demand large, continuous energy input that is hard to supply cleanly.",
  },
  {
    icon: Factory,
    title: "Existing infrastructure",
    text: "Plants run for decades. Solutions must connect to what is already built.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 01 HERO */}
      <section className="page pt-3">
        <div className="relative min-h-[70svh] overflow-hidden bg-navy md:min-h-[82svh]">
          <Photo img={IMG.plant} priority sizes="100vw" />
          <div className="absolute inset-0 bg-navy/45" />
          <div className="on-dark relative flex min-h-[70svh] flex-col justify-between p-5 text-white md:min-h-[82svh] md:p-10">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.14em]">
              <span>RURA / Industrial climate technology</span>
              <span className="hidden sm:inline">01 / 2026</span>
            </div>
            <div>
              <Headline
                as="h1"
                lines={[
                  "INDUSTRIAL",
                  "DECARBONIZATION,",
                  "ENGINEERED FOR",
                  "REALITY.",
                ]}
                className="text-[clamp(1.65rem,8vw,6.75rem)]"
              />
              <p className="mt-6 max-w-md text-sm text-white/90 md:text-base">
                RURA develops electrified process technologies that help heavy
                industry reduce emissions without rebuilding everything around
                it.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/technology">Explore the technology</Button>
                <Button href="/contact" variant="light">
                  Speak with RURA
                </Button>
              </div>
            </div>
          </div>
        </div>
        <ImageCaption as="p" img={IMG.plant} />
      </section>

      {/* 02 THE PROBLEM */}
      <section className="relative overflow-hidden py-28 md:py-48">
        <div className="page text-center">
          <Reveal>
            <SectionLabel>The industrial reality</SectionLabel>
          </Reveal>
          <Headline
            lines={["The hardest emissions", "are built into", "the process."]}
            className="mt-8 text-[clamp(2rem,6vw,5rem)]"
          />
        </div>
        <div className="page mt-24 grid gap-10 md:mt-44 lg:grid-cols-12">
          <Reveal className="self-end lg:col-span-4">
            <p className="max-w-sm text-base text-muted md:text-lg">
              Cement and similar materials emit CO₂ because of what happens
              inside the kiln, not only because of the fuel that heats it.
              Cleaner energy alone cannot remove that part.
            </p>
          </Reveal>
          <Parallax className="-mr-5 ml-auto w-[78%] md:-mr-8 md:w-[50%] lg:-mr-10 lg:col-span-5 lg:col-start-8 lg:w-auto">
            <Figure
              img={IMG.concrete}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 80vw"
            />
          </Parallax>
        </div>
      </section>

      {/* 03 WHY IT MATTERS */}
      <section className="border-y border-ink/10 py-24 md:py-36">
        <div className="page">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel>Industry context</SectionLabel>
              <p className="mt-6 text-[clamp(7rem,26vw,22rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-cobalt">
                <CountUp to={8} suffix="%" />
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-xl font-medium tracking-tight md:text-2xl">
                of global CO₂ emissions are commonly attributed to cement
                production.
              </p>
              <p className="mt-4 text-xs text-muted">
                Contextual industry estimate, not a RURA performance claim. RURA
                is a fictional company.
              </p>
            </div>
          </div>
          <ul className="mt-20 grid gap-3 md:grid-cols-3">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex min-h-[260px] flex-col justify-between border border-ink/10 bg-white p-6 transition-colors hover:border-ink md:p-8"
              >
                <c.icon aria-hidden="true" className="size-5 text-cobalt" />
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{c.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 TECHNOLOGY */}
      <section className="on-dark bg-navy py-24 text-white md:py-36">
        <div className="page">
          <div className="mb-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionLabel dark>How it works</SectionLabel>
              <Headline
                lines={["Intervening", "where emissions", "begin."]}
                className="mt-6 text-[clamp(2.5rem,7vw,6rem)]"
              />
            </div>
            <p className="self-end text-white/80 lg:col-span-4 lg:col-start-9">
              Four steps move the chemistry from fuel to electricity and capture
              the CO₂ before it mixes with anything else.
            </p>
          </div>
          <ProcessSticky steps={processSteps} dark />
        </div>
      </section>

      {/* 05 MARQUEE */}
      <section className="overflow-hidden bg-ice py-16 text-navy md:py-28">
        <h2 className="sr-only">Decarbonize industry</h2>
        <Marquee
          text="DECARBONIZE INDUSTRY"
          className="text-[clamp(4rem,15vw,14rem)] font-semibold leading-[0.9] tracking-[-0.05em]"
        />
        <div className="mt-2">
          <Marquee
            text="DECARBONIZE INDUSTRY"
            reverse
            className="text-[clamp(4rem,15vw,14rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-navy/20"
          />
        </div>
      </section>

      {/* 06 INDUSTRY REALITY */}
      <section className="py-24 md:py-40">
        <div className="page">
          <div className="mb-20 md:mb-32">
            <SectionLabel>Deployment reality</SectionLabel>
            <Headline
              lines={[
                "Technology matters",
                "only when industry",
                "can deploy it.",
              ]}
              className="mt-6 text-[clamp(2.25rem,6vw,5rem)]"
            />
          </div>
          <FeatureGrid />
        </div>
      </section>

      <PartnerGrid />
      <PressGrid />
      <CTASection />
    </>
  );
}
