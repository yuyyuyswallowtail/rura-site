import Link from "next/link";
import { INSPIRATION_URL } from "@/lib/nav";

const company = [
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="on-dark bg-cobalt text-white">
        <div className="page grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <p className="max-w-xs text-sm text-white/90 lg:col-span-5">
            RURA is a fictional climate-technology company. This site is a
            design study built for a portfolio.
          </p>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-7">
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-white/80">
                Company
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-white/80">
                Connect
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                <li>LinkedIn (demo)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-white/80">
                Contact
              </h2>
              <p className="mt-5 text-sm">
                <a
                  href="mailto:hello@rura.example"
                  className="underline-offset-4 hover:underline"
                >
                  hello@rura.example
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-[11px] uppercase tracking-[0.14em] text-white/80">
                Location
              </h2>
              <p className="mt-5 text-sm">Calgary / Jakarta</p>
              <p className="mt-4 text-[10px] leading-relaxed tracking-wider text-white/80">
                6°12′ S<br />
                106°49′ E
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-ice">
        <div
          aria-hidden="true"
          className="select-none whitespace-nowrap pt-10 text-center text-[clamp(7rem,38vw,38rem)] font-semibold leading-[0.8] tracking-[-0.04em] text-navy/[0.07]"
        >
          RURA
        </div>
        <div className="page relative flex flex-col gap-3 pb-6 pt-10 text-xs text-navy md:flex-row md:items-center md:justify-between">
          <p>© 2026 RURA. All rights reserved.</p>
          <a
            href={INSPIRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Inspired by CURA Climate ↗
          </a>
          <p className="flex gap-5">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
