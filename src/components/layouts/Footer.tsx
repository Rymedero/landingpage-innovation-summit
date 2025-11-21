import { motion } from "framer-motion";
import logo1 from "../../assets/EY_Logo_Beam_STFWC_Horizontal_Small_RGB_White_Yellow_EN.png";
import logo2 from "../../assets/Logos INSPIRA-02.png";
import logo3 from "../../assets/Kuriosb-removebg-preview.png";
import logo4 from "../../assets/LogoInnovation.png";
import { Link } from "react-router-dom";


export function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-transparent text-primary-content  border-t border-white border-12">
      <aside className="flex flex-col items-center gap-0">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        < Link to="https://www.ey.com/es_ve">    
          <motion.img
            src={logo1}
            alt="Logo 1"
            className="w-48 h-48 object-contain mb-9 px-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          </ Link>

        
          <motion.img
            src={logo4}
            alt="Logo 2"
            className="w-48 h-48 object-contain px-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
         

         <Link to="https://www.kuriosedu.com/">
          <motion.img
            src={logo3}
            alt="Logo 3"
            className="w-56 h-56 object-contain px-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          </Link>

          <motion.img
            src={logo2}
            alt="Logo 4"
            className="w-56 h-56 object-contain px-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

    <div className="-mt-12 px-4 py-6 max-w-2xl mx-auto">
        <p className="font-bold text-gray-400 text-center text-xs">
         EY se refiere a la organización global, y puede referirse a una o más, de las firmas miembro de Ernst & Young Global Limited, cada una de las cuales es una entidad legal independiente. Ernst & Young Global Limited, una compañía británica limitada por garantía, no brinda servicios a los clientes.
        </p>
        <p className="text-primary text-center text-xs mt-2">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
    </div>
      </aside>
    </footer>
  );
}
