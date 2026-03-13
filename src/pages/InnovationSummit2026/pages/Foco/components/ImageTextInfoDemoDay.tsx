import Demoday from "../../../../../assets/DemoDay/400 px X 400 px.jpg";

export function ImageTextInfoDemoDay() {
  return (
    <div
      id="demo-day"
      className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 lg:py-16 py-8 scroll-mt-28"
    >
      <div className="mb-10">
        <h2 className="text-4xl tracking-tight font-bold">
          <span className="text-white">Demo</span>{" "}
          <span className="text-primary">Day</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="mr-0 md:mr-8 md:mb-0 mt-4 md:mt-4">
          <img
            className="w-1/2 md:w-full mx-auto"
            src={Demoday}
            alt="Demo Day"
          />
        </div>

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-primary border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6 text-white">
                ¿ Qué es <span className="text-primary">el DEMO DAY ?</span>
              </h3>
              <p className="text-sm text-gray-400">
                Es la sesión privada del InnovEYtion Summit 2026 desarrollada en
                alianza entre EY Venezuela & Innoven by Square One. Dedicado
                exclusivamente a conectar a un grupo curado de startups de alto
                potencial con una selección igualmente curada de inversionistas,
                fondos de capital, family offices, corporate ventures y ángeles
                estratégicos.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-primary border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6 text-white">
                ¿Para qué está{" "}
                <span className="text-primary">diseñado este espacio?</span>
              </h3>
              <p className="text-sm text-gray-400">
                Este espacio de acceso restringido ha sido diseñado como un
                entorno de valor elevado donde la innovación se encuentra con el
                capital para activar nuevas oportunidades de crecimiento.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-primary border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6 text-white">
                ¿Qué ofrece el <span className="text-primary">DEMO DAY?</span>
              </h3>
              <p className="text-sm text-gray-400">
                {" "}
                El DEMO DAY ofrece diálogos especializados, rondas 1:1 privadas
                y espacios estratégicos que permiten evaluar oportunidades
                reales de inversión, establecer alianzas corporativas, explorar
                pilotos y abrir puertas a nuevas rutas de financiamiento.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-primary border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6 text-white">
                ¿Qué busca<span className="text-primary"> el DEMO DAY?</span>
              </h3>
              <p className="text-sm text-gray-400">
                Busca, en esencia, activar relaciones estratégicas, dinamizar el
                pipeline de oportunidades y consolidar un ecosistema donde la
                innovación venezolana pueda conectarse con los recursos
                necesarios para escalar con propósito y visión de futuro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
