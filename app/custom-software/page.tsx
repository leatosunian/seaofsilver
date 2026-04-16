import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer";

export default function CustomSoftwarePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-6 block">
            SERVICIO
          </span>
          <h1 className="font-headline font-extrabold text-4xl md:text-6xl tracking-tighter uppercase text-white mb-6">
            Software a Medida<span className="text-primary">.</span>
          </h1>
          <div className="h-px w-24 bg-primary mb-10" />
          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
            Software escalable diseñado alrededor de tus procesos, tu equipo y
            tus clientes. El resultado es un sistema que realmente se usa.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
