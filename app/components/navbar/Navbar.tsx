import Image from "next/image";
import logo from "@/public/logo_w.png"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center px-12 py-6 max-w-400 mx-auto">
        {/* LOGO */}
        <div className="text-xl font-extrabold tracking-[0.2em] text-white uppercase font-headline">
          <Image src={logo} alt="SOS.TECH" className="h-10 w-10" />
          <span>SEA OF SILVER</span>
        </div>
        {/* NAV LINKS */}
        <div className="hidden md:flex items-center space-x-12 font-label text-[11px] uppercase tracking-[0.3em] font-medium">
          <a href="#" className="text-primary transition-colors">
            Services
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            Insights
          </a>
          <a href="#" className="text-zinc-500 hover:text-white transition-colors">
            Contact
          </a>
        </div>
        {/* CTA BUTTON */}
        <button className="border border-white/10 px-8 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-300">
          Solicitar presupuesto
        </button>
      </div>
    </nav>
  );
}
