import { motion } from "framer-motion";
const video = "/Innovation Summit 2025.mp4";

const headingText = "¿Tienes una idea que cambiará el juego? ¡Es hora de ejecutarla!";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 24, rotateX: 20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 1.5 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="relative z-10 pt-48">
        <motion.h1
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hero-title text-3xl sm:text-3xl md:text-4xl font-extrabold mb-4"
        aria-label={headingText}
      >
        {headingText.split("").map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={letterVariants}
            className="inline-block"
            aria-hidden={char === " "}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      </div>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-lg max-w-2xl text-white"
      >
        El mejor evento de innovación y emprendimiento para estudiantes de educación media en Venezuela. Únete a nosotros para descubrir nuevas ideas, aprender de expertos y conectar con otros jóvenes emprendedores.
      </motion.p>
    </section>
  );
}
