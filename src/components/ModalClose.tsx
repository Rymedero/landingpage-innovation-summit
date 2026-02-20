import type { ReactNode } from "react";

interface ModalCloseProps {
  id: string;
  title?: string;
  children: ReactNode;
  trigger?: ReactNode;
}

export default function ModalClose({
  id,
  title,
  children,
  trigger,
}: ModalCloseProps) {
  const openModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      {trigger ? (
        <div onClick={openModal} className="inline-block cursor-pointer">
          {trigger}
        </div>
      ) : (
        <button className="btn" onClick={openModal}>
          Open Modal
        </button>
      )}
      <dialog id={id} className="modal modal-middle !flex !items-center !justify-center p-4 md:p-6">
        <div className="modal-box w-full max-w-md mx-auto bg-white/90 border border-primary/50 shadow-[0_10px_40px_rgba(234,179,8,0.3)] backdrop-blur">
          <form method="dialog" className="flex justify-end p-2">
            <button
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </form>

          <div className="p-6 pt-0 text-center">
            {title && (
              <h3 className="text-xl font-normal text-gray-500 mt-2 mb-4">
                {title}
              </h3>
            )}
            <div>{children}</div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}