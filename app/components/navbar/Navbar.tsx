import Image from "next/image";
import logo from "@/public/logo_w.png";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/app/components/ui/navigation-menu";

// ─── To add/remove/rename a service: edit this array ────────────────────────
// num    → decorative label shown inside the dropdown (purely visual)
// title  → the text of the menu item
// href   → where clicking the item navigates to
const navServices = [
  { num: "01", title: "Software a Medida",     href: "#services" },
  { num: "02", title: "Web · iOS · Android",   href: "#services" },
  { num: "03", title: "Diseño de Producto",     href: "#services" },
  { num: "04", title: "Testing & QA",          href: "#services" },
  { num: "05", title: "Ciberseguridad",        href: "#services" },
  { num: "06", title: "IA y Automatizaciones", href: "#services" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-12 py-4 max-w-400 mx-auto">

        {/* LOGO */}
        <div className="flex items-center justify-center gap-3 text-xl font-extrabold tracking-[0.2em] text-white uppercase font-headline">
          <Image src={logo} alt="SOS.TECH" className="" width={55} height={55} />
          {/* <span className="text-sm tracking-wide">SEA OF SILVER</span> */}
        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center space-x-12 font-label text-[11px] uppercase tracking-[0.3em] font-medium">

          {/* ── Servicios – NavigationMenu (hover + keyboard, viewport=false) ── */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>

                {/*
                  NavigationMenuTrigger already includes the rotating ChevronDownIcon.
                  We strip its default background/padding/size so it blends with the
                  rest of the nav links, then re-apply our own type styles.
                  ─── classes to know ──────────────────────────────────────────────
                  h-auto p-0           → remove fixed height & padding from defaults
                  bg-transparent …     → kill the muted-background states
                  text-primary         → neon green to mark it as the active section
                  font-label …         → match surrounding nav link typography
                  rounded-none         → no radius (design system rule)
                */}
                <NavigationMenuTrigger className="h-auto p-0 rounded-none bg-transparent hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent data-open:hover:bg-transparent data-popup-open:hover:bg-transparent data-open:focus:bg-transparent text-white hover:text-primary font-label text-[11px] uppercase tracking-[0.3em] font-medium shadow-none">
                  Servicios
                </NavigationMenuTrigger>

                {/*
                  viewport={false} on <NavigationMenu> makes the content panel render
                  directly below the trigger (position: absolute, top-full) with a
                  300ms animate-in/out.  We override only what needs to change:
                  ─── classes to know ──────────────────────────────────────────────
                  bg-[#050505]         → page background color (#050505 = bg-background)
                  border-white/5       → barely-visible border (design system rule)
                  rounded-xl           → matches the dropdown the user set previously
                  shadow-[…]           → primary-tinted glow (no black shadows rule)
                  p-0                  → we handle padding per item
                */}
                <NavigationMenuContent className="bg-[#050505]/80 backdrop-blur-2xl border-none ring-1 ring-[#141415] rounded-xl shadow-[0_8px_32px_rgba(142,255,113,0.06)] p-0 min-w-64">
                  {navServices.map(({ num, title, href }) => (
                    /*
                      NavigationMenuLink wraps each item for correct keyboard nav
                      and active-state tracking.  asChild delegates the rendered
                      element to next/link for client-side routing.
                      ─── classes to know ──────────────────────────────────────
                      hover:bg-white/4  → subtle row highlight
                      hover:text-primary     → neon green on hover
                      rounded-none           → sharp edges inside the panel
                      px-5 py-3.5            → comfortable click target
                    */
                    <NavigationMenuLink key={num} asChild>
                      <Link
                        href={href}
                        className="flex items-center backdrop-blur-xl gap-3 px-5 py-4 rounded-none hover:bg-white/4 group/item transition-colors"
                      >
                        {/* Decorative number */}
                        {/* <span className="text-primary/30 text-[9px] font-black italic w-5 shrink-0">
                          {num}
                        </span> */}
                        {/* Service name */}
                        <span className="text-zinc-400 group-hover/item:text-primary font-label text-[11px] uppercase tracking-[0.2em] font-medium transition-colors">
                          {title}
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>

              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a href="#" className="text-white hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            nosotros
          </a>
          <a href="#" className="text-white hover:text-primary transition-colors">
            Contacto
          </a>
        </div>

        {/* CTA BUTTON */}
        <Link href="/contact">
          <Button className="border bg-primary-fixed rounded-sm border-white/10 px-5 py-4 text-[11px] uppercase tracking-wider font-bold hover:bg-white text-black transition-all duration-300">
            Solicitar presupuesto
          </Button>
        </Link>

      </div>
    </nav>
  );
}
