import { FaArrowRight } from "react-icons/fa6";
import { GlobeBackground } from "../globe";
import { Button } from "../ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-24 px-6 md:px-16 2xl:px-64 min-h-screen flex items-center overflow-hidden bg-surface">
      {/* 3D Globe — full-screen, behind everything */}
      <GlobeBackground />

      {/* Technical Background */}
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(142,255,113,0.07),transparent_70%)]"></div>
      <div className="absolute inset-0 scanline h-1/2 w-full opacity-30"></div>

      {/* Abstract Geometric SVG */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block">
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
      </div> */}

      <div className="max-w-400 mx-auto w-full relative z-10">
        <div className="max-w-6xl">
          {/* Status */}
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <div className="h-px w-2 bg-primary"></div>
            <span className="text-primary font-label text-[10px] uppercase tracking-[0.2em] font-black">
              SEA OF SILVER | SOFTWARE FACTORY
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-extrabold text-4xl sm:text-6xl md:text-[5rem] tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 uppercase text-white">
            Soluciones que  <br />
            <span className="text-gradient">transforman tu negocio</span>
          </h1>
          <div className="h-px w-24 bg-primary mb-8 md:mb-12" />

          {/* Sub */}
          <div className="mb-10 md:mb-16">
            <p className="text-zinc-300 text-base md:text-lg lg:text-xl font-light leading-relaxed">
              Software a medida, aplicaciones móviles, IA, marketing digital
              y ciberseguridad. Todo lo que tu empresa necesita para
              escalar, en un solo lugar.
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
            <InteractiveHoverButton className="group  text-black hover:bg-primary/75 bg-primary rounded-sm font-medium text-base">
              Contanos tu proyecto
              {/* <FaArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" /> */}
            </InteractiveHoverButton>
            <Button className="p-5.5 hover:bg-primary/75 hover:text-black text-white border-none bg-primary/10 backdrop-blur-2xl rounded-sm font-medium text-base">
              Nuestros servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 overflow-hidden">
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
