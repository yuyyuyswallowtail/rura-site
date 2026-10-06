import { PressArchive } from "@/components/press/press-archive";
import { Headline } from "@/components/ui/headline";
import { articles } from "@/data/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "RURA News & Press",
  "Latest news, announcements, research and partnerships from RURA (fictional demo content).",
  "/press",
);

export default function PressPage() {
  return (
    <>
      <section className="page pb-12 pt-16 md:pb-16 md:pt-28">
        <Headline
          as="h1"
          lines={["Latest news & updates", "from RURA"]}
          className="text-[clamp(2.25rem,7vw,6rem)]"
        />
      </section>
      <section className="page pb-28 md:pb-44">
        <PressArchive articles={articles} />
      </section>
    </>
  );
}
