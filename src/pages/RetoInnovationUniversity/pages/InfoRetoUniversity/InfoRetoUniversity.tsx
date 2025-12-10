import { motion } from "framer-motion";
import { InfoTabsUniversity } from "./InfoTabsUniversity";
import { Footer } from "../../../../components/layouts/Footer";
import { RegisterUni } from "./RegisterUni";



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
     <RegisterUni/>
     < Footer />
     

     </div>
    );

}

export default InfoRetoUniversity;