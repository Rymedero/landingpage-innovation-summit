import EyFour from "../../../../../assets/EyFour.png";
import ImageFour from "../../../../../assets/Four.png";

export function EyFourSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-14 w-full">
      <div id="ey-four" className="relative scroll-mt-28 pt-12 sm:pt-14 md:pt-16">
        <div className="absolute left-4 sm:left-6 md:left-8 -top-1 sm:-top-2 z-20 rounded-lg bg-gray-900 px-2 sm:px-3 py-1">
          <img
            className="h-20 sm:h-24 md:h-28 w-auto"
            src={EyFour}
            alt="EY Four"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-center rounded-2xl border-2 border-primary/30 bg-gray-900/60 backdrop-blur-sm p-5 pt-14 sm:p-8 sm:pt-8">
        <div className="lg:pr-2">
          <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
            <span className="text-white">El futuro</span>{" "}
            <span className="text-primary">se decide hoy</span>
          </h3>
          <p className="mt-4 text-gray-300 leading-8 text-base sm:text-lg">
            Four Futures es una experiencia inmersiva creada y facilitada por expertos en ciencia climática, con una interfase mejorada por IA

          </p>
          <p className="mt-4 text-gray-400 leading-7 text-sm sm:text-base">
            La experiencia nos lleva a conocer las implicaciones de nuestras actuales prácticas, al tiempo que escuchamos y conectamos emocionalmente con las personas que se verían afectadas en el futuro.
El objetivo es empoderarnos para pensar con audacia sobre sobre nuestro rol y el de nuestra organización, para alcanzar el equilibrio entre el florecimiento humano y planetario.

          </p>
        </div>

        <div className="w-full">
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">
            <span className="text-primary">Una mirada al </span> futuro basada en evidencia científica
          </h4>
          <div className="rounded-xl border border-primary/40 overflow-hidden bg-black/30">
            <img
              src={ImageFour}
              alt="Four Futures"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}