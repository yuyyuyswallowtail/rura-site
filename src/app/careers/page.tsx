import { FlaskConical, Network, Wrench } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Figure } from "@/components/ui/figure";
import { Headline } from "@/components/ui/headline";
import { ImageCaption } from "@/components/ui/image-caption";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { IMG } from "@/data/images";
import { jobs } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Careers at RURA — Build Industrial Technology",
  "Fictional open roles at RURA, a climate-technology company building deployable industrial decarbonization technology.",
  "/careers",
);

const principles = [
  {
    icon: FlaskConical,
    title: "Evidence First",
    text: "Decisions rest on measurement, structured iteration and technical validation.",
  },
  {
    icon: Network,
    title: "Cross-Disciplinary",
    text: "Chemists, mechanical and process engineers work in the same room, on the same problem.",
  },
  {
    icon: Wrench,
    title: "Practical Execution",
    text: "We balance ambition with realism and design for pilots that can scale.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page pt-3">
        <div className="relative min-h-[60svh] overflow-hidden bg-navy md:min-h-[75svh]">
          <Photo img={IMG.factory} priority sizes="100vw" />
          <div className="absolute inset-0 bg-navy/50" />
          <div className="on-dark relative flex min-h-[60svh] items-end p-5 text-white md:min-h-[75svh] md:p-10">
            <Headline
              as="h1"
              lines={["Build technology", "that industry", "can deploy"]}
              className="text-[clamp(2.25rem,7vw,6.5rem)]"
            />
          </div>
        </div>
        <ImageCaption as="p" img={IMG.factory} />
      </section>

      <section className="py-28 md:py-44">
        <div className="page text-center">
          <SectionLabel>Work on a problem that matters</SectionLabel>
          <Headline
            lines={["Work on a problem", "that matters"]}
            className="mt-8 text-[clamp(2.25rem,6vw,5rem)]"
          />
        </div>
        <div className="page mt-20 grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-mist p-8 md:p-14">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              Industrial materials hold up modern life, and their emissions are
              a hard engineering challenge. RURA builds credible, scalable
              answers.
            </p>
            <p className="mt-8 border-t border-ink/20 pt-8 text-sm text-muted">
              A career here means complex science with tangible, long-term
              impact. RURA is fictional; these roles are demo content.
            </p>
          </div>
          <Figure img={IMG.concrete} aspect="aspect-[4/5]" />
        </div>
      </section>

      <section className="bg-mist py-24 md:py-36">
        <div className="page">
          <SectionLabel>How we work</SectionLabel>
          <Headline
            lines={["Structured,", "collaborative, and", "evidence-driven"]}
            className="mb-16 mt-6 text-[clamp(2.25rem,6vw,5rem)]"
          />
          <ul className="grid gap-3 md:grid-cols-3">
            {principles.map((p) => (
              <li
                key={p.title}
                className="flex min-h-[280px] flex-col justify-between bg-white p-6"
              >
                <span className="flex size-10 items-center justify-center border border-cobalt text-cobalt">
                  <p.icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-28 text-center md:py-44">
        <div className="page">
          <SectionLabel>Join the team</SectionLabel>
          <Reveal>
            <p className="mx-auto mt-8 max-w-3xl text-[clamp(1.5rem,3.5vw,3rem)] font-semibold leading-tight tracking-[-0.03em]">
              Interested in helping RURA make deployable decarbonization
              technology?
            </p>
            <div className="mt-10">
              <Button href="#roles">View open roles</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="roles" className="scroll-mt-24 pb-28 md:pb-44">
        <div className="page">
          <h2 className="mb-8 text-[11px] uppercase tracking-[0.14em] text-muted">
            Open roles ({jobs.length})
          </h2>
          <ul>
            {jobs.map((j) => (
              <li
                key={j.title}
                className="grid gap-4 border-t border-ink/20 py-8 md:grid-cols-12 md:items-center"
              >
                <h3 className="text-2xl font-semibold tracking-tight md:col-span-4">
                  {j.title}
                </h3>
                <p className="text-sm text-muted md:col-span-3">
                  {j.location} · {j.type}
                </p>
                <p className="text-sm md:col-span-3">{j.description}</p>
                <div className="md:col-span-2 md:justify-self-end">
                  <Button
                    href={`mailto:careers@rura.example?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
                    variant="outline"
                  >
                    Apply
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
