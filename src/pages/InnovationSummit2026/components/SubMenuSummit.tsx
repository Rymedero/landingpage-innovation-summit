import { Fragment } from "react";
import { ArrowRight, DoorOpen, Target, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const sections = [
  { label: "FOCO", path: "/summit2026-foco", icon: Target },
  { label: "SALAS", path: "/summit2026-salas", icon: DoorOpen },
  { label: "CONVOCADOS", path: "/summit2026-convocados", icon: Users },
];

export function SubMenuSummit() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mt-8 md:mt-10">
      <style>{`
        @keyframes arrowForward {
          0% { transform: translateX(0); opacity: 0.55; }
          50% { transform: translateX(4px); opacity: 1; }
          100% { transform: translateX(0); opacity: 0.55; }
        }
      `}</style>
      <nav className="flex w-full items-center justify-between gap-2 sm:inline-flex sm:w-auto sm:justify-start sm:gap-4">
        {sections.map((section, index) => {
          const isActive = location.pathname === section.path;
          const Icon = section.icon;
          return (
            <Fragment key={section.path}>
              <button
                onClick={() => navigate(section.path)}
                className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 text-[10px] sm:flex-none sm:text-sm font-bold tracking-[0.1em] sm:tracking-[0.16em] uppercase transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {section.label}
                <Icon
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="sm:h-5 sm:w-5"
                />
              </button>
              {index < sections.length - 1 && (
                <span
                  className="relative flex w-8 sm:w-16 items-center"
                  aria-hidden="true"
                >
                  <span className="h-px w-full bg-white/30" />
                  <ArrowRight
                    size={12}
                    strokeWidth={2}
                    className="absolute -right-1 text-white/70 sm:h-[15px] sm:w-[15px]"
                    style={{
                      animation: "arrowForward 1.15s ease-in-out infinite",
                    }}
                  />
                </span>
              )}
            </Fragment>
          );
        })}
      </nav>
    </div>
  );
}
