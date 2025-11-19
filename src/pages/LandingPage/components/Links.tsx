import { ArrowRight, FileText, UserPlus, Info } from "lucide-react";


export function Links() {

   const links = [
    {
      title: "Información del Programa",
      desc: "Requisitos, objetivos y estructura general.",
      icon: <Info className="w-5 h-5 text-indigo-600" />,
      href: "/info",
    },
    {
      title: "Registro de Participantes",
      desc: "Formulario oficial para unirte al programa.",
      icon: <UserPlus className="w-5 h-5 text-indigo-600" />,
      href: "/registro",
    },
    {
      title: "Documentos y Recursos",
      desc: "Material de apoyo, guías y PDFs disponibles.",
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      href: "/docs",
    },
  ];

  return (
    <div className="w-full py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 ">
        Información y Recursos para Participantes
      </h2>

      <ul className="space-y-6">
        {links.map((item, i) => (
          <li key={i}>
            <a
              href={item.href}
              className="flex items-start gap-4 group"
            >
              {/* Icono */}
              <div className="mt-1">{item.icon}</div>

              {/* Texto */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>

              {/* Flecha */}
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition" />
            </a>

            {/* Separador */}
            {i < links.length - 1 && (
              <div className="mt-4 border-b border-gray-200" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
        }