import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import innoImg from "../../assets/LogoInnovation.png";
import inspiraImg from "../../assets/Logos INSPIRA-02.png";
import innoImgUni from "../../assets/University/logo.png";

const navigationItems = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/reto-innovation",
    label: "Reto InspiraVe",
    subtitle: "Intercolegial",
  },
  {
    href: "/reto-innovation-university",
    label: "Reto InspiraVe",
    subtitle: "Interuniversitario",
  },
  {
    href: "/summit2026-foco",
    label: "InnovEYtion",
    subtitle: "Summit 2026",
  },
];

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

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const logoSrc =
    location.pathname === "/info-reto"
      ? inspiraImg
      : location.pathname === "/info-reto-university"
        ? innoImgUni
        : innoImg;

  const navBaseClass =
    "transition-colors duration-200 px-3 py-2 text-md font-medium";
  const mobileLinkClass =
    "block rounded-xl px-4 py-3 text-base font-medium transition-colors duration-200";

  return (
    <>
      {mobileOpen ? (
        <button
          type="button"
          aria-label="Cerrar menu"
          className="fixed inset-0 top-20 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}

      <nav
        id="site-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        style={
          mobileOpen
            ? undefined
            : { top: `-${offset}px`, transform: `translateY(${offset}px)` }
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-20 w-auto"
                  src={logoSrc}
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `${navBaseClass} ${
                      isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
                    } ${item.subtitle ? "text-center" : "items-center"}`
                  }
                >
                  {item.label}
                  {item.subtitle ? <><br /><span>{item.subtitle}</span></> : null}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center">
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                >
                  <span className="sr-only">Abrir menu principal</span>
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
          className={`${mobileOpen ? "block" : "hidden"} absolute left-0 right-0 top-full z-50 px-4 pb-4 md:hidden`}
          id="mobile-menu"
        >
          <div className="rounded-2xl border border-white/10 bg-gray-900/95 p-3 shadow-2xl backdrop-blur-md">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${mobileLinkClass} ${
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <span className="block">{item.label}</span>
                {item.subtitle ? (
                  <span className="block text-sm text-inherit/80">{item.subtitle}</span>
                ) : null}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
