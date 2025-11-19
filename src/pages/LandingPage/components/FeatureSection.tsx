import { motion } from "framer-motion";


export function FeaturesSection() {

return (
        <section className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
            <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
            >
            Características
            </motion.h2>

            <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            >
                <div className="grid md:grid-cols-3 gap-8">
                {["Velocidad", "Seguridad", "Diseño Moderno"].map((item, i) => (
                    <div key={i} className="card bg-base-200 shadow-xl p-6 text-center rounded-2xl">
                    <div className="text-5xl mb-4">⚡</div>
                    <h3 className="text-xl font-bold mb-2">{item}</h3>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                  
                ))}
                </div>
                </motion.div>  
        </section>
);
}