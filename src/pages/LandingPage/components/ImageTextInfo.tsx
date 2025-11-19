import { motion } from "framer-motion";
import imag1 from "../../../assets/EY Evento-187.jpg";
import { CalendarDays, Clock, Monitor } from "lucide-react";





export function ImageTextInfo() {
  return (
    <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
    <div className="px-2 py-20 w-full flex justify-center">
    <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        
        <div className="lg:w-1/2">
            <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                style={{backgroundImage: `url(${imag1})`}}>
            </div>
        </div>
        <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg bg-white/80 backdrop-blur">
  <h2 className="text-3xl text-gray-800 font-bold">
    Participa en el evento <span className="text-indigo-600">Hazlo ahora</span>
  </h2>

  <p className="mt-4 text-gray-600">
    The "Eco-Tracker" project aims to create a web-based platform that encourages individuals
    to adopt sustainable lifestyle choices and actively contribute to environmental conservation.
    Users will have access to personalized tracking, education, and engagement tools to inspire
    eco-friendly habits in their daily lives.
  </p>

  {/* --- ICONOS --- */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">

    {/* Fecha de inscripciones */}
    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
      <CalendarDays className="w-10 h-10 text-indigo-600" />
      <h4 className="mt-3 font-semibold text-gray-800">Inscripciones</h4>
      <p className="text-sm text-gray-600">21 Feb — 15 Mar</p>
    </div>

    {/* Duración */}
    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
      <Clock className="w-10 h-10 text-indigo-600" />
      <h4 className="mt-3 font-semibold text-gray-800">Duración</h4>
      <p className="text-sm text-gray-600">8 semanas</p>
    </div>

    {/* Modalidad */}
    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition">
      <Monitor className="w-10 h-10 text-indigo-600" />
      <h4 className="mt-3 font-semibold text-gray-800">Modalidad</h4>
      <p className="text-sm text-gray-600">100% online</p>
    </div>
  </div>
</div>

        </div>
    </div>
    </motion.div>

  );
}