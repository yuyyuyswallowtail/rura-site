import Link from "next/link";
import { CTASection } from "@/components/sections/cta-section";
import { Figure } from "@/components/ui/figure";
import { Headline } from "@/components/ui/headline";
import { ImageCaption } from "@/components/ui/image-caption";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { IMG } from "@/data/images";
import { articles, team } from "@/data/site";
import { formatDate } from "@/lib/format";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "About RURA — Industrial Climate Technology",
  "RURA is a fictional climate-technology company combining deep technical expertise with an industrial perspective.",
  "/about",
);

const principles = [
  [
    "Start with the plant",
    "Every design begins with how a real facility operates today.",
  ],
  [
    "Prove it in stages",
    "Lab, pilot, demonstration: each stage has clear pass criteria.",
  ],
  ["Share the data", "Partners see results early, including the awkward ones."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page pt-3">
        <div className="relative min-h-[60svh] overflow-hidden bg-navy md:min-h-[75svh]">
          <Photo img={IMG.worker} priority sizes="100vw" />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="on-dark relative flex min-h-[60svh] items-end p-5 text-white md:min-h-[75svh] md:p-10">
            <Headline
              as="h1"
              lines={[
                "Deep technical expertise.",
                "Built for industrial scale.",
              ]}
              className="text-[clamp(2rem,6.2vw,5.5rem)]"
            />
          </div>
        </div>
        <ImageCaption as="p" img={IMG.worker} />
      </section>

      <section className="py-28 md:py-44">
        <div className="page text-center">
          <SectionLabel>Why RURA exists</SectionLabel>
          <Headline
            lines={["RURA exists to make", "industrial change", "deployable."]}
            className="mt-8 text-[clamp(2rem,5.5vw,4.5rem)]"
          />
        </div>
        <div className="page mt-20 grid gap-4 lg:grid-cols-12">
          <Figure
            img={IMG.lab2}
            aspect="aspect-[4/5]"
            className="lg:col-span-5"
          />
          <div className="flex flex-col justify-center bg-mist p-8 md:p-14 lg:col-span-7">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              The founders came from electrochemistry and plant engineering and
              kept meeting the same gap: good ideas that no plant could install.
            </p>
            <p className="mt-8 border-t border-ink/20 pt-8 text-sm text-muted">
              RURA is a fictional company created for a design study. Its story
              is original content.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ice py-40 text-navy md:py-72">
        <div className="page">
          <SectionLabel>The industrial problem</SectionLabel>
          <Reveal>
            <p className="mt-8 max-w-4xl text-[clamp(1.75rem,4.2vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Heavy industry cannot be switched off while it is rebuilt. The
              path to lower emissions has to run through the plants that exist
              today.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-40">
        <div className="page">
          <SectionLabel>Our approach</SectionLabel>
          <Headline
            lines={["Decarbonizing", "at the source."]}
            className="mb-14 mt-6 text-[clamp(2.25rem,6vw,5rem)]"
          />
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="on-dark flex min-h-[320px] flex-col justify-end bg-cobalt p-8 text-white lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                Focused on process emissions
              </h3>
            </div>
            <div className="bg-mist p-8 lg:col-span-5">
              <p className="text-sm text-muted">
                RURA targets the part of industrial emissions that comes from
                the chemistry itself and designs hardware that fits the plants
                already running it.
              </p>
            </div>
            <div className="on-dark bg-navy p-8 text-white lg:col-span-4">
              <p className="text-xl font-medium leading-snug">
                The ambition is not incremental improvement, but a credible
                route to deep reductions.
              </p>
            </div>
            <Figure
              img={IMG.builder}
              aspect="aspect-[16/9]"
              className="lg:col-span-8"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 py-24 md:py-36">
        <div className="page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>How we work</SectionLabel>
          </div>
          <ol className="lg:col-span-8">
            {principles.map(([t, d], i) => (
              <li
                key={t}
                className="grid gap-2 border-t border-ink/20 py-6 md:grid-cols-[4rem_1fr_1.2fr]"
              >
                <span className="text-xs tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight">{t}</h3>
                <p className="text-sm text-muted">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="page grid gap-12 md:grid-cols-2">
          <div>
            <SectionLabel>Scientific depth</SectionLabel>
            <p className="mt-6 max-w-md text-lg">
              Electrochemistry, materials science and process modelling sit in
              one team, so questions are answered with measurements.
            </p>
          </div>
          <div>
            <SectionLabel>Industrial perspective</SectionLabel>
            <p className="mt-6 max-w-md text-lg">
              Plant operators and engineers review designs early, so maintenance
              and operability are not afterthoughts.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-40">
        <div className="page">
          <SectionLabel>Leadership</SectionLabel>
          <Headline
            lines={["Scientific depth.", "Industrial perspective."]}
            className="mb-6 mt-6 text-[clamp(2rem,5vw,4.5rem)]"
          />
          <p className="mb-14 max-w-md text-sm text-muted">
            Fictional team. Portraits are stock photos used as placeholders.
          </p>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name}>
                <Figure
                  img={m.image}
                  aspect="aspect-[3/4]"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {m.name}
                </h3>
                <p className="text-sm text-muted">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-mist py-24 md:py-36">
        <div className="page grid gap-10 lg:grid-cols-12">
          <Headline
            lines={["Industry", "engagement &", "recognition"]}
            className="text-[clamp(2rem,4.5vw,4rem)] lg:col-span-5"
          />
          <ul className="lg:col-span-7">
            {articles.slice(0, 3).map((a) => (
              <li key={a.slug} className="border-t border-ink/20 py-5">
                <Link
                  href={`/press/${a.slug}`}
                  className="group flex items-start justify-between gap-6"
                >
                  <span>
                    <time dateTime={a.date} className="text-xs text-muted">
                      {formatDate(a.date)}
                    </time>
                    <span className="mt-1 block text-lg font-semibold tracking-tight group-hover:underline">
                      {a.title}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        lines={["An upstream approach", "to industrial", "decarbonization"]}
      />
    </>
  );
}
