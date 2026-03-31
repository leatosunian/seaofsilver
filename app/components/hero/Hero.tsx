export default function Hero() {
  return (
    <header className="relative pt-32 pb-24 px-12 min-h-screen flex items-center overflow-hidden bg-background">
      {/* Technical Background */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(142,255,113,0.07),transparent_70%)]"></div>
      <div className="absolute inset-0 scanline h-1/2 w-full opacity-30"></div>

      {/* Abstract Geometric SVG */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block">
        <svg
          className="w-full h-full fill-none stroke-[0.5]"
          viewBox="0 0 800 800"
          style={{ stroke: "#8eff71" }}
        >
          <path d="M100,100 L700,100 L700,700 L100,700 Z" />
          <path d="M150,150 L650,150 L650,650 L150,650 Z" />
          <circle cx="400" cy="400" r="300" />
          <path d="M400,100 L400,700 M100,400 L700,400" />
          <path d="M187,187 L613,613 M613,187 L187,613" />
          <circle cx="400" cy="400" r="150" />
          <rect x="350" y="350" width="100" height="100" />
          <path strokeWidth="0.2" d="M0,400 L800,400 M400,0 L400,800" />
        </svg>
      </div>

      <div className="max-w-400 mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          {/* Status */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-primary font-label text-[10px] uppercase tracking-[0.6em] font-black">
              TECH_STATUS: OPERACIONAL / LISTOS_PARA_VOS
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-extrabold text-7xl md:text-[5rem] tracking-tighter leading-[0.8] mb-12 uppercase text-white">
            Soluciones que  <br />
            <span className="text-gradient">transforman tu negocio</span>
          </h1>

          {/* Sub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
              Software a medida, aplicaciones móviles, IA, marketing digital
              y ciberseguridad. Todo lo que tu empresa necesita para
              escalar, en un solo lugar.
            </p>
            <div className="hidden md:flex flex-col gap-3 border-l border-white/10 pl-8 font-mono text-[10px] text-zinc-600 tracking-wider">
              <div className="flex justify-between">
                <span>DEV</span>
                <span className="text-primary">FRONTEND + BACKEND + MOBILE</span>
              </div>
              <div className="flex justify-between">
                <span>AUTOMATIZACIÓN</span>
                <span className="text-white">IA + WORKFLOWS + BOTS</span>
              </div>
              <div className="flex justify-between">
                <span>SEGURIDAD</span>
                <span className="text-white">AUDITORÍA + PENTESTING</span>
              </div>
              <div className="flex justify-between">
                <span>MARKETING</span>
                <span className="text-primary">SEO + ADS + CONTENIDO</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-8 items-center">
            <button className="relative group bg-primary text-black px-12 py-5 font-headline font-bold text-xs uppercase tracking-widest hover:bg-white transition-all overflow-hidden">
              <span className="relative z-10">Contanos tu proyecto</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors">
              Nuestros servicios
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                east
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-12 flex items-center gap-4 overflow-hidden">
        <div className="h-16 w-px bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-primary scanline"></div>
        </div>
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-zinc-700 [writing-mode:vertical-lr]">
          Descubrí más abajo
        </span>
      </div>
    </header>
  );
}
