"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";
import { NAV_LINKS } from "@/lib/nav";
import { Button } from "../ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const list = {
    closed: {},
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };
  const item = {
    closed: { opacity: 0, y: reduce ? 0 : 40 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.15 : 0.7, ease: EASE },
    },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <div className="page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="RURA home"
          className="text-2xl font-semibold tracking-[0.2em]"
        >
          RURA
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center border border-ink/10 bg-white px-1.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className="relative flex h-10 items-center gap-2 px-3 text-[13px] after:absolute after:inset-x-3 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-ink after:transition-transform hover:after:scale-x-100"
                >
                  {isActive(l.href) && (
                    <span aria-hidden="true" className="size-1.5 bg-cobalt" />
                  )}
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Speak with us</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto flex h-10 items-center gap-2 border border-ink/20 bg-white px-3 text-[13px] font-medium md:hidden"
        >
          <Menu aria-hidden="true" className="size-4" />
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="on-dark fixed inset-0 z-[60] flex flex-col bg-navy text-white"
            initial={
              reduce
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            animate={
              reduce
                ? { opacity: 1 }
                : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
            }
            exit={
              reduce
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            transition={{ duration: reduce ? 0.15 : 0.6, ease: EASE }}
          >
            <div className="page flex h-16 shrink-0 items-center justify-between">
              <span className="text-2xl font-semibold tracking-[0.2em]">
                RURA
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 items-center gap-2 border border-white/40 px-3 text-[13px] font-medium"
              >
                <X aria-hidden="true" className="size-4" />
                Close
              </button>
            </div>
            <nav
              aria-label="Mobile"
              className="page flex flex-1 flex-col justify-center"
            >
              <motion.ul
                variants={list}
                initial="closed"
                animate="open"
                className="space-y-2"
              >
                {[...NAV_LINKS, { href: "/contact", label: "Contact" }].map(
                  (l) => (
                    <motion.li key={l.href} variants={item}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(l.href) ? "page" : undefined}
                        className="flex items-center gap-3 py-1 text-[clamp(2.5rem,13vw,4.5rem)] font-semibold leading-none tracking-[-0.04em]"
                      >
                        {isActive(l.href) && (
                          <span
                            aria-hidden="true"
                            className="size-3 bg-cobalt"
                          />
                        )}
                        {l.label}
                      </Link>
                    </motion.li>
                  ),
                )}
              </motion.ul>
            </nav>
            <p className="page pb-8 text-[10px] uppercase tracking-[0.14em] text-white/70">
              RURA / Industrial systems · 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
