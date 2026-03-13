import { AGENTS } from "../data/properties";

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-14 reveal">
        <p className="gold text-xs tracking-[0.3em] uppercase font-medium mb-3">The Team</p>
        <h2 className="font-display text-5xl font-light text-stone-900">
          Our <em className="not-italic gold">Advisors</em>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {AGENTS.map((a, i) => (
          <div key={i} className="group text-center reveal" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="relative overflow-hidden mb-5 aspect-[3/4] img-zoom">
              <img src={a.img} alt={a.name} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <button className="bg-gold text-white text-xs font-semibold tracking-widest uppercase px-6 py-2.5 hover:bg-amber-700 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
            <h3 className="font-display text-2xl font-light text-stone-900">{a.name}</h3>
            <p className="gold text-xs tracking-widest uppercase mt-1">{a.title}</p>
            <p className="text-stone-400 text-xs mt-1">{a.deals}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
