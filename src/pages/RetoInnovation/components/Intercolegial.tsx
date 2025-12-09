import { motion } from "framer-motion";

export function Intercolegial() {
  return (
    <motion.div 
      className="p-4 rounded-xl shadow-lg border lg:rounded-lg bg-indigo-800/10 backdrop-blur mt-24 mx-auto max-w-fit"
      animate={{ x: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center">
        <div>
          <p className="font-bold text-primary">Postula tu proyecto</p>
        </div>
      </div>
    </motion.div>
  );
}
