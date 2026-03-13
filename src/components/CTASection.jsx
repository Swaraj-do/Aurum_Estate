export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80"
        alt="Luxury estate CTA"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/85" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">
        <p className="gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
          Begin Your Journey
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light mb-6 leading-tight">
          Ready to Find Your{" "}
          <em className="not-italic gold">Extraordinary</em> Home?
        </h2>
        <p className="text-stone-300 text-lg font-light mb-10 max-w-xl mx-auto">
          Schedule a private consultation with one of our senior advisors and
          begin your search for the perfect residence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gold text-stone-900 font-semibold tracking-widest uppercase px-10 py-4 text-sm hover:bg-amber-300 transition-colors">
            Book Consultation
          </button>
          <button className="border border-stone-400 text-stone-200 font-medium tracking-widest uppercase px-10 py-4 text-sm hover:border-gold hover:text-amber-400 transition-colors">
            +1 (800) AURUM-RE
          </button>
        </div>
      </div>
    </section>
  );
}
