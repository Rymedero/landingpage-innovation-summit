import logoEy from "../../../assets/EY_Logo_Beam_STFWC_Horizontal_Small_RGB_White_Yellow_EN.png";

export function FooterSummit() {
  return (
    <footer className="w-full mt-12 border-t border-white/20 bg-gray-900/35 backdrop-blur-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-3 sm:pt-7 sm:pb-3">
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <img
              src={logoEy}
              alt="Logo EY"
              className="h-8 w-auto object-contain sm:h-9"
            />
            <p
              className="text-xs sm:text-sm text-gray-300 leading-relaxed sm:max-w-xl"
              style={{ textAlign: "justify" }}
            >
              <span className="text-white font-semibold">Lo que viene</span>{" "}
              sera extraordinario. Lo que estamos construyendo juntos dara forma
              al <span className="text-white font-semibold">futuro </span>
              de las siguientes generaciones.
              <br />
              <span className="text-white font-semibold">
                InnovEYtion Summit
              </span>
              : el futuro se diseña, se prueba y se acelera aqui.
            </p>
          </div>

          <div className="border-t border-white/10 pt-4 text-center sm:text-left">
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-primary">
              ¿Quieres saber más?
            </p>
            <a
              href="mailto:innoveytionsummit@ey.com"
              className="mt-1 inline-block text-sm text-white/90 hover:text-white"
            >
              contacto@innoveytion-summit.com
            </a>
          </div>

          <div className="border-t border-white/10 mt-3 pt-3 max-w-2xl mx-auto">
            <p className="font-bold text-gray-400 text-center text-[11px] leading-relaxed">
              EY se refiere a la organización global, y puede referirse a una o
              más, de las firmas miembro de Ernst & Young Global Limited, cada
              una de las cuales es una entidad legal independiente. Ernst &
              Young Global Limited, una compañía británica limitada por
              garantía, no brinda servicios a los clientes.
            </p>
            <p className="text-primary text-center text-[11px] mt-1.5">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
