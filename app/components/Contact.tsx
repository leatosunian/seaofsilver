export default function Contact() {
  return (
    <section className="py-40 px-12 bg-background">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left */}
        <div className="lg:col-span-5">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-8 block">
            CONTACT HUB
          </span>
          <h2 className="font-headline font-extrabold text-6xl md:text-8xl tracking-tighter uppercase mb-12 text-white">
            Initiate <br /> Project<span className="text-primary">.</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-16 leading-relaxed font-light">
            Ready to construct the future? Our technical leads are standing by
            to audit your mission requirements.
          </p>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">mail</span>
              <span className="text-sm tracking-widest text-zinc-300 font-bold">
                hello@sos-tech.io
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary">
                location_on
              </span>
              <span className="text-sm tracking-widest text-zinc-300 font-bold uppercase">
                Engineering Hub, San Francisco
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <div className="glass-card p-12 md:p-16 border border-white/5 relative">
            <div className="absolute top-0 right-0 p-8">
              <div className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest">
                Encrypted Transmission
              </div>
            </div>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="font-label text-[10px] uppercase font-bold tracking-widest mb-4 block text-zinc-500 group-focus-within:text-primary transition-colors">
                    Identity
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-primary transition-all py-4 px-0 text-white placeholder-zinc-800 text-sm outline-none"
                  />
                </div>
                <div className="group">
                  <label className="font-label text-[10px] uppercase font-bold tracking-widest mb-4 block text-zinc-500 group-focus-within:text-primary transition-colors">
                    Protocol
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-primary transition-all py-4 px-0 text-white placeholder-zinc-800 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="group">
                <label className="font-label text-[10px] uppercase font-bold tracking-widest mb-4 block text-zinc-500 group-focus-within:text-primary transition-colors">
                  Mission Parameters
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the operational void..."
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:ring-0 focus:border-primary transition-all py-4 px-0 text-white placeholder-zinc-800 text-sm resize-none outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black font-headline font-bold py-6 uppercase text-xs tracking-[0.4em] hover:bg-primary transition-all duration-500"
              >
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
