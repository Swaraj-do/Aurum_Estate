import { SERVICES } from "../data/properties";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-stone-50 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="gold text-xs tracking-[0.3em] uppercase font-medium mb-3">What We Offer</p>
          <h2 className="font-display text-5xl font-light text-stone-900">
            Our <em className="not-italic gold">Services</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="p-8 bg-white border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all duration-300 group reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-display text-xl font-medium mb-3 text-stone-900 group-hover:text-amber-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
