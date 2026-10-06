import { Chapter } from "@/components/sections/chapter";
import { CTASection } from "@/components/sections/cta-section";
import { FlowDiagram } from "@/components/sections/flow-diagram";
import { PartnerGrid } from "@/components/sections/partner-grid";
import { ProcessSticky } from "@/components/sections/process-sticky";
import { Figure } from "@/components/ui/figure";
import { Headline } from "@/components/ui/headline";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { IMG } from "@/data/images";
import { processSteps } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "RURA Technology — Electrifying Industrial Processes",
  "How RURA moves industrial process chemistry from fuel to electricity and integrates with existing plants.",
  "/technology",
);

const phases = [
  {
    n: "Phase 1",
    title: "Laboratory validation",
    text: "Stack performance, stream purity and material behaviour tested at bench scale.",
  },
  {
    n: "Phase 2",
    title: "Pilot operation",
    text: "A skid-mounted pilot runs beside a host plant under real feed variability.",
  },
  {
    n: "Phase 3",
    title: "Demonstration",
    text: "A continuous demonstration unit proves reliability and maintenance routines.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <section className="page pb-24 pt-16 md:pb-40 md:pt-28">
        <div className="flex justify-between text-[10px] uppercase tracking-[0.14em] text-muted">
          <span>Technology</span>
          <span>Scroll to explore</span>
        </div>
        <Headline
          as="h1"
          lines={[
            "Electrifying",
            "the process,",
            "not replacing",
            "the industry.",
          ]}
          className="mt-10 text-[clamp(2.5rem,9vw,8.5rem)]"
        />
      </section>

      <section className="page pb-24 md:pb-40">
        <Figure img={IMG.lab} aspect="aspect-[16/9]" sizes="100vw" priority />
      </section>

      <section className="page grid gap-10 pb-28 lg:grid-cols-12 md:pb-44">
        <div className="lg:col-span-12">
          <Chapter n="01" title="Technology overview" />
        </div>
        <Reveal className="lg:col-span-4">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
            Chemistry at the source, powered by electricity.
          </h2>
          <p className="mt-5 text-muted">
            RURA replaces the fuel-fired step that releases process CO₂ with an
            electrochemical route, so the gas can be captured pure.
          </p>
        </Reveal>
        <Figure
          img={IMG.lab4}
          aspect="aspect-[4/3]"
          className="lg:col-span-7 lg:col-start-6"
        />
      </section>

      <section className="bg-ice py-24 text-navy md:py-40">
        <div className="page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <Chapter n="02" title="Why process emissions matter" />
          </div>
          <div className="lg:col-span-6">
            <Headline
              lines={["Fuel is only", "part of the", "problem."]}
              className="text-[clamp(2.5rem,6vw,5.5rem)]"
            />
          </div>
          <div className="self-end lg:col-span-5 lg:col-start-8">
            <div
              role="img"
              aria-label="Illustrative bar: roughly 60 percent process emissions, 30 percent fuel, 10 percent other"
              className="flex h-16 w-full"
            >
              <div className="w-[60%] bg-cobalt" />
              <div className="w-[30%] bg-navy" />
              <div className="w-[10%] bg-navy/20" />
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
              <li>■ Process (illustrative 60%)</li>
              <li>■ Fuel (30%)</li>
              <li>■ Other (10%)</li>
            </ul>
            <p className="mt-3 text-[11px] text-navy/70">
              Illustrative split for explanation only, not measured data.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="page">
          <Chapter n="03" title="The RURA process" />
          <Headline
            lines={["Four steps,", "one continuous flow."]}
            className="my-12 text-[clamp(2.25rem,6vw,5rem)]"
          />
          <ProcessSticky steps={processSteps} />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white py-24 md:py-40">
        <div className="page space-y-24 md:space-y-36">
          <div className="space-y-8">
            <Chapter n="04" title="Electrification" />
            <p className="max-w-xl text-lg">
              Electricity powers a stack that produces acid and base on demand.
              Output follows the available power.
            </p>
            <FlowDiagram
              nodes={[
                "Renewable power",
                "Electrochemical cell",
                "Acid and base streams",
              ]}
              caption="Simplified schematic, not to scale."
            />
          </div>
          <div className="space-y-8">
            <Chapter n="05" title="Material separation" />
            <p className="max-w-xl text-lg">
              Acid separates calcium from limestone and delivers CO₂ as a clean
              stream ready for capture.
            </p>
            <FlowDiagram
              nodes={[
                "Feed material",
                "Separation",
                "Calcium stream",
                "Recovered CO₂",
              ]}
              caption="Simplified schematic, not to scale."
            />
          </div>
          <div className="space-y-8">
            <Chapter n="06" title="Process integration" />
            <p className="max-w-xl text-lg">
              A defined interface connects RURA output to the existing kiln line
              and plant controls.
            </p>
            <FlowDiagram
              nodes={[
                "Existing kiln line",
                "Interface module",
                "Plant controls",
              ]}
              caption="Simplified schematic, not to scale."
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="page">
          <Chapter n="07" title="Pilot development" />
          <ol className="mt-12 grid gap-px bg-ink/10 md:grid-cols-3">
            {phases.map((p) => (
              <li key={p.n} className="bg-paper py-8 md:pr-8">
                <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                  {p.n}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-dark bg-navy py-24 text-white md:py-40">
        <div className="page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <Chapter n="08" title="Commercial pathway" />
          </div>
          <div className="lg:col-span-6">
            <SectionLabel dark>Pathway</SectionLabel>
            <Headline
              lines={["From pilot", "to production line."]}
              className="mt-6 text-[clamp(2.25rem,6vw,5rem)]"
            />
          </div>
          <ul className="space-y-5 text-white/85 lg:col-span-4 lg:col-start-9">
            <li>Retrofit-first designs that avoid plant shutdowns.</li>
            <li>Licensing and equipment supply for producers.</li>
            <li>Shared validation data with partners before each stage.</li>
          </ul>
        </div>
      </section>

      <div className="page pt-24">
        <Chapter n="09" title="Partners" />
      </div>
      <PartnerGrid />
      <div className="page">
        <Chapter n="10" title="Next step" />
      </div>
      <CTASection />
    </>
  );
}
