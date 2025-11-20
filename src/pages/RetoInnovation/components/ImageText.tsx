import { motion } from "framer-motion";
import heroImg from "../../../assets/Captura de pantalla 2025-11-17 102442.png";

export function ImageTextSection() {
return (

  <div className="">
          
      <section className="pt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">


        <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <h1 className="text-sm mb-4 text-gray-400">Kurios EY Competition</h1>
        <h2 className="hero-title text-4xl mb-4">Sobre Kurios Competition</h2>
        <h2 className="text-4xl mb-4 text-white font-bold">2026</h2>
        <p className="text-gray-400 mb-4 text-justify">
        El presente instructivo tiene como finalidad preparar a los equipos participantes en el Reto InnovEYtion, una competencia intercolegial de emprendimiento que busca impulsar y fomentar el espíritu emprendedor en estudiantes de educación media (4to y 5to año), conectándolos con el ecosistema empresarial e innovador, a través de una competencia intercolegial que los desafíe a crear ideas de negocio capaces de transformar realidades y resolver necesidades clave de los sectores productivos de Venezuela.
        </p>
        <button className="btn btn-primary mt-4 border-white border-2">Saber más</button>
        </motion.div>

        <motion.img
        src={heroImg}
        alt="Imagen descriptiva"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-2xl shadow-lg w-full"
        />
      </section>
  </div>
);
}