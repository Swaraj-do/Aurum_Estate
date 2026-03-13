import { FILTERS } from "../data/properties";

export default function SearchFilter({ searchTerm, setSearchTerm, activeFilter, setActiveFilter }) {
  return (
    <section className="bg-white border-b border-stone-100 py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 relative w-full">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by location, property name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 text-stone-800 pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`text-xs tracking-widest uppercase px-4 py-2.5 transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-stone-900 text-amber-400 font-semibold"
                    : "border border-stone-200 text-stone-500 hover:border-amber-400 hover:text-amber-700 bg-white"
                }`}>
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
