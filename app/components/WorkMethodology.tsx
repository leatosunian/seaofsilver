const steps = [
  {
    num: "01",
    title: "Auditoria de requerimientos",
    body: "Exhaustive diagnostic phase analyzing current infrastructure and identifying critical voids.",
    active: true,
  },
  {
    num: "02",
    title: "Propuesta y arquitectura",
    body: "Defining the logic structure and visual schema for a high-performance solution.",
    active: false,
  },
  {
    num: "03",
    title: "QA & Testing",
    body: "Concurrent engineering sprints using the SOS standard for rapid, stable development cycles.",
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
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-32">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-4 block">
            DEVELOPMENT PIPELINE
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
              <h5 className="font-headline font-bold mb-4 uppercase tracking-[0.2em] text-white">
                {title}
              </h5>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-[240px] font-light">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
