const pillars = [
  {
    icon: "bolt",
    title: "SIN DEMORAS",
    body: "Plazos acordados, plazos cumplidos. Organizamos el proyecto para que haya progreso visible, semana a semana",
  },
  {
    icon: "verified",
    title: "CALIDAD SIN NEGOCIACIÓN",
    body: "Software bien construido reduce costos de mantenimiento, soporte y reestructuración futura.",
  },
  {
    icon: "hub",
     title: "IA y automatización",
    body: "Desde chatbots hasta análisis predictivo,adaptamos la IA al contexto de tu empresa.",
  },
  {
    icon: "trending_up",
    title: "Arquitectura escalable",
    body: "Diseñamos la arquitectura pensando en diez veces tu volumen actual desde el día uno.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-40 px-12 bg-surface">
      <div className="max-w-400 mx-auto">
        <div className="mb-24 flex items-end justify-between">
          <div>
            <span className="text-primary font-label text-[10px] uppercase tracking-[0.4em] font-extrabold mb-4 block">
              NUESTRO ESTÁNDAR
            </span>
            <h2 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tight uppercase text-white">
              Por qué Sea Of Silver<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="max-w-sm xl:max-w-lg hidden md:block border-l-2 border-primary/30 pl-5 leading-relaxed">
            <span className="block text-zinc-200 font-light text-base xl:text-lg mb-1">
              El mejor software no es el más sofisticado.
            </span>
            <span className="block text-zinc-500 font-light text-sm xl:text-base">
              Es el que resuelve el problema correcto de la manera más directa posible.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 rounded-md md:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {pillars.map(({ icon, title, body }, i) => (
            <div
              key={title}
              className="relative p-10 bg-background group hover:bg-zinc-900/60 transition-all duration-300 shadow-[inset_0_2px_0_0_rgba(142,255,113,0)] hover:shadow-[inset_0_2px_0_0_rgba(142,255,113,0.35)] flex flex-col overflow-hidden"
            >
              {/* Ghost number */}
              <span className="absolute -bottom-3 right-3 font-headline font-extrabold text-9xl text-white/[0.025] select-none leading-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon badge */}
              <div className="w-9 h-9 flex items-center justify-center bg-primary/[0.08] rounded mb-7 group-hover:bg-primary/[0.15] transition-colors duration-300">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  {icon}
                </span>
              </div>

              <h3 className="font-headline font-bold text-lg lg:text-xl mb-3 uppercase tracking-wider text-white">
                {title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
