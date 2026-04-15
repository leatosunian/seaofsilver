"use client";
import { ShineBorder } from "@/components/ui/shine-border";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";


export default function Contact() {
  return (
    <section className="py-40 px-12 bg-surface">
      <div className="max-w-400 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left */}
        <div className="lg:col-span-5">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.5em] font-extrabold mb-8 block">
            TRABAJEMOS JUNTOS
          </span>
          <h2 className="font-headline font-extrabold text-6xl 2xl:text-7xl tracking-tighter uppercase mb-12 text-white">
            HABLEMOS DE
            TU PROYECTO<span className="text-primary">.</span>
          </h2>
          <p className="text-zinc-500 text-xl mb-16 leading-relaxed font-light">
            Comencemos a desarrollar la solucion que tu empresa necesita. Envíanos un mensaje con los detalles de tu proyecto y nos pondremos en contacto para llevar tu negocio a otro nivel.
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
        <Card className="relative bg-surface px-3 py-6 w-full max-w-87.5 overflow-hidden lg:col-span-7">
          <ShineBorder shineColor={["#8eff71", "#2ff801", "#8eff71"]} />
          <CardHeader>
            <CardTitle className="font-headline font-extrabold tracking-tighter uppercase text-white text-2xl ">Contáctanos</CardTitle>
            <CardDescription className="text-zinc-500">
              Completá el formulario y te respondemos a la brevedad.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => {
              e.preventDefault();
              window.open("https://api.whatsapp.com/send?phone=5492235423025", "_blank");
            }}
            className="h-full flex flex-col justify-between items-stretch">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <span className="text-sm text-zinc-400 font-medium">Nombre</span>
                    <Input id="name" type="text" placeholder="Juan" />
                  </div>
                  <div className="grid gap-2">
                    <span className="text-sm text-zinc-400 font-medium">Apellido</span>
                    <Input id="surname" type="text" placeholder="García" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <span className="text-sm text-zinc-400 font-medium">Mensaje</span>
                  <Textarea id="message" placeholder="Contanos sobre tu proyecto..." className="min-h-32 resize-none" />
                </div>
              </div>
              <Button type="submit" className="group p-5.5 mt-10 hover:bg-primary/75 bg-primary rounded-sm font-medium text-base">
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
