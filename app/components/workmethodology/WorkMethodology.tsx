const steps = [
  {
    num: "01",
    title: "Auditoria de requerimientos",
    body: "Nos reunimos para entender tu negocio, tus objetivos y el problema que necesitás resolver antes de proponer cualquier solución.",
    active: true,
  },
  {
    num: "02",
    title: "Propuesta Y DISEÑO",
    body: "Definimos cómo se va a construir la solución antes de escribir una línea de código. Prototipo incluido para validar antes de invertir.",
    active: false,
  },
  {
    num: "03",
    title: "DESARROLLO Y REVISIÓN",
    body: "Cada línea de código que sale a producción pasó por tu revisión, testing y aprobación. Eso es lo que garantiza la calidad final.",
    active: false,
  },
  {
    num: "04",
    title: "Entrega y soporte",
    body: "Global deployment with integrated 24/7 hyper-care and automatic scaling protocols.",
    active: false,
  },
];

export default function WorkMethodology() {
  return (
    <section className="py-40 px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dashboard-grid opacity-10"></div>
      <div className="max-w-400 mx-auto relative z-10">
        <div className="mb-32">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-4 block">
            DE LA IDEA AL PRODUCTO
          </span>
          <h2 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tight uppercase text-white">
            cómo trabajamos<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Progress Line */}
          <div className="absolute top-12 left-0 w-full h-px technical-line hidden md:block"></div>

          {steps.map(({ num, title, body, active }) => (
            <div key={num} className="relative flex flex-col items-start pt-20">
              <div
                className={`absolute top-0 left-0 w-12 h-12 glass-card flex items-center justify-center font-bold border-primary/30 ${
                  active ? "text-primary" : "text-white/50"
                }`}
              >
                {num}
              </div>
              <h5 className="font-headline font-bold text-xl mb-4 uppercase tracking-[0.2em] text-white">
                {title}
              </h5>
              <p className="text-xs 2xl:text-sm text-zinc-500 leading-relaxed max-w-60 font-light">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
