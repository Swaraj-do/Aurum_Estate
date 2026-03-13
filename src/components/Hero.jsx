import { STATS } from "../data/properties";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=90"
          alt="Luxury property"
          className="w-full h-full object-cover object-center"
        />
        {/* gradient: dark on top for text clarity, fades to white at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-900/60 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/55 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-36 w-full">
        <div className="max-w-3xl">
          <p
            className="hero-text gold text-xs tracking-[0.38em] uppercase mb-6 font-semibold"
            style={{ animationDelay: "0.2s" }}
          >
            Premium Real Estate Since 1987
          </p>

          <h1
            className="hero-text font-display text-6xl md:text-8xl leading-none mb-6 font-light text-white"
            style={{ animationDelay: "0.4s" }}
          >
            Where Luxury
            <br />
            <em className="gold not-italic">Finds</em> Home
          </h1>

          <p
            className="hero-text text-stone-200 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl"
            style={{ animationDelay: "0.6s" }}
          >
            Curated portfolio of the world's most exceptional residential
            properties. From Manhattan penthouses to Malibu cliff villas.
          </p>

          <div
            className="hero-text flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="#properties"
              className="bg-gold text-white font-semibold tracking-widest uppercase px-8 py-4 text-sm hover:bg-amber-700 transition-colors text-center shadow-lg"
            >
              Explore Properties
            </a>
            <button className="border border-white/60 text-white font-medium tracking-widest uppercase px-8 py-4 text-sm hover:border-amber-400 hover:text-amber-300 transition-colors backdrop-blur-sm bg-white/5">
              Private Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar — sits at the very bottom, on the white fade zone */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-stone-200 shadow-xl grid grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="py-6 px-8 border-r border-stone-100 last:border-r-0 text-center"
              >
                <div className="font-display text-3xl gold font-semibold">{s.value}</div>
                <div className="text-stone-400 text-xs tracking-widest uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
