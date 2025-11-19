import { useEffect, useState } from "react"
import innoImg from "../../assets/Captura de pantalla 2025-11-17 102226.png"


export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setScrolled(y > 20)
      setOffset(Math.min(y / 4, 12)) // baja hasta 12px al scrollear
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
        style={{ top: `-${offset}px`, transform: `translateY(${offset}px)` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center">
                <img className="h-20 w-auto" src={innoImg} alt="Logo" />
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:justify-center md:space-x-10">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center">
                Inicio
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center">
                Salas
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center">
                Focos
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors duration-200 px-3 py-2 text-md font-medium items-center">
                Convocados
              </a>
            </div>
            <div className="flex items-center">

              <button className="btn btn-primary mt-4 px-4 py-2 w-36 md:w-auto text-center">Registrate</button>
          
              <div className="flex items-center md:hidden">
                <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className="md:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 bg-opacity-90">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-y-3">
                <a href="#" className="block w-full text-center text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600">
                  Login
                </a>
              </div>
              <div className="mt-3 px-5">
                <a href="#" className="block w-full text-center bg-white text-indigo-600 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

{/* 
      <div className="bg h-screen flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-4"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Welcome to Our Website
          </h1>
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-3 max-w-md mx-auto text-base text-gray-200 sm:text-lg md:mt-5 md:text-xl"
        >
            This transparent navbar works great with hero sections.
          </motion.p>
          <div className="mt-10">
            <a href="#" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
              Get Started
            </a>
          </div>
        </div>

      </div> */}
    </>
  );
}



     