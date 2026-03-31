const services = [
  {
    num: "01",
    title: "Custom Software",
    body: "Tailored enterprise platforms engineered for specific operational voids and high-stakes performance.",
  },
  {
    num: "02",
    title: "System Dev",
    body: "High-performance mobile and web ecosystems designed for elite user experience and zero friction.",
  },
  {
    num: "03",
    title: "UX Architecture",
    body: "Minimalist interfaces designed for power users and global brands requiring extreme clarity.",
  },
  {
    num: "04",
    title: "Industrial QA",
    body: "Automated testing protocols and verification cycles that guarantee zero-defect mission critical software.",
  },
  {
    num: "05",
    title: "Core DevOps",
    body: "Distributed cloud infrastructure that scales autonomously and repairs its own logic paths.",
  },
  {
    num: "06",
    title: "Machine Intelligence",
    body: "Embedding bespoke neural models into existing pipelines for predictive advantage and automation.",
  },
];

export default function Services() {
  return (
    <section className="py-40 px-12 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-32 text-center">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-6 block">
            EXPERT CAPABILITIES
          </span>
          <h2 className="font-headline font-extrabold text-6xl md:text-7xl tracking-tighter uppercase text-white mb-8">
            nuestros servicios
          </h2>
          <div className="h-px w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ num, title, body }) => (
            <div
              key={num}
              className="group border border-white/5 p-12 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-white/5 text-6xl font-black italic">
                {num}
              </div>
              <h4 className="font-headline font-bold text-xl mb-6 uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                {title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-light mb-12">
                {body}
              </p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 group-hover:text-white transition-colors">
                Specification{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_outward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
