import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import innoImg from "../../assets/LogoInnovation.png";
import inspiraImg from "../../assets/Logos INSPIRA-02.png";
import innoImgUni from "../../assets/University/logo.png";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [offset, setOffset] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 20);
      setOffset(Math.min(y / 4, 12));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        style={{ top: `-${offset}px`, transform: `translateY(${offset}px)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center">
                <img
                  className="h-20 w-auto"
                  src={
                    location.pathname === "/info-reto"
                      ? inspiraImg
                      : location.pathname === "/info-reto-university"
                      ? innoImgUni
                      : innoImg
                  }
                  alt="Logo"
                />
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10">
              <a
                href="/"
                className={`${
                  location.pathname === "/" ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center`}
              >
                Inicio
              </a>
              <a
                href="/reto-innovation"
                className={`${
                  location.pathname === "/reto-innovation"
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center text-center`}
              >
                Reto InspiraVe <br></br>
                <h1 className="items-center text-center">Intercolegial</h1>
              </a>
              <a
                href="/reto-innovation-university"
                className={`${
                  location.pathname === "/reto-innovation-university"
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center text-center`}
              >
                Reto InspiraVe <br></br>
                <h1 className="text-center">Interuniversitario</h1>
              </a>
              <a
                aria-disabled="true"
                className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center opacity-35"
              >
                Salas
              </a>
              <a
                aria-disabled="true"
                className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center opacity-35"
              >
                Focos
              </a>
              <a
                aria-disabled="true"
                className="text-white disabled hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center opacity-35"
              >
                Convocados
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded={mobileOpen}
                >
                  <span className="sr-only">Open main menu</span>
                  {!mobileOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${mobileOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 bg-opacity-90">
            <a
              href="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </a>
            <a
              href="/reto-innovation"
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Reto InspiraVe intercolegial
            </a>
             <a
              href="/reto-innovation-university"
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Reto InspiraVe interuniversitario
            </a>
            <a
              aria-disabled="true"
              href="#"
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Salas
            </a>
            <a
              aria-disabled="true"
              href="#"
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Focos
            </a>
            <a
              aria-disabled="true"
              href="#"
              className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Convocados
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
