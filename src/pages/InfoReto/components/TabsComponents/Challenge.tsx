import Modal from "../../../../components/Modal";

const challenges = [
  {
    title: "1. Turismo",
    description: 
`a. Turismo inmersivo con VR/AR: Recorridos virtuales para destinos históricos.
b. Turismo regenerativo: Proyectos que restauren ecosistemas y comunidades.
c. Plataformas inteligentes con IA: Itinerarios personalizados según preferencias.
d. Turismo accesible: Soluciones para personas con discapacidad y adultos mayores.
e. Experiencias gamificadas: Juegos interactivos para explorar cultura local.
f. Turismo wellness: Viajes enfocados en salud mental y bienestar.
g. Blockchain para confianza: Certificación de servicios turísticos.
h. Movilidad verde: Transporte turístico con bajas emisiones.`,
  },
  {
    title: "2. Agroindustria",
    description:
                `a.	Agricultura de precisión con IoT: Sensores para optimizar riego y fertilización.
b.	Proteínas alternativas: Innovación en alimentos sostenibles.
c.	Plataformas de trazabilidad blockchain: Garantía de origen y calidad.
d.	Economía circular agrícola: Reutilización de residuos para nuevos productos.
e.	Packaging biodegradable: Envases eco-friendly para exportación.
f.	Agrofintech: Microcréditos digitales para pequeños productores.
g.	Educación agro-digital: Apps para formación en técnicas sostenibles.
h.	Energía renovable en agroprocesos: Uso de solar o biomasa en producción.`,
  },
  {
    title: "3. EdTech",
    description:  `a.	Plataformas adaptativas con IA: Contenido personalizado por nivel.
b.	Gamificación educativa: Juegos para reforzar competencias STEM.
c.	Laboratorios virtuales: Experimentos en entornos digitales.
d.	Educación inclusiva con tecnología: Recursos para estudiantes con discapacidad.
e.	Microlearning móvil: Cursos cortos accesibles desde smartphones.
f.	Mentoría global online: Conexión con expertos internacionales.
g.	Evaluación predictiva con IA: Análisis de desempeño en tiempo real.
h.	Realidad aumentada en aulas: Clases interactivas con AR.
`,
  },
  {
    title: "4. FinTech",
    description:  `a.	Pagos digitales seguros: Soluciones para transacciones sin efectivo.
b.	Educación financiera gamificada: Apps para enseñar ahorro e inversión.
c.	Microcréditos estudiantiles: Plataformas para financiar proyectos escolares.
d.	Blockchain para transparencia: Aplicaciones en procesos financieros.
e.	Crowdfunding escolar: Financiamiento colectivo para ideas innovadoras.
f.	Wallets integradas: Monederos digitales para pagos locales.
g.	Seguridad antifraude con IA: Protección avanzada de datos.
h.	Gamificación del ahorro: Incentivos lúdicos para fomentar hábitos financieros.`,
  },
  {
    title: "5. Servicios",
    description:
      `a.	Delivery inteligente con IA: Optimización de rutas y tiempos.
b.	Plataformas colaborativas: Apps para intercambio de servicios entre estudiantes.
c.	Servicios inclusivos: Soluciones para personas con movilidad reducida.
d.	Atención al cliente automatizada: Chatbots para pequeñas empresas.
e.	Marketplace local digital: Espacios para productos y servicios comunitarios.
f.	Servicios verdes: Modelos que reduzcan el impacto ambiental.
g.	Economía circular aplicada: Reutilización y reciclaje en servicios.
h.	Experiencias hiperpersonalizadas: Uso de datos para adaptar servicios.`,
  },
  {
    title: "6. Oil & Gas",
    description:
       `a.	Energías híbridas: Integración de energías renovables en operaciones.
b.	Monitoreo ambiental con IoT: Sensores para medir impacto ecológico.
c.	Optimización logística con IA: Transporte eficiente y seguro.
d.	Reciclaje de subproductos industriales: Reutilización de residuos.
e.	Educación energética digital: Programas para concientizar sobre uso responsable.
f.	Seguridad industrial con tecnología: Innovaciones para reducir riesgos.
g.	Digitalización de procesos: Automatización en la cadena de valor.
h.	Reducción de emisiones con innovación: Tecnologías para minimizar gases contaminantes.
`,
  },
  {
    title: "7. Tecnología e Innovación",
    description:
       `a.	Inteligencia Artificial y Machine Learning: Aplicaciones en negocios y educación.
b.	Blockchain y Contratos Inteligentes: Transparencia en transacciones.
c.	Computación en la Nube y Edge Computing: Procesamiento distribuido.
d.	Ciberseguridad Avanzada: Protección ante amenazas crecientes.
e.	Realidad Aumentada y Virtual: Educación, entretenimiento y capacitación.
f.	Internet de las Cosas (IoT): Conectividad en hogares y empresas.
g.	Desarrollo de Software Ágil: Soluciones rápidas y escalables.
h.	Tecnologías Verdes: Innovación para sostenibilidad.
`,
  },
  {
    title: "8. Salud",
    description:  `a.	Telemedicina y Atención Remota: Expansión de consultas virtuales.
b.	Inteligencia Artificial para Diagnóstico: Algoritmos predictivos en radiología y análisis clínico.
c.	Medicina Personalizada: Basada en genética y datos biométricos.
d.	Wearables y Monitoreo Continuo: Dispositivos para seguimiento de salud.
e.	Big Data en Epidemiología: Predicción y control de brotes.
f.	Farmacología Digital: Desarrollo de medicamentos con IA.
g.	Hospitales Inteligentes: Infraestructura conectada y automatizada.
h.	Salud Preventiva y Bienestar Integral: Programas basados en hábitos saludables.
`,
  },
  {
    title: "9. Manufactura",
    description:
       `a.	Automatización y Robótica Avanzada: Integración de robots colaborativos en líneas de producción.
b.	Fabricación Aditiva (Impresión 3D): Producción personalizada y reducción de costos.
c.	Digitalización de Procesos (Industria 4.0): Uso de IoT y sensores para monitoreo en tiempo real.
d.	Economía Circular: Reciclaje y reutilización de materiales.
e.	Producción Local con Tecnología Global: Adaptación de estándares internacionales.
f.	Materiales Inteligentes y Nanotecnología: Innovación en resistencia y funcionalidad.
g.	Eficiencia Energética en Plantas Industriales: Reducción de consumo y emisiones.
h.	Cadenas de Suministro Resilientes: Logística optimizada y trazabilidad.
`,
  },

  {
    title: "10. Infraestructura",
    description:
       `a.	Ciudades Inteligentes: Gestión urbana con sensores y datos.
b.	Movilidad Eléctrica y Transporte Sostenible: Vehículos eléctricos y redes de carga.
c.	Energías Renovables: Solar, eólica y biomasa.
d.	Redes Eléctricas Inteligentes (Smart Grids): Distribución eficiente de energía.
e.	Construcción Modular y Prefabricada: Reducción de costos y tiempos.
f.	Gestión de Agua y Saneamiento Avanzado: Tecnologías para optimizar recursos hídricos.
g.	Infraestructura Digital (Fibra Óptica, 5G): Conectividad para desarrollo económico.
h.	Resiliencia ante Desastres Naturales: Diseño y materiales para mitigación de riesgos.`,
  },
];

export function Challenge() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex items-center justify-center ">
      <div className=" p-2 rounded-2xl shadow-sm space-y-3">
        <ul className="flex flex-wrap gap-4 justify-center">
          {challenges.map((challenge, index) => (
            <li key={index}>
              <Modal
                id={`challenge-modal-${index}`}
                title={challenge.title}
                trigger={
                  <div className="px-4 py-2 text-gray-400 leading-relaxed bg-indigo-800/10 rounded-xl hover:bg-gray-500/20 hover:text-primary transition-colors cursor-pointer border border-white">
                    <span className="font-semibold">{challenge.title}</span>
                  </div>
                }
              >
                <div className="text-gray-600 whitespace-pre-wrap">
                  {challenge.description}
                </div>
              </Modal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
