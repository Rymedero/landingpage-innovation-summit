import { Footer } from "../../components/layouts/Footer";
import { InfoTabs } from "./components/InfoTabs";
import { motion } from "framer-motion";
import { Register } from "./components/Register";




function InfoReto() {

    return(

    <div>

     
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
     >
        <InfoTabs />
     </motion.div>
     < Register />
     < Footer />
     

     </div>
    );

}

export default InfoReto;