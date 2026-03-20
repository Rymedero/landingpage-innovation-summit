import { SubMenuSummit } from "../../components/SubMenuSummit";
import { FooterSummit } from "../../components/Footer";

// IDs de los videos de YouTube

const VITE_ID_VIDEO_1 = import.meta.env.VITE_ID_VIDEO_1;
const VITE_ID_VIDEO_2 = import.meta.env.VITE_ID_VIDEO_2;
const VITE_ID_VIDEO_3 = import.meta.env.VITE_ID_VIDEO_3;

const YOUTUBE_LIVES = [
  { id: VITE_ID_VIDEO_1, title: "AUDITORIO - MAIN ARENA" },
  { id: VITE_ID_VIDEO_2, title: "SALA FUSION - DEEP TECH RING" },
  { id: VITE_ID_VIDEO_3, title: "SALA PARADOX - RÉPLICA DEL MAIN ARENA" },
];
function Salas() {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center justify-center pt-24 pb-0 bg-gray-900/50 rounded-2xl backdrop-blur-sm " >
      {/* Navegación superior */}
      <SubMenuSummit />

      {/* Contenedor de Videos */}
      <main className="w-full max-w-4xl px-4 py-12 flex flex-col gap-12">
        {YOUTUBE_LIVES.map((video) => (
          <div key={video.id} className="flex flex-col gap-4">
            {/* Título de la Sala */}
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-white font-bold tracking-wider text-sm sm:text-base">
                {video.title}
              </h3>
            </div>

            {/* Contenedor del Iframe con proporción 16:9 */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=1&mute=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </main>

      {/* Footer al final */}
      <FooterSummit />
    </div>
  );
}

export default Salas;
