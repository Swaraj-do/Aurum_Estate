import { TAG_COLORS } from "../data/properties";
import { formatPrice } from "../utils/formatPrice";

export default function PropertyCard({ property, onClick, delay = 0 }) {
  const { title, address, price, beds, baths, sqft, type, status, tag, image } = property;

  return (
    <article
      className="card-hover bg-white border border-stone-200 overflow-hidden cursor-pointer group reveal shadow-sm hover:shadow-lg"
      style={{ animationDelay: `${delay}s` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-60 img-zoom">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-75" />
        <div className="absolute top-4 left-4 flex gap-2 items-center">
          <span className={`status-badge px-2.5 py-1 rounded-sm ${TAG_COLORS[tag] || "bg-stone-600 text-white"}`}>{tag}</span>
          <span className="status-badge px-2.5 py-1 bg-black/50 text-white rounded-sm">{status}</span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="font-display text-2xl text-white font-semibold drop-shadow-lg">{formatPrice(price)}</span>
        </div>
      </div>

      <div className="p-6">
        <p className="gold text-xs tracking-widest uppercase font-medium mb-1">{type}</p>
        <h3 className="font-display text-2xl font-light mb-1 text-stone-900 group-hover:text-amber-700 transition-colors">{title}</h3>
        <p className="text-stone-400 text-sm mb-4 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {address}
        </p>
        <div className="flex items-center gap-5 text-stone-400 text-xs border-t border-stone-100 pt-4">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            {beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>
    </article>
  );
}
