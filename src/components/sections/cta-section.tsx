import { IMG } from "@/data/images";
import { Button } from "../ui/button";
import { Headline } from "../ui/headline";
import { Parallax } from "../ui/parallax";
import { Photo } from "../ui/photo";

export function CTASection({
  lines = ["Ready to build", "what industry", "needs next?"],
}: {
  lines?: string[];
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-navy py-28 text-center text-white md:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-12 hidden w-44 md:block lg:w-64"
      >
        <Parallax offset={30}>
          <div className="relative aspect-[3/4]">
            <Photo img={IMG.concrete} sizes="256px" />
          </div>
        </Parallax>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 bottom-10 hidden w-40 md:block lg:w-56"
      >
        <Parallax offset={-30}>
          <div className="relative aspect-square">
            <Photo img={IMG.site} sizes="224px" />
          </div>
        </Parallax>
      </div>
      <div className="page relative">
        <Headline lines={lines} className="text-[clamp(2.5rem,8vw,7rem)]" />
        <div className="mt-12">
          <Button href="/contact" variant="light">
            Speak with RURA
          </Button>
        </div>
      </div>
    </section>
  );
}
