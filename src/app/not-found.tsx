import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="page py-32 md:py-48">
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] md:text-8xl">
        Page not found.
      </h1>
      <div className="mt-10">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
