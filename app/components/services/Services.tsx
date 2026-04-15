import { Button } from "../ui/button";

const services = [
  {
    num: "01",
    title: "SOFTWARE A MEDIDA",
    body: "Software escalable diseñado alrededor de tus procesos, tu equipo y tus clientes. El resultado es un sistema que realmente se usa.",
  },
  {
    num: "02",
    title: "iOS · ANDROID",
    body: "Apps iOS y Android. Todo construido con el stack correcto, optimizado para velocidad y escalabilidad.",
  },
  {
    num: "03",
    title: "LANDING PAGES",
    body: "Páginas  optimizadas para convertir visitantes en clientes, diseñadas para maximizar la tasa de conversión.",
  },
  {
    num: "04",
    title: "TESTING & QA",
    body: "Garantizamos el funcionamiento óptimo de tus sistemas con pruebas rigurosas que aseguran calidad, rendimiento y seguridad.",
  },
  {
    num: "05",
    title: "CIBERSEGURIDAD",
    body: "Auditamos tu infraestructura, tus APIs y tu código para detectar puntos débiles antes de que se conviertan en incidentes.",
  },
  {
    num: "06",
    title: "IA Y AUTOMATIZACIONES",
    body: "Cada hora que tu equipo dedica a tareas repetitivas es una hora que no dedica a crecer. La automatizamos.",
  },
];

export default function Services() {
  return (
    <section className="py-40 px-12 bg-surface border-y border-white/5">
      <div className="max-w-400 mx-auto">
        <div className="mb-32 text-center">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-6 block">
            DESARROLLO · DISEÑO · MARKETING
          </span>
          <h2 className="font-headline font-extrabold text-6xl md:text-7xl tracking-tighter uppercase text-white mb-8">
            NUESTRAS SOLUCIONES
          </h2>
          <div className="h-px w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ num, title, body }) => (
            <div
              key={num}
              className="group border border-white/5 p-12 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
                {/* <div className="absolute top-0 right-0 p-8 text-white/5 text-6xl font-black italic">
                  {num}
                </div> */}
              <h4 className="font-headline font-bold text-2xl mb-6 uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                {title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed font-light mb-12">
                {body}
              </p>
              <Button className="flex text-black items-center gap-2 text-xs px-4 py-2 uppercase tracking-widest font-bold  transition-colors">
                Conocé mas{" "}
                  
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
