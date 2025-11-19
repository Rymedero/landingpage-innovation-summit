import Tabs from "../../../components/Tabs";



export function InfoTabs() {
  return (
    <div className="">
        <h2 className="hero-title text-3xl font-bold text-center py-8">¡Todo lo que debes saber sobre la competencia!</h2>
      <Tabs
        tabs={[
          { label: "Solución y problema", 
            content: 
            <div className=" py-12 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 ">
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium text-gray-900 dark:text-gray-100">
                        ¿El equipo identifica una necesidad o dolor real y significativo?
                        </span>
                    </div>
                    </div>

                    <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        ¿Se identifica allí un potencial impacto?
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Propuesta de Valor: ¿La solución es única, innovadora y resuelve efectivamente el problema planteado?
                    </p>
                    </div>
                </div>
                </div> },
          { label: "Modelo de negocio básico", content: 
          <div className=" py-12 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 ">
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium text-gray-900 dark:text-gray-100">
                        ¿Tienen una idea clara y simple de la implementación?
                        </span>
                    </div>
                    </div>

                    <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        ¿Qué tan viable es la solución que proponen?
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                       Pasos siguientes: ¿El equipo tiene un plan inicial para el corto plazo? ¿Muestran conocimiento de los recursos necesarios?
                    </p>
                    </div>
                </div>
                </div> 
        },
          { label: "Habilidades blandas", content: 
          <div className=" py-12 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 ">
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium text-gray-900 dark:text-gray-100">
                        ¿Se evidencia una distribución clara de roles?
                        </span>
                    </div>
                    </div>

                    <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Comunicación y persuasión:
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      ¿El pitch es claro, conciso, emocionante y profesional? ¿Responden bien las preguntas del jurado?
                    </p>
                    </div>
                </div>
                </div> 
        
        },
          { label: "Impacto y sostenibilidad", content: 
          <div className=" py-12 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 ">
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium text-gray-900 dark:text-gray-100">
                       Visión | Impacto social/ambiental
                        </span>
                    </div>
                    </div>

                    <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        ¿El proyecto tiene un efecto positivo en la comunidad o el entorno?
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Escalabilidad: ¿El modelo podría crecer más allá del colegio o la ciudad?
                    </p>
                    </div>
                </div>
                </div> 
        
        },
          { label: "Jurado", content: 
          <div className=" py-12 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 ">
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                   
                    </div>
                    <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                      El jurado está conformado por profesionales multidisciplinarios, con puntos de vista diversos y con capacidad de aportar perspectivas del mundo real.
                    </p>
                    </div>

                    <div className="mt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                     Fase preliminar (Demo day): emprendedores wave, empresarios, profesores de las universidades aliadas (todos con enfoque en economía/negocios).
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                     ●Fase final:

o 1 Empresario con experiencia: para evaluar la viabilidad comercial y la ambición.

o 1 Inversor: para evaluar posibilidad de inversión en etapas futuras de desarrollo.

o 1 Experto en Mercadeo: para evaluar Propuesta de Valor, presentación y marca.

1 Experto en Impacto Social (CSR): para evaluar visión, impacto y sostenibilidad.
                    </p>
                    </div>
                </div>
                </div>  
        },
          
        ]}
      />
    </div>
  );
}