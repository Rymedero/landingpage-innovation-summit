import { useState } from "react";




export function Challenge() {
    const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpen(open === id ? null : id);
  };
    return (
        <div className="max-w-6xl mx-auto px-4 ">
     <div className="space-y-4">

      {/* CATEGORÍA A */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggle("A")}
          className="w-full px-5 py-3 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100"
        >
          Categoría A — Innovación
        </button>

        {open === "A" && (
          <div className="p-5 bg-white grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 1</div>
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 2</div>
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 3</div>
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 4</div>
          </div>
        )}
      </div>

      {/* CATEGORÍA B */}
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => toggle("B")}
          className="w-full px-5 py-3 text-left font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100"
        >
          Categoría B — Tecnología
        </button>

        {open === "B" && (
          <div className="p-5 bg-white grid md:grid-cols-2 gap-3">
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 1</div>
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 2</div>
            <div className="p-3 rounded-lg border bg-gray-50">Proyecto 3</div>
          </div>
        )}
      </div>


    </div>
    </div>
        );
}       