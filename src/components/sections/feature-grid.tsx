import { features } from "@/data/site";
import { Figure } from "../ui/figure";
import { Reveal } from "../ui/reveal";
import { SectionLabel } from "../ui/section-label";

const layouts = [
  {
    fig: "lg:col-span-7",
    txt: "lg:col-span-4 lg:col-start-9",
    aspect: "aspect-[4/3]",
  },
  {
    fig: "lg:order-2 lg:col-span-5 lg:col-start-7",
    txt: "lg:order-1 lg:col-span-4 lg:col-start-2",
    aspect: "aspect-[3/4]",
  },
  {
    fig: "lg:col-span-6",
    txt: "lg:col-span-4 lg:col-start-8",
    aspect: "aspect-[16/10]",
  },
];

export function FeatureGrid() {
  return (
    <div className="space-y-24 md:space-y-40">
      {features.map((f, i) => {
        const l = layouts[i % layouts.length];
        return (
          <div key={f.title} className="grid items-end gap-8 lg:grid-cols-12">
            <Figure img={f.image} aspect={l.aspect} className={l.fig} />
            <Reveal className={`${l.txt} pb-8`}>
              <SectionLabel>{f.label}</SectionLabel>
              <h3 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
                {f.title}
              </h3>
              <p className="mt-4 text-base text-muted">{f.text}</p>
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}
