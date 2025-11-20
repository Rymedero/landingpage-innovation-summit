import { motion } from "framer-motion";
import imag1 from "../../../assets/Inspira imagen.png";

export function ImageTextInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="px-2 py-20 w-full flex justify-center mb-20">
        <div className="lg:mx-8 lg:flex lg:max-w-5xl rounded-lg">
          <div className="lg:w-1/2">
            <div
              className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
              style={{ backgroundImage: `url(${imag1})` }}
            ></div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg bg-indigo-800/10  backdrop-blur">
            <h2 className="text-3xl text-white font-bold">
              ¡Prepárate para presentar tu{" "}
              <span className="text-indigo-600">
                propuesta de emprendimiento!
              </span>
            </h2>

            <p className="mt-4 text-gray-400">
              Presenta una idea de negocio con impacto en uno de los sectores
              productivos estratégicos del país y sus megatendencias asociadas.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="https://statics.teams.cdn.office.net/evergreen-assets/safelinks/2/atp-safelinks.html"
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition shadow-lg"
              >
                ¡Regístrate Ya!
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
