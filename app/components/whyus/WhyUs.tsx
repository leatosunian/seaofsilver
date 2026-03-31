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
    <section className="py-40 px-12 bg-background">
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
          <p className="max-w-md text-zinc-500 text-sm font-light leading-relaxed hidden md:block">
            El mejor software no es el más sofisticado.
            Es el que resuelve el problema correcto
            de la manera más directa posible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {pillars.map(({ icon, title, body }) => (
            <div
              key={title}
              className="p-12 bg-background group hover:bg-zinc-900/50 transition-colors"
            >
              <span className="material-symbols-outlined text-primary mb-8 text-3xl block">
                {icon}
              </span>
              <h3 className="font-headline font-bold text-lg mb-4 uppercase tracking-wider text-white">
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
