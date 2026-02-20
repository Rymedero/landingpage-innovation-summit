import ModalClose from "../../../../components/ModalClose";

export function RegisterUni() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-gray-900/50 rounded-2xl backdrop-blur-sm">
      <div className="flex space-x-4 py-10">
        <ModalClose
          id="register-uni-modal"
          trigger={
            <span className="inline-block text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary transition-all duration-300 hover:scale-105 hover:decoration-indigo-400 decoration-4 underline-offset-8">
              Haz click <span className="text-white">aquí</span> y regístrate
            </span>
          }
        >
          <svg
            className="w-12 h-12 text-red-600 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-normal text-black mt-3 mb-2">
            ¡El periodo de registro ha finalizado!
          </h3>
          <p className="text-gray-500 mb-6">
            Te invitamos a estar atento a nuestras redes sociales para futuras convocatorias.
          </p>
        </ModalClose>
      </div>
    </div>
  );
}