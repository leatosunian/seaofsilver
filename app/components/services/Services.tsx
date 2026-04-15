const services = [
  {
    icon: "code",
    title: "SOFTWARE A MEDIDA",
    body: "Software escalable diseñado alrededor de tus procesos, tu equipo y tus clientes. El resultado es un sistema que realmente se usa.",
  },
  {
    icon: "devices",
    title: "iOS · ANDROID",
    body: "Apps iOS y Android. Todo construido con el stack correcto, optimizado para velocidad y escalabilidad.",
  },
  {
    icon: "web",
    title: "LANDING PAGES",
    body: "Páginas optimizadas para convertir visitantes en clientes, diseñadas para maximizar la tasa de conversión.",
  },
  {
    icon: "verified",
    title: "TESTING & QA",
    body: "Garantizamos el funcionamiento óptimo de tus sistemas con pruebas rigurosas que aseguran calidad, rendimiento y seguridad.",
  },
  {
    icon: "security",
    title: "CIBERSEGURIDAD",
    body: "Auditamos tu infraestructura, tus APIs y tu código para detectar puntos débiles antes de que se conviertan en incidentes.",
  },
  {
    icon: "psychology",
    title: "IA Y AUTOMATIZACIONES",
    body: "Cada hora que tu equipo dedica a tareas repetitivas es una hora que no dedica a crecer. La automatizamos.",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-400 mx-auto">
        <div className="mb-12 md:mb-20 text-left md:text-center">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-6 block">
            DESARROLLO · DISEÑO · MARKETING
          </span>
          <h2 className="font-headline font-extrabold text-3xl md:text-5xl 2xl:text-6xl tracking-tighter uppercase text-white mb-8">
            NUESTRAS SOLUCIONES<span className="text-primary">.</span>
          </h2>
          <div className="h-px w-24 bg-primary mx-0 md:mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-md bg-white/5 border border-white/5 overflow-hidden">
          {services.map(({ icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden bg-surface p-7 md:p-12 hover:-translate-y-1 hover:bg-[#111] transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Animated top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              {/* Background glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="mb-5 relative inline-flex">
                <div className="absolute inset-0 blur-2xl bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
                <span
                  className="material-symbols-outlined text-[2.75rem] text-primary relative z-10 transition-all duration-500 group-hover:drop-shadow-[0_0_16px_rgba(142,255,113,0.5)]"
                  style={{ fontVariationSettings: "'wght' 200, 'FILL' 0" }}
                >
                  {icon}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-headline font-bold text-lg xl:text-xl uppercase tracking-wider text-white group-hover:text-primary transition-colors duration-300 mb-3 leading-tight">
                {title}
              </h4>

              {/* Expanding accent underline */}
              <div className="h-px w-6 bg-primary/50 mb-6 group-hover:w-14 transition-all duration-500" />

              {/* Body */}
              <p className="text-zinc-500 text-sm xl:text-base leading-relaxed font-light mb-7 flex-1">
                {body}
              </p>

              {/* CTA */}
              <div className="flex items-center justify-end gap-1.5 text-[11px] text-zinc-600 group-hover:text-primary transition-colors duration-300 uppercase tracking-[0.2em] font-bold">
                <span>Conocé más</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1.5 transition-transform duration-300">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
