import imag1 from "../../../assets/Inspira Universidades.jpg";
import { motion } from "framer-motion";
import ModalClose from "../../../components/ModalClose";




export function ImageTextInfoUni() {
  return (

   <div>
   <section id="home" className="mb-20 py-16 px-12 max-w-6xl mx-auto items-center">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 mb-10 md:mb-0" data-scroll="fadeIn">
          <h2 className="text-3xl text-white font-bold">
              ¡Prepárate para presentar tu{" "}
              <span className="text-primary">
                propuesta de emprendimiento!
              </span>
            </h2>

            <p className="mt-4 text-gray-400">
              Presenta una idea de negocio con impacto en uno de los sectores
              productivos estratégicos del país y sus megatendencias asociadas.
            </p>
          <div className="flex space-x-4 py-10">
            <ModalClose
              id="register-uni-modal"
              trigger={
                <button
                  type="button"
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 btn btn-primary mt-4 border-white border-2"
                >
                  ¡Regístrate ya!
                </button>
              }
            >
              <svg
                className="w-12 h-12 text-red-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-normal text-black mt-3 mb-2">
                ¡El periodo de registro ha finalizado!
              </h3>
              <p className="text-gray-500 mb-6">
                Te invitamos a estar atento a nuestras redes sociales para futuras convocatorias.
              </p>
            </ModalClose>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center" data-scroll="slideUp">
          <div className="relative">
            <motion.img 
                 src={imag1} 
                 alt="Digital innovation" 
                 className="rounded-xl shadow-2xl w-full max-w-lg"
                 animate={{ y: [0, -20, 0] }}
                 transition={{ 
                   duration: 4, 
                   repeat: Infinity, 
                   ease: "easeInOut" 
                 }}
            />
            <div className="absolute -bottom-6 -right-6  p-4 rounded-xl shadow-lg rounded-t-none border lg:rounded-lg bg-indigo-800/10  backdrop-blur">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-3">
                  <i className="fas fa-check text-green-500 text-xl"></i>
                </div>
                <div>
                  <p className="font-bold text-primary">Postula tu proyecto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div> 
  );
}
