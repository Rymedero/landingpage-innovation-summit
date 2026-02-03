import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/University/EY Evento-211.jpg";
import inspiraLogo from "../../../assets/University/logo.png";

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
        El <span className="text-white font-normal">Reto InspiraVe</span> es mucho más que una competencia: es una oportunidad para que los jóvenes universitarios den vida a sus ideas y se conecten con el ecosistema empresarial e innovador del país.
A través de este desafío, los participantes desarrollarán proyectos capaces de <span className="text-white font-normal">resolver necesidades reales</span> y <span className="text-white font-normal">transformar sectores productivos clave</span>. Queremos impulsar tu creatividad, tu capacidad de innovación y tu talento para trabajar en equipo, porque sabemos que las soluciones con impacto nacen de mentes inspiradas.
        </p>
        <p className="text-gray-400 mb-4 text-justify">¿Estás listo para convertir tu idea en una realidad que marque la diferencia?
        </p>

         <p className="text-white mb-4 text-justify font-bold ">¡Únete al Reto InspiraVe y sé parte del cambio!</p>

    
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