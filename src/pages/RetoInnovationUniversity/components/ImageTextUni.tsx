import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/University/EY Evento-211.jpg";
import inspiraLogo from "../../../assets/Logos INSPIRA-02.png";

export function ImageTextUni() {
return (

  <div>
          
      <section className="pt-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-24">


       <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <div className="flex items-center gap-2 mb-4">
          <h2 className="hero-title text-5xl">Reto </h2>
          <img src={inspiraLogo} alt="Inspira Logo" className="h-24 object-contain" />
        </div>
        <h2 className="text-xl mb-4 text-white">Interuniversitario</h2>
        <h2 className="text-4xl mb-4 text-white font-bold">2026</h2>
        <p className="text-gray-400 mb-4 text-justify">
        El Reto InspiraVe, es una competencia intercolegial de emprendimiento que busca impulsar y fomentar el espíritu emprendedor en estudiantes universitarios, conectándolos con el ecosistema empresarial e innovador, a través de una competencia intercolegial que los desafía a crear ideas de negocio capaces de transformar realidades y resolver necesidades clave de los sectores productivos de Venezuela.
        </p>
        <Link to="/info-reto-university">
          <button className="btn btn-primary mt-4 border-white border-2">Saber más</button>
        </Link>
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