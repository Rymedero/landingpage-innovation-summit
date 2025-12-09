import { motion } from "framer-motion";
import { InfoTabsUniversity } from "./InfoTabsUniversity";
import { Footer } from "../../../../components/layouts/Footer";
import { Register } from "../../../InfoReto/components/Register";



function InfoRetoUniversity() {

    return(

    <div>

     
     <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
     >
        <InfoTabsUniversity />
     </motion.div>
     <Register/>
     < Footer />
     

     </div>
    );

}

export default InfoRetoUniversity;