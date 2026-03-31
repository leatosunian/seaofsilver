const navLinks = ["Capabilities", "Portfolio", "Insights", "Manifesto"];
const govLinks = ["Privacy", "Security", "Terms"];

export default function Footer() {
  return (
    <footer className="bg-black w-full py-24 px-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-[1600px] mx-auto">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="text-xl font-black text-white uppercase tracking-[0.3em] mb-6">
            SOS<span className="text-primary">.</span>TECH
          </div>
          <p className="text-zinc-600 font-label text-[10px] tracking-[0.4em] font-bold mb-12 uppercase leading-relaxed">
            Engineered for the void.
          </p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined text-zinc-700 hover:text-primary cursor-pointer transition-colors text-xl">
              public
            </span>
            <span className="material-symbols-outlined text-zinc-700 hover:text-primary cursor-pointer transition-colors text-xl">
              terminal
            </span>
            <span className="material-symbols-outlined text-zinc-700 hover:text-primary cursor-pointer transition-colors text-xl">
              alternate_email
            </span>
          </div>
        </div>

        {/* Index */}
        <div className="md:col-span-2">
          <h6 className="text-white font-bold uppercase mb-10 text-[10px] tracking-[0.4em]">
            Index
          </h6>
          <ul className="space-y-4 font-label text-[11px] uppercase tracking-widest">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Governance */}
        <div className="md:col-span-2">
          <h6 className="text-white font-bold uppercase mb-10 text-[10px] tracking-[0.4em]">
            Governance
          </h6>
          <ul className="space-y-4 font-label text-[11px] uppercase tracking-widest">
            {govLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-zinc-600 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4">
          <h6 className="text-white font-bold uppercase mb-10 text-[10px] tracking-[0.4em]">
            Newsletter
          </h6>
          <div className="flex border-b border-white/10 focus-within:border-primary transition-colors">
            <input
              type="email"
              placeholder="Subscribe Protocol"
              className="bg-transparent border-0 text-[11px] uppercase tracking-widest focus:ring-0 w-full py-4 px-0 text-white placeholder-zinc-800 outline-none"
            />
            <button className="text-zinc-500 hover:text-primary transition-colors px-4">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1600px] mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-700 font-label text-[9px] font-bold tracking-[0.4em] uppercase">
          © 2024 SOS TECHNOLOGY. MISSION CRITICAL SYSTEMS.
        </p>
        <p className="text-zinc-800 text-[9px] font-bold tracking-[0.5em] uppercase">
          SF • LDN • TKO
        </p>
      </div>
    </footer>
  );
}
