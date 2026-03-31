const metrics = [
  { value: "23", suffix: "+", label: "PROYECTOS COMPLETADOS", live: true },
  { value: "2", suffix: "+", label: "AÑOS CREANDO SOLUCIONES", live: false },
  { value: "98", suffix: "%", label: "INDICE DE SATISFACCIÓN", live: false },
  { value: "24", suffix: "HS", label: "SOPORTE POST ENTREGA", live: false },
];

export default function Metrics() {
  return (
    <section className="py-32 px-12 border-y border-white/5 bg-zinc-950/80 relative overflow-hidden">
      <div className="absolute inset-0 dashboard-grid opacity-5"></div>
      <div className="max-w-400 mx-auto">
        <div className="text-center mb-24">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-4 block">
            NUESTRO IMPACTO
          </span>
          <h2 className="font-headline font-extrabold text-5xl tracking-tighter uppercase text-white">
            ÉSTO ES LO QUE CONSTRUIMOS <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {metrics.map(({ value, suffix, label, live }) => (
            <div key={label} className="bg-black p-12 relative group">
              {live && (
                <div className="absolute top-4 right-4 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                  <div className="text-[8px] text-zinc-600 uppercase tracking-tighter font-bold">
                    Live
                  </div>
                </div>
              )}
              <div className="text-primary font-headline font-extrabold text-6xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                {value}
                <span className="text-white/20">{suffix}</span>
              </div>
              <div className="text-zinc-500 font-label text-[9px] font-bold tracking-[0.3em] uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
