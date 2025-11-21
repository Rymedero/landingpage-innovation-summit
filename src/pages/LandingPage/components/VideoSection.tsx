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
    <section className="relative min-h-screen flex flex-col justify-end items-center text-center px-6 overflow-hidden pb-10">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 blur-[1px]"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0" />

      <div className="relative z-10 mb-6">
        <motion.h1
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hero-title text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl text-white [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]"
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
        className="text-xl md:text-2xl max-w-3xl text-white font-medium drop-shadow-lg relative z-10"
      >
        El mejor evento de innovación y emprendimiento para estudiantes de educación media en Venezuela. Únete a nosotros para descubrir nuevas ideas, aprender de expertos y conectar con el ecosistema emprendedor.
      </motion.p>
    </section>
  );
}
