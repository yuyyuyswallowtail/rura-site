import { ContactForm } from "@/components/contact/contact-form";
import { Headline } from "@/components/ui/headline";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Contact RURA",
  "Speak with the RURA team about industrial decarbonization pilots, partnerships and research (demo form).",
  "/contact",
);

export default function ContactPage() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="flex flex-col justify-between gap-16 px-5 py-16 md:px-8 lg:px-10 lg:py-24">
        <div>
          <Headline
            as="h1"
            lines={["Speak with the", "RURA team"]}
            className="text-[clamp(2.5rem,6.5vw,5.5rem)]"
          />
          <p className="mt-8 max-w-md text-lg">
            If you are a producer, developer, investor or research partner
            evaluating lower-carbon pathways, RURA can walk you through a
            retrofit-ready approach.
          </p>
        </div>
        <dl className="space-y-6 text-sm">
          <div>
            <dt className="text-muted">General inquiries</dt>
            <dd>
              <a
                href="mailto:hello@rura.example"
                className="underline underline-offset-4"
              >
                hello@rura.example
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Studios (fictional)</dt>
            <dd>Calgary / Jakarta</dd>
          </div>
          <div>
            <dt className="text-muted">Socials</dt>
            <dd>LinkedIn (demo)</dd>
          </div>
        </dl>
      </div>
      <div className="bg-mist px-5 py-12 md:px-8 lg:px-12 lg:py-24">
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
