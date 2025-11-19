import imag1 from "../../../assets/2.jpg";
import imag2 from "../../../assets/9.jpg";
import imag3 from "../../../assets/AA.jpg";
import imag4 from "../../../assets/EY Evento-100.jpg";
import imag5 from "../../../assets/EY Evento-500.jpg";
import imag6 from "../../../assets/EY Evento-513.jpg";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function Carousel() {


  const images = [imag3, imag2, imag1, imag4, imag5, imag6];

   const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <motion.div 
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
    <div className="relative w-full py-16  select-none">

      {/* Título */}
      <h2 className="text-4xl font-bold hero-title px-8 italic mb-14 tracking-tight">
        Innovation Summit <span className="text-white">2025</span>
      </h2>

      {/* Flecha izquierda */}
      <button
        onClick={scrollLeft}
        className="
          hidden md:flex
          absolute left-4 top-1/2 -translate-y-1/2 
          z-20 p-3 
          rounded-full 
          bg-white/10 hover:bg-white/20 
          transition 
          backdrop-blur-sm
        "
      >
        <ChevronLeft className="text-white" size={28} />
      </button>

      {/* Carrusel */}
      <div
        ref={scrollRef}
        className="
          flex gap-8 px-6 overflow-x-auto scrollbar-none
          scroll-smooth
        "
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="
              w-[350px] md:w-[340px] lg:w-[270px]
              aspect-[4/5]
              overflow-hidden 
              rounded-2xl 
              group 
              flex-shrink-0
            "
          >
            <img
              src={src}
              className="
                w-full h-full 
                object-cover 
                rounded-2xl
                transition-transform 
                duration-700 
                ease-out
                group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      <button
        onClick={scrollRight}
        className="
          hidden md:flex
          absolute right-4 top-1/2 -translate-y-1/2 
          z-20 p-3 
          rounded-full 
          bg-white/10 hover:bg-white/20 
          transition 
          backdrop-blur-sm
        "
      >
        <ChevronRight className="text-white" size={28} />
      </button>

    </div>
    </motion.div>
  );
}
