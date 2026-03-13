import { useState } from "react";
import { PROPERTIES } from "../data/properties";
import PropertyCard from "./PropertyCard";
import PropertyModal from "./PropertyModal";
import SearchFilter from "./SearchFilter";

export default function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filtered = PROPERTIES.filter((p) => {
    const matchFilter = activeFilter === "All" || p.status === activeFilter || p.type === activeFilter;
    const matchSearch = !searchTerm || p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

      <section id="properties" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-14 reveal">
          <p className="gold text-xs tracking-[0.3em] uppercase font-medium mb-3">Our Portfolio</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-stone-900">
            Exceptional <em className="not-italic gold">Residences</em>
          </h2>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone-400">
            <div className="font-display text-5xl mb-4">∅</div>
            <p className="tracking-widest uppercase text-sm">No properties match your search</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} delay={i * 0.1} onClick={() => setSelectedProperty(p)} />
            ))}
          </div>
        )}

        
      </section>

      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </>
  );
}
