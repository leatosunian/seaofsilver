import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "FINTECH",
    title: "Project: Kinetica",
    description:
      "A real-time visual logic engine for high-frequency trading. Built for sub-millisecond latency and elite-level data precision.",
    tags: ["React / Rust", "Low Latency"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAM4U9EDkA1PLTuH9Xv52KZKYAxD0CNtY5e0SbV59CAElGS-kVz4ASCqJ94r2kJGCreiZe4aqt4JKjOn2DY5X3on652rUEkN6pTrZBXr3vy2bY3V6NsAy9j_-8yoC9EpeVbkNi3ucH9vU0uqaatagsSkfFW1TEpPoP59NNyoiNjWU_J66V-AgaIsQ9yqPTjHeswQNIZ4GW9z63JDo24fF6TkfHrZYVOixABsK7EsdHFVWm7mums0qfXh93OYd6W7QatoaP708bnpkg",
    imageAlt: "Futuristic server room with glowing green lights and high-tech hardware racks in a dark environment",
    reverse: false,
  },
  {
    num: "02",
    category: "AEROSPACE",
    title: "Aero Logistics",
    description:
      "Autonomous supply chain intelligence for global aerospace manufacturing. Reducing logistics friction via AI-driven pathfinding.",
    tags: ["Python AI", "SaaS Core"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuyDPTuas9uShZZPAaONIlX1zWcC6S8YXCI75Q65fdAEBy9plGD_HAcM9DpwIwiAfjMr-Q7Ugzg3hguA-IIyw9twemBpEkbpyq9aL2iom1yGgQ2_jtzNWQOxiEoMfVkqnNrMCDxC8E7k6XtW_aDa8y2oxkK9TS_h2gpktUz-xDUb0eTCc63OtZDdSUVdeseplgu1ZTd3_K18favY343JS4evsknouo1ZTExUzDun8jxCvI62r5-r-z0Qry5J5o5kwpbV55K4c6mKQ",
    imageAlt: "Abstract digital representation of a global network with neon green lines connecting data points across earth from space",
    reverse: true,
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 md:py-40 px-6 md:px-12 bg-surface border-y border-white/5">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-32 md:text-center">
          <span className="text-primary font-label text-[10px] uppercase tracking-[0.4em] font-extrabold mb-4 block">
            CASE STUDIES
          </span>
          <h2 className="font-headline font-extrabold text-3xl md:text-5xl 2xl:text-6xl tracking-tighter uppercase text-white mb-8">
            trabajos relevantes
          </h2>
          <div className="h-px w-24 bg-primary mx-0 md:mx-auto" />
        </div>

        <div className="space-y-20 md:space-y-48">
          {projects.map(({ num, category, title, description, tags, image, imageAlt, reverse }) => (
            <div
              key={num}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center"
            >
              {/* Text */}
              <div
                className={`lg:col-span-5 ${reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}`}
              >
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="text-primary font-bold text-[10px] tracking-widest uppercase">
                    {num} / {category}
                  </span>
                  <div className="h-px flex-1 bg-white/5"></div>
                </div>
                <h3 className="font-headline font-extrabold text-2xl md:text-4xl mb-6 md:mb-8 uppercase tracking-tighter text-white">
                  {title}
                </h3>
                <p className="text-zinc-500 text-base md:text-lg mb-6 md:mb-10 leading-relaxed font-light">
                  {description}
                </p>
                <div className="flex gap-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 border border-white/10 text-[9px] font-bold tracking-[0.2em] text-zinc-400 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`lg:col-span-7 ${reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}
              >
                <div className="aspect-[16/9] border border-white/5 p-1 hover:border-primary/30 transition-all duration-700">
                  <div className="w-full h-full bg-zinc-950 overflow-hidden relative group">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
