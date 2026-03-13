import { useState } from "react";
import LogoDocGuia from "../../../../../assets/Logos/Logodocguia.png";
import LogoSonda from "../../../../../assets/Logos/Logosonda.png";
import LogoTesote from "../../../../../assets/Logos/Logotesote.png";
import LogoVenflow from "../../../../../assets/Logos/LogoVenflow.png";
import LogoDugu from "../../../../../assets/Logos/Logodugu.png";
import LogoMotogo from "../../../../../assets/Logos/LogoMotogo.png";
import LogoQuoota from "../../../../../assets/Logos/LogoQuoota.png";
import LogoRial from "../../../../../assets/Logos/LogoRial.png";
import LogoBluedata from "../../../../../assets/Logos/Logobluedata.png";

const logos = [
  {
    name: "DocGuia",
    image: LogoDocGuia,
    info: "Docguia es una plataforma de salud (HealthTech), diseñada para modernizar y simplificar la gestión de consultas ¿médicas en Venezuela mediante el uso de Inteligencia Artificial.[Ronda pre-seed abierta] Innoven",
  },
  {
    name: "Sonda",
    image: LogoSonda,
    info: "TSonda Labs es una plataforma venezolana de inteligencia social y análisis de datos que centraliza la gestión de redes sociales, ofrece métricas en tiempo real y optimiza estrategias de contenido y marketing digital basadas en datos.[Programa EmprendeTech]",
  },
  {
    name: "Tesote",
    image: LogoTesote,
    info: "Tesote es una plataforma de automatización financiera para empresas en Latinoamérica, diseñada para centralizar y automatizar los procesos de tesorería. La plataforma ofrece centralización bancaria, conciliación automática, integración con sistemas ERP y reportes personalizados. [Cerró ronda SEED] Próxima ronda Serie A.",
  },
  {
    name: "Venflow",
    image: LogoVenflow,
    info: "Venflow es una plataforma tecnológica diseñada para automatizar cobros recurrentes y suscripciones en Venezuela. Sus funciones incluyen infraestructura para pagos vía API, domiciliación digital, gestión de retención y un panel para el usuario.[Ganador Sambil Emprende] Independiente.Ronda pre-seed abierta.",
  },

  {
    name: "Duwu pet club",
    image: LogoDugu,
    info: "Duwu Pet Club es una plataforma líder de delivery y tienda en línea para mascotas. Funciona principalmente a través de su aplicación móvil, ofreciendo un ecosistema completo para dueños de perros, gatos y otras mascotas.[Cerró ronda pre-seed] Innoven",
  },

  {
    name: "Motogo",
    image: LogoMotogo,
    info: "MotoGo es la primera plataforma de motos por suscripción, diseñada para facilitar el acceso a la movilidad personal sin necesidad de créditos bancarios o pagos iniciales elevados.[Cerró ronda pre-seed] ImpulsaVC",
  },

  {
    name: "Quoota",
    image: LogoQuoota,
    info: "Quoota (también conocida como Quoota Capital) es una fintech venezolana que ofrece soluciones de microfinanciamiento y adelantos de salario para trabajadores de empresas afiliadas.[Pivca]",
  },

  {
    name: "Rial app",
    image: LogoRial,
    info: "Rial es una aplicación de finanzas personales diseñada específicamente para el entorno multimoneda de Venezuela. Permite a los usuarios llevar un control detallado de su dinero sin importar la moneda o plataforma donde se encuentre.[Pre-seed abierta] Independiente",
  },

  {
    name: "Bluu Data",
    image: LogoBluedata,
    info: "Bluu Data es una empresa tecnológica  que ofrece soluciones para convertir datos en reportes profesionales, gráficos y auditorías utilizando lenguaje natural.[Bootstrapping] Independiente",
  },
];

const loopedLogos = [...logos, ...logos];

export function CarouselLogos() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="w-full py-8">
      <style>
        {`
                    .logos-marquee {
                        overflow: hidden;
                        mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                    }

                    .logos-track {
                        display: flex;
                        width: max-content;
                        animation: slideLogos 28s linear infinite;
                    }

                    .logo-card {
                        perspective: 1200px;
                    }

                    .logo-card-inner {
                        position: relative;
                        width: clamp(170px, 17vw, 210px);
                        height: 210px;
                        transform-style: preserve-3d;
                        transition: transform 0.7s ease;
                    }

                    @media (max-width: 640px) {
                        .logo-card-inner {
                            width: 168px;
                            height: 205px;
                        }
                    }

                    .logo-card:hover .logo-card-inner {
                        transform: rotateY(180deg);
                    }

                    .logo-face {
                        position: absolute;
                        inset: 0;
                        border-radius: 16px;
                        backface-visibility: hidden;
                    }

                    .logo-face-back {
                        transform: rotateY(180deg);
                    }

                    .logo-face-back-content {
                        max-height: 100%;
                        overflow-y: auto;
                        padding-right: 2px;
                        scrollbar-width: thin;
                    }

                    @keyframes slideLogos {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }

                    @keyframes floatCard {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                `}
      </style>

      <div className="logos-marquee w-full max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="">
          <h1 className="text-4xl font-bold text-primary mb-8">Startups</h1>
          <h2 className="text-lg text-gray-400 mb-8">
            Las startups participantes —preseleccionadas por su tracción,
            propuesta de valor y alineación sectorial— presentan sus soluciones
            ante inversionistas en un formato de alto rigor que favorece la
            claridad, el análisis y la toma de decisiones.
          </h2>
          <div />

          <div
            className="logos-track gap-4 px-4"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {loopedLogos.map((logo, index) => (
              <article
                key={`${logo.name}-${index}`}
                className="logo-card"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                  animationDelay: `${(index % logos.length) * 0.35}s`,
                }}
              >
                <div className="logo-card-inner">
                  <div className="logo-face flex flex-col items-center justify-center gap-2 border border-white/15 bg-white/90 px-3 py-3 text-slate-800 shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                    <img
                      src={logo.image}
                      alt={`Logo ${logo.name}`}
                      className="h-14 w-auto object-contain sm:h-16"
                    />
                    <p className="text-[11px] font-semibold tracking-wide sm:text-xs">
                      {logo.name}
                    </p>
                  </div>

                  <div className="logo-face logo-face-back flex items-center justify-center border border-cyan-200/60 bg-gradient-to-br from-cyan-50 to-sky-100 px-2.5 py-3 text-center shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
                    <div className="logo-face-back-content">
                      <h3 className="text-[11px] font-bold text-slate-900 sm:text-xs">
                        {logo.name}
                      </h3>
                      <p className="mt-1 text-[9px] leading-tight text-slate-700 sm:text-[10px]">
                        {logo.info}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
