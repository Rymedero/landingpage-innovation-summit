import { useRef, useState } from "react";


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


  return (
    <div className="w-full flex flex-col items-center">

      <div className="relative w-full p-4 flex items-center justify-center max-w-6xl">
        {/* TABS */}
        <div
          ref={scrollRef}
          className="flex gap-4 border-b overflow-x-auto scrollbar-hide w-full flex-nowrap px-2"
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`inline-flex items-center justify-center text-center px-4 py-2 
                min-w-[120px] sm:min-w-[140px] 
                max-w-[200px] md:max-w-[280px] 
                break-words font-medium transition ${active === index
                  ? "border-b-2 border-indigo-500 text-primary"
                  : "text-gray-500 hover:text-primary"
                }`}
              onClick={() => setActive(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="w-full max-w-7xl items-center justify-center">
        {tabs[active].content}
      </div>
    </div>
  );
}
