import type { ReactNode } from "react";

interface ModalProps {
  id: string;
  title?: string;
  children: ReactNode;
  trigger?: ReactNode;
}

export default function Modal({ id, title, children, trigger }: ModalProps) {
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
      <dialog id={id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-gray-200 border border-l-8 border-primary">
          <form method="dialog">

            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          <div className="py-4">{children}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
