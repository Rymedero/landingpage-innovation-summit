


export function TrainingScheduleUni() {
  return (
    <div className=" py-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto rounded-box border border-base-content/5 ">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-primary">Evento</th>
                <th className="text-primary">Fecha</th>
                <th className="text-primary">Hora</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th className="text-gray-400">Demo Day</th>
                <td className="text-gray-400">Lunes 23 de marzo</td>
                <td className="text-gray-400">8:00 am – 1:00 pm</td>
              </tr>

              <tr>
                <th className="text-gray-400">Final</th>
                <td className="text-gray-400">Martes 19 de mayo</td>
                <td className="text-gray-400">8:00 am – 1:00 pm</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 justify">
            <p className="text-gray-600 dark:text-gray-400 mb-4 justify">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
