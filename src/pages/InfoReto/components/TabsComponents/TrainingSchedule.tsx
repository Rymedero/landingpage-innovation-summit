


export function TrainingSchedule() {
  return (
     <div className=" py-12 flex items-center justify-center">
            
            <div className="max-w-6xl mx-auto px-4 ">
                <div className="mt-4 justify">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 justify">
                       <span className="text-primary text-xl">El objetivo principal de las formaciones</span> es proporcionar a los estudiantes una capacitación integral y estructurada en emprendimiento e innovación, que les permita desarrollar las competencias necesarias para transformar una idea en un proyecto de negocio viable y bien comunicado.
                    </p>
                </div>

            <div className="overflow-x-auto rounded-box border border-base-content/5 ">

                <table className="table">
                    <thead>
                    <tr>
                        
                        <th className="text-primary">Evento</th>
                        <th className="text-primary">Fecha</th>
                        <th className="text-primary">Hora</th>
                    </tr>
                    </thead>
                    <tbody>
                
                    <tr>
                        <th className="text-gray-400">Taller de formación 1</th>
                        <td className="text-gray-400">Martes 03 de febrero</td>
                        <td className="text-gray-400">8:00 am – 1:00 pm</td>
                    </tr>
                
                    <tr>
                        <th className="text-gray-400">Taller de formación 2</th>
                        <td className="text-gray-400">Martes 03 de marzo</td>
                        <td className="text-gray-400">8:00 am – 1:00 pm</td>
                        
                    </tr>
                    
                    <tr>
                        <th className="text-gray-400">Taller de formación 3</th>
                        <td className="text-gray-400">Martes 28 de abril</td>
                        <td className="text-gray-400">8:00 am – 1:00 pm</td>
                        
                    </tr>

                    <tr>
                        <th className="text-gray-400">Final</th>
                        <td className="text-gray-400">Viernes 29 de mayo</td>
                        <td className="text-gray-400">8:00 am – 1:00 pm</td>
                    </tr>
                    </tbody>
                </table>

                <div className="mt-4 justify">
                    <p className="text-gray-600 dark:text-gray-400 mb-4 justify">
                       El requisito de asistencia obligatoria (3 sesiones formativas y 2 de mentoría) garantiza que todos los participantes adquieran esta base de conocimiento fundamental, siendo la condición indispensable para asegurar su preparación y avanzar hacia el evento final.
                    </p>
                </div>

            </div>
            </div>
    </div> 
  );
}