"use client";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { FaArrowRight, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { ShineBorder } from "@/components/ui/shine-border";

const inputClass =
  "h-11 bg-zinc-950 border border-zinc-800 text-white placeholder:text-zinc-600 rounded focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/15 transition-all duration-200";

const labelClass = "text-[10px] font-extrabold uppercase tracking-widest text-zinc-500";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-40 px-6 md:px-12 bg-surface">
      <div className="max-w-400 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        {/* Left — 7/12 ≈ 3/5 */}
        <div className="lg:col-span-7">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-4 block">
            TRABAJEMOS JUNTOS
          </span>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl 2xl:text-6xl tracking-tighter uppercase mb-8 text-white">
            HABLEMOS DE
            TU PROYECTO<span className="text-primary">.</span>
          </h2>
          <div className="h-px w-24 bg-primary mb-8 md:mb-12" />
          <p className="text-zinc-400 text-xl mbe-12 leading-relaxed font-light w-full">
            Comencemos a desarrollar la solucion que tu empresa necesita. Envíanos un mensaje con los detalles de tu proyecto y nos pondremos en contacto para llevar tu negocio a otro nivel.
          </p>
          <div className="space-y-3 max-w-sm">
            {/* Email */}
            <Link
              href="mailto:silverofseaofficial@gmail.com"
              className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-500/25 to-violet-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-indigo-400 text-[18px]">mail</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-600 block mb-0.5">Correo electrónico</span>
                <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors duration-200 block">seaofsilver@gmail.com</span>
              </div>
              <FaArrowRight className="text-zinc-700 text-xs group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
            </Link>

            {/* WhatsApp 1 */}
            <Link
              href="https://api.whatsapp.com/send?phone=5492235809709"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/20 to-emerald-500/10 border border-primary/20 flex items-center justify-center shrink-0">
                <FaWhatsapp className="text-primary text-[17px]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-600 block mb-0.5">WhatsApp</span>
                <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors duration-200 block">+54 9 223 5809709</span>
              </div>
              <FaArrowRight className="text-zinc-700 text-xs group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
            </Link>

            {/* WhatsApp 2 */}
            <Link
              href="https://api.whatsapp.com/send?phone=5492235423025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/20 to-emerald-500/10 border border-primary/20 flex items-center justify-center shrink-0">
                <FaWhatsapp className="text-primary text-[17px]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-600 block mb-0.5">WhatsApp</span>
                <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors duration-200 block">+54 9 223 5423025</span>
              </div>
              <FaArrowRight className="text-zinc-700 text-xs group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
            </Link>

            {/* WhatsApp 2 */}
            {/* <Link
              href="https://api.whatsapp.com/send?phone=5492235423025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary/20 to-emerald-500/10 border border-primary/20 flex items-center justify-center shrink-0">
                <FaWhatsapp className="text-primary text-[17px]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-600 block mb-0.5">WhatsApp</span>
                <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors duration-200 block">+54 9 223 542-3025</span>
              </div>
              <FaArrowRight className="text-zinc-700 text-xs group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
            </Link> */}

            {/* Instagram */}
            <Link
              href="https://instagram.com/seaofsilver_oficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-pink-500/25 to-purple-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                <FaInstagram className="text-pink-400 text-[17px]" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-600 block mb-0.5">Instagram</span>
                <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors duration-200 block">@seaofsilver_oficial</span>
              </div>
              <FaArrowRight className="text-zinc-700 text-xs group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
            </Link>

            {/* Location — no link */}
            {/* <div className="flex items-center gap-4 p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-zinc-700/50 to-zinc-800/20 border border-zinc-700/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-zinc-400 text-[18px]">location_on</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-600 block mb-0.5">Ubicación</span>
                <span className="text-sm font-bold text-zinc-200 block">Worldwide</span>
              </div>
            </div> */}
          </div>
        </div>

        {/* Right — 5/12 ≈ 2/5 */}
        <Card className="relative bg-[#0d0d0d] w-full overflow-hidden lg:col-span-5 border-0 ring-0 shadow-[0_0_60px_rgba(142,255,113,0.05),0_0_120px_rgba(142,255,113,0.05)]">
          <ShineBorder shineColor={["#8eff71", "#2ff801", "#8eff71"]} />
          {/* Top accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-10 bg-primary/5 blur-2xl pointer-events-none" />

          <CardHeader className="pt-8 pb-5 px-7">
            <div className="mb-1">
              <CardTitle className="font-headline font-extrabold tracking-tighter uppercase text-white text-2xl mb-2">
                Contáctanos
              </CardTitle>
              <div className="w-8 h-px bg-primary" />
            </div>
            <CardDescription className="text-zinc-500 text-base leading-relaxed">
              Completá el formulario y te respondemos a la brevedad.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-7 pb-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://api.whatsapp.com/send?phone=5492235423025", "_blank");
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className={labelClass}>Nombre</label>
                  <Input id="name" type="text" placeholder="Juan" className={inputClass} />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="surname" className={labelClass}>Apellido</label>
                  <Input id="surname" type="text" placeholder="García" className={inputClass} />
                </div>
              </div>

              {/* <div className="grid gap-2">
                <label htmlFor="email" className={labelClass}>Email</label>
                <Input id="email" type="email" placeholder="juan@empresa.com" className={inputClass} />
              </div> */}

              <div className="grid gap-2">
                <label htmlFor="message" className={labelClass}>Mensaje</label>
                <Textarea
                  id="message"
                  placeholder="Contanos sobre tu proyecto..."
                  className={`${inputClass} min-h-36 resize-none h-auto py-3`}
                />
              </div>

              <Button
                type="submit"
                className="group w-full mt-2 h-12 bg-primary hover:bg-primary/80 rounded-sm font-semibold text-sm tracking-wide text-black shadow-[0_0_20px_rgba(142,255,113,0.15)] hover:shadow-[0_0_28px_rgba(142,255,113,0.3)] transition-all duration-300"
              >
                Enviar mensaje
                <FaArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
