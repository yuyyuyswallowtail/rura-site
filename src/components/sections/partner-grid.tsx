import { partners } from "@/data/site";
import { Headline } from "../ui/headline";
import { SectionLabel } from "../ui/section-label";

export function PartnerGrid() {
  return (
    <section className="py-24 md:py-36">
      <div className="page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionLabel>Partners &amp; collaborators</SectionLabel>
          <Headline
            lines={["Working", "alongside", "industry."]}
            className="mt-6 text-5xl md:text-6xl"
          />
          <p className="mt-6 max-w-xs text-sm text-muted">
            All names shown are fictional placeholders for this design study.
            They do not represent real RURA partners.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:col-span-8">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-28 items-end border border-ink/10 bg-white p-4 text-xs font-semibold tracking-[0.16em]"
            >
              {p.name}
            </li>
          ))}
          <li className="flex h-28 items-end border border-dashed border-ink/20 p-4 text-[11px] text-muted">
            Fictional demo names
          </li>
        </ul>
      </div>
    </section>
  );
}
