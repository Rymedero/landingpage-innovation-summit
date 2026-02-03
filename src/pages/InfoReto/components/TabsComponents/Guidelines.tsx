


export function Guidelines() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex items-center justify-center ">
      <div className="space-y-6">
  
        <div className=" p-2 rounded-2xl shadow-sm space-y-3">
          <h2 className="font-semibold text-lg text-primary">1. Tiempo</h2>

          <ul className="space-y-2">
            <li className="px-4 py-2 text-gray-400">
              ● Cada equipo dispondrá de 5 minutos cronometrados para presentar
              su pitch.
            </li>
            <li className="px-4 py-2 text-gray-400">
              ● Solo un integrante del equipo será el encargado de realizar el
              pitch. El resto del equipo debe estar atento y preparado para
              intervenir durante la ronda de preguntas del jurado.
            </li>
          </ul>
        </div>

     
        <div className=" p-2 rounded-2xl shadow-sm space-y-3">
          <h2 className="font-semibold text-lg text-primary">
            2. Apoyo audiovisual
          </h2>

          <ul className="space-y-2">
            <li className="px-4 py-2 text-gray-400">
              ● Se debe utilizar una presentación visual (PowerPoint, Canva,
              etc.) con un máximo de 10 láminas.
            </li>
            <li className="px-4 py-2 text-gray-400">
              ● Se recomienda incluir: logo, eslogan, imágenes del prototipo,
              gráficos, estadísticas, videos cortos.
            </li>
            <li className="px-4 py-2 text-gray-400">
              ● Evitar exceso de texto o elementos decorativos sin valor
              informativo.
            </li>
          </ul>
        </div>

  
        <div className=" p-2 rounded-2xl shadow-sm space-y-3">
          <h2 className="font-semibold text-lg text-primary">
            3. Contenido de la presentación
          </h2>

          <ul className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  
              <li className="px-4 py-2 text-gray-400 leading-relaxed bg-indigo-800/10 rounded-xl">
                <span className="font-semibold">
                  1. Identificación del problema y oportunidad
                </span>

                <div className="ml-4 mt-1 text-gray-500">
                  • ¿Qué necesidad o dolor real están abordando?
                  <div>• ¿Qué impacto tendría resolver este problema?</div>
                </div>
              </li>


              <li className="px-4 py-2 text-gray-400 leading-relaxed bg-indigo-800/10 rounded-xl">
                <span className="font-semibold">2. Propuesta de valor</span>

                <div className="ml-4 mt-1 text-gray-500">
                  • ¿Qué solución proponen?
                  <div>• ¿Qué la hace única, creativa e innovadora?</div>
                </div>
              </li>


              <li className="px-4 py-2 text-gray-400 leading-relaxed bg-indigo-800/10 rounded-xl">
                <span className="font-semibold">3. Viabilidad y ejecución</span>

                <div className="ml-4 mt-1 text-gray-500">
                  • ¿Cómo planean implementar la solución?
                  <div>• ¿Qué recursos necesitan?</div>
                  <div>• ¿Cuáles son los próximos pasos?</div>
                </div>
              </li>
            </div>

 
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">

              <li className="px-4 py-2 text-gray-400 leading-relaxed bg-indigo-800/10 rounded-xl">
                <span className="font-semibold">4. Modelo de Negocio Básico</span>

                <div className="ml-4 mt-1 text-gray-500">
                  • ¿Cómo funcionaría la empresa?
                  <div>• ¿Quiénes serían los clientes?</div>
                  <div>• ¿Cómo se generaría valor?</div>
                </div>
              </li>

    
              <li className="px-4 py-2 text-gray-400 leading-relaxed bg-indigo-800/10 rounded-xl">
                <span className="font-semibold">5. Impacto y sostenibilidad</span>
                <div className="ml-4 mt-1 text-gray-500">
                  • ¿Qué efecto positivo tendría en la comunidad o el entorno?
                  <div>• ¿Puede escalar más allá del colegio?</div>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
