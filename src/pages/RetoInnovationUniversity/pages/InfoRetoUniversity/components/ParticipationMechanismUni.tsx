

export function ParticipationMechanismUni() {
  return (
    <section className=" py-6 sm:py-16 lg:py-10 xl:py-12 items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 items-center justify-center">
        <ul className="mx-auto  grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-4 lg:max-w-5xl lg:grid-cols-4">
          <li className="flex-start group relative flex lg:flex-col">
            <div className="ml-6 lg:ml-0 lg:mt-5">
              <h3 className="text-xl font-bold text-primary before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-center">
                Público objetivo
              </h3>
              <h4 className="mt-2 text-base text-gray-400 text-center">
                Estudiantes de las universidades de Venezuela.
              </h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <div className="ml-6 lg:ml-0 lg:mt-5">
              <h3 className="text-xl font-bold text-primary before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-center">
                Cantidad de participantes
              </h3>
              <h4 className="mt-2 text-base text-gray-400 text-center">
                 Los estudiantes pueden postularse de forma individual <br /> o en equipo máximo de <span className=" font-bold text-white">tres</span> personas.
              </h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <div className="ml-6 lg:ml-0 lg:mt-5">
              <h3 className="text-xl font-bold text-primary before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-center">
                Método de inscripción
              </h3>
              <h4 className="mt-2 text-base text-gray-400 text-center">
                Formulario de inscripción mediante el cual los estudiantes podrán postular su proyecto.
              </h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <div className="ml-6 lg:ml-0 lg:mt-5">
              <h3 className="text-xl font-bold text-primary before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500 text-center">
                Acompañamiento docente
              </h3>
              <h4 className="mt-2 text-base text-gray-400 text-center">
               Dos sesiones de mentorías con especialistas que te ayudarán a: Validar tu idea, diseñar tu modelo de negocio y preparar tu Pitch.
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
