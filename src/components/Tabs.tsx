import { useRef, useState, useEffect, useState as UseState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
}

export default function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = UseState(false);

  // Detecta si hay overflow para mostrar las flechas
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    setShowArrows(el.scrollWidth > el.clientWidth);
  }, [tabs]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center">

      {/* CONTENEDOR GENERAL */}
      <div className="relative w-full p-4 flex items-center justify-center">

        {/* FLECHA IZQUIERDA */}
        {showArrows && (
          <button
            onClick={scrollLeft}
            className="absolute left-5 z-20 bg-white shadow rounded-full p-1 hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* TABS */}
        <div
          ref={scrollRef}
          className="
            flex 
            gap-4 
            border-b 
            overflow-x-auto 
            scrollbar-hide 
            w-full 
            justify-center 
            px-10
          "
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                flex-1 
                text-center
                px-4 
                py-2 
                min-w-fit
                font-medium 
                transition
                whitespace-nowrap 
                ${
                  active === index
                    ? "border-b-2 border-indigo-500 text-indigo-600"
                    : "text-gray-500 hover:text-indigo-500"
                }
              `}
              onClick={() => setActive(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FLECHA DERECHA */}
        {showArrows && (
          <button
            onClick={scrollRight}
            className="absolute right-5 z-20 bg-white shadow rounded-full p-1 hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* CONTENIDO */}
      <div className="p-4 w-full max-w-2xl">
        {tabs[active].content}
      </div>
    </div>
  );
}
