import {
  ArrowRight,
  Gift,
  HandHeart,
  Lightbulb,
  MapPinned,
  Rocket,
  Sparkles,
} from "lucide-react";

const routes = [
  { icon: Lightbulb, label: "Idea valiosa" },
  { icon: HandHeart, label: "Impacto social" },
  { icon: Rocket, label: "Accion real" },
];

export function GiftIdeaVenezuela() {
  return (
    <section
      id="regalale-una-idea"
      className="w-full scroll-mt-28 overflow-hidden py-8 lg:py-16"
      aria-label="Regalale una idea a Venezuela"
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative w-full">
        <div className="pointer-events-none absolute -left-12 top-0 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-6 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/90">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Activación Especial
            </p>

            <h2 className="mt-4 text-4xl tracking-tight font-bold leading-none">
              <span className="text-white">Regálale una idea a </span>
              <span className="text-primary">Venezuela</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100/90 sm:text-lg">
              Si tienes una propuesta que puede encender oportunidades, este
              espacio es para ti. Ven con tu visión, conecta con líderes y
              ayúdanos a construir soluciones que se sientan en todo el país.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-slate-100/90">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <Gift className="h-4 w-4 text-amber-300" aria-hidden="true" />
                Innovación con propósito
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <MapPinned className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                Impacto nacional
              </span>
            </div>

            <a
              href="/regalale-una-idea"
              className="btn btn-primary border-2 border-white px-6 group mt-8 inline-flex items-center gap-3 transition-transform duration-300 hover:-translate-y-0.5"
              aria-label="Ir al registro"
            >
              Sumarme ahora
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute left-8 right-8 top-1/2 hidden -translate-y-1/2  lg:block" />

            <div className="relative grid gap-5 sm:grid-cols-3 sm:gap-3 lg:gap-6">
              {routes.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-3"
                >
                  <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-amber-200 shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_10px_30px_-15px_rgba(251,191,36,0.85)] backdrop-blur-sm">
                    <Icon className="h-9 w-9" aria-hidden="true" />
                  </span>
                  <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-white">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
