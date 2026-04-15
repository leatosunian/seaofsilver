import logo from "@/public/logo_w.png";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";

const navLinks = ["Capabilities", "Portfolio", "Insights", "Manifesto"];
const govLinks = ["Privacy", "Security", "Terms"];

export default function Footer() {
  return (
    <footer className="relative bg-background w-full overflow-hidden">
      {/* Subtle technical grid — same pattern as Hero */}
      <div className="absolute inset-0 hero-pattern opacity-[0.035] pointer-events-none" />

      {/* Primary-tinted separator from section above */}
      <div className="technical-line h-px" />

      <div className="py-24 px-12 relative">
        <div className="max-w-400 mx-auto">

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

            {/* Brand */}
            <div className="md:col-span-4 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary font-label text-[10px] uppercase tracking-[0.4em] font-black">
                  Software Factory
                </span>
              </div>
              <Image src={logo} alt="Sea of Silver logo" className="w-28 mb-6" />
              <p className="text-zinc-600 font-label text-[11px] tracking-[0.18em] uppercase leading-relaxed mb-10 max-w-xs">
                Soluciones digitales que transforman negocios. Código que escala.
              </p>
              {/* Social icons — badge style matching WhyUs/Services */}
              <div className="flex gap-2.5">
                <a
                  href="mailto:hello@sos-tech.io"
                  className="w-9 h-9 flex items-center justify-center bg-white/3 border border-white/5 rounded hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary text-[17px] transition-colors">
                    mail
                  </span>
                </a>
                <a
                  href="https://instagram.com/seaofsilver_oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/3 border border-white/5 rounded hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-zinc-600 group-hover:text-primary text-[15px] transition-colors" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5492235423025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/3 border border-white/5 rounded hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 group"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-zinc-600 group-hover:text-primary text-[15px] transition-colors" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-2">
              <h6 className="text-white font-bold uppercase mb-4 text-[10px] tracking-[0.4em]">
                Navegación
              </h6>
              <div className="h-px w-6 bg-primary/40 mb-8" />
              <ul className="space-y-4 font-label text-[11px] uppercase tracking-widest">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-zinc-600 hover:text-primary transition-colors duration-200 group"
                    >
                      <span className="block w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance */}
            <div className="md:col-span-2">
              <h6 className="text-white font-bold uppercase mb-4 text-[10px] tracking-[0.4em]">
                Governance
              </h6>
              <div className="h-px w-6 bg-primary/40 mb-8" />
              <ul className="space-y-4 font-label text-[11px] uppercase tracking-widest">
                {govLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-2 text-zinc-600 hover:text-primary transition-colors duration-200 group"
                    >
                      <span className="block w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div className="md:col-span-4">
              <h6 className="text-white font-bold uppercase mb-4 text-[10px] tracking-[0.4em]">
                Contacto
              </h6>
              <div className="h-px w-6 bg-primary/40 mb-8" />
              <p className="text-zinc-600 font-label text-[11px] tracking-[0.12em] uppercase leading-relaxed mb-8">
                Seguí las últimas novedades de Sea Of Silver.
              </p>
              <div className="flex border-b border-white/10 focus-within:border-primary transition-colors duration-300">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-transparent border-0 text-[11px] uppercase tracking-widest focus:ring-0 w-full py-4 px-0 text-white placeholder-zinc-700 outline-none"
                />
                <button
                  className="text-zinc-600 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(142,255,113,0.5)] transition-all duration-300 px-4"
                  aria-label="Suscribirse"
                >
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-700 font-label text-[9px] font-bold tracking-[0.22em] uppercase">
              © 2026 SEA OF SILVER. ALL RIGHTS RESERVED.
            </p>
            <p className="text-zinc-800 font-label text-[9px] font-bold tracking-[0.5em] uppercase">
              SF · LDN · TKO
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
