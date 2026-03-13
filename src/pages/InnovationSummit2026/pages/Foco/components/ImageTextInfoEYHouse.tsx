import { Compass, Lightbulb, Link2, ShieldCheck } from "lucide-react";
import EYHouse from "../../../../../assets/DemoDay/EY house.jpg";

export function ImageTextInfoEYHouse() {
  return (
    <div
      id="ey-house"
      className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 lg:py-16 py-8 scroll-mt-28"
    >
      <h2 className="text-4xl tracking-tight font-bold leading-none">
        <span className="text-primary">EY</span>{" "}
        <span className="text-white">House</span>
      </h2>
      <section className="overflow-hidden  py-4 sm:py-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  <span className="text-white">Donde líderes convierten </span>
                  <span className="text-primary">ambición</span>
                  <br />
                  <span className="text-primary">en acción</span>
                </p>
                <p className="mt-6 max-w-lg  text-lg sm:text-lg leading-8 text-gray-400">
                  Es un lugar de encuentros de líderes empresariales, y de la
                  sociedad civil, que busca ser una plataforma para acelerar
                  sostenibilidad, innovación y generación de ideas que busquen
                  impuelsar el desarrollo de Venezuela a largo plazo, mediante
                  diálogo de alto nivel, co diseño de soluciones y articulación
                  de la sociedad civil.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <Link2
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      Conexiones que destraban decisiones:
                    </dt>
                    <dd className="inline text-gray-400">
                      {" "}
                      encuentros 1:1 y mesas de trabajo para promover proyectos
                      de la intención a la ejecución.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <Compass
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      Estrategia con enfoque sectorial:
                    </dt>

                    <dd className="inline text-gray-400">
                      {" "}
                      insights y casos para sectores clave del país —energía e
                      hidrocarburos, agroalimentos, industria y retail,
                      servicios financieros y telecomunicaciones— conectando
                      regulación, financiamiento y tecnología/IA responsable
                      para orientar hojas de ruta.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <Lightbulb
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      Co creación con impacto:{" "}
                    </dt>
                    <dd className="inline text-gray-400">
                      workshops y experiencias inmersivas que traducen desafíos
                      sectoriales en planes de acción, pilotos y alianzas con
                      empresas ancla y cadenas productivas.
                    </dd>
                  </div>

                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-primary">
                      <ShieldCheck
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-primary"
                      />
                      Legado y reputación:{" "}
                    </dt>
                    <dd className="inline text-gray-400">
                      más allá del evento, deja capacidades y alianzas con
                      propósito.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-14 lg:mt-24">
              <img
                src={EYHouse}
                alt="Product screenshot"
                className="w-full max-w-full rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:ml-0 lg:max-w-[48rem]"
                width="2432"
                height="1442"
              />

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
