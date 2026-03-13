export default function AboutSection() {
  return (
    <section id="about" className="py-28 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="gold text-xs tracking-[0.3em] uppercase font-medium mb-4 reveal">Our Story</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6 text-stone-900 reveal delay-1">
            A Legacy of<br /><em className="not-italic gold">Exceptional</em><br />Real Estate
          </h2>
          <p className="text-stone-500 leading-relaxed mb-6 reveal delay-2">
            Since 1987, Aurum Estate has represented the finest residential
            properties across North America and Europe. Our philosophy is
            simple: every client deserves a property that surpasses their imagination.
          </p>
          <p className="text-stone-500 leading-relaxed mb-8 reveal delay-3">
            We don't list properties. We curate legacies. Each listing is
            personally verified by our senior advisors to ensure it meets the
            Aurum standard of architectural distinction, location rarity, and lasting value.
          </p>
          <div className="flex gap-8 reveal delay-4">
            <div>
              <div className="font-display text-4xl gold font-semibold">37</div>
              <div className="text-stone-400 text-xs tracking-widest uppercase mt-1">Years Experience</div>
            </div>
            <div className="border-l border-stone-200 pl-8">
              <div className="font-display text-4xl gold font-semibold">$2.4B</div>
              <div className="text-stone-400 text-xs tracking-widest uppercase mt-1">Sold This Year</div>
            </div>
            <div className="border-l border-stone-200 pl-8">
              <div className="font-display text-4xl gold font-semibold">14</div>
              <div className="text-stone-400 text-xs tracking-widest uppercase mt-1">Award Wins</div>
            </div>
          </div>
        </div>

        <div className="relative reveal delay-2">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Luxury interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white border border-stone-200 shadow-lg p-6 w-52">
            <div className="font-display text-3xl gold font-semibold">★ 4.98</div>
            <div className="text-stone-500 text-xs tracking-widest uppercase mt-1">Average Rating</div>
            <div className="text-stone-400 text-xs mt-0.5">from 2,400+ clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
