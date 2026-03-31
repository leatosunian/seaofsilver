const logos = ["VOLT", "AXON", "PHASE", "KRYPT", "NOVA", "VOID"];

export default function ClientLogos() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="max-w-[1600px] mx-auto px-12">
        <div className="flex flex-wrap justify-between items-center gap-12 opacity-20 grayscale">
          {logos.map((name) => (
            <span key={name} className="font-black text-xl tracking-[0.2em]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
