import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 bg-surface">
      <div className="mb-16 md:mb-14 text-left md:text-center">
        <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-6 block">
          CLIENTES QUE CONFÍAN
        </span>
        <h2 className="font-headline font-extrabold text-3xl md:text-5xl 2xl:text-6xl  tracking-tighter uppercase text-white mb-8">
          CADA PROYECTO DEJA UNA HISTORIA<span className="text-primary">.</span>
        </h2>
        <div className="h-px w-24 bg-primary mx-0 md:mx-auto"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center">


        <span className="material-symbols-outlined text-zinc-800 text-6xl mb-8 md:mb-12 block">
          format_quote
        </span>
        <p className="font-headline text-xl md:text-3xl lg:text-4xl italic mb-10 md:mb-16 leading-[1.2] text-white font-light">
          &ldquo;SOS Technology didn&apos;t just build our app; they
          re-engineered our entire digital philosophy. The speed and precision
          they operate with is{" "}
          <span className="text-primary">unmatched</span>.&rdquo;
        </p>
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrK4IR8FXVIT5dJtmw2OHPTTxyt8C-72Tia4nFFr1rrlSz4fzFXiUxdT91MuT2gu8mMk7pON9IRoiiPHgSkQ-tCIOZrhxIqHB-BXj4bIwDaJXGBTh21YGbaZC5lYg9JgvMbCU3H57jsYEPoYTnDzndBfz5PT5fHM-oelqPyTa52bd6QMhGhGOwZNf1ho3MAZ8vHVpDyVG-Hh9eiVvgfQX3ML4_LNzFM8ckx8zmjISdYmXPxjP-gEtShDIjYSJcIDM2o3N2K9VKD2Q"
              alt="Professional portrait of Marcus Sterling, CTO of Nova Systems"
              width={80}
              height={80}
              className="rounded-full grayscale border border-white/10 p-1"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-black text-[14px]">
                check
              </span>
            </div>
          </div>
          <h6 className="font-headline font-bold uppercase tracking-widest text-white mb-1">
            Marcus Sterling
          </h6>
          <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.3em]">
            CTO, Nova Systems / Enterprise Partner
          </p>
        </div>
      </div>
    </section>
  );
}
