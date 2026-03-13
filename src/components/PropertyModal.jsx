import { TAG_COLORS } from "../data/properties";
import { formatPrice } from "../utils/formatPrice";

export default function PropertyModal({ property, onClose }) {
  if (!property) return null;
  const { title, address, price, beds, baths, sqft, type, status, tag, image, description } = property;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[100] bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="modal-box bg-white border border-stone-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-72 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
          <button onClick={onClose}
            className="absolute top-4 right-4 bg-white text-stone-700 hover:text-stone-900 w-8 h-8 flex items-center justify-center text-lg shadow-md"
            aria-label="Close">×</button>
          <div className="absolute bottom-4 left-6">
            <p className="gold text-xs tracking-widest uppercase font-medium">{type} · {status}</p>
            <h3 className="font-display text-3xl font-light text-white">{title}</h3>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="font-display text-4xl gold font-semibold">{formatPrice(price)}</div>
              <p className="text-stone-400 text-sm mt-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {address}
              </p>
            </div>
            <span className={`status-badge px-3 py-1.5 ${TAG_COLORS[tag] || "bg-stone-600 text-white"}`}>{tag}</span>
          </div>

          <div className="grid grid-cols-3 gap-4 py-5 border-y border-stone-100 mb-6">
            {[["Bedrooms", beds], ["Bathrooms", baths], ["Square Feet", sqft.toLocaleString()]].map(([label, val]) => (
              <div key={label} className="text-center">
                <div className="font-display text-3xl gold">{val}</div>
                <div className="text-stone-400 text-xs tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>

          <p className="text-stone-600 leading-relaxed mb-8">{description}</p>

          <div className="flex gap-4">
            <button className="flex-1 bg-stone-900 text-amber-400 font-semibold tracking-widest uppercase py-4 text-sm hover:bg-stone-800 transition-colors">
              Request Viewing
            </button>
            <button className="flex-1 border border-stone-200 text-stone-600 text-sm tracking-widest uppercase py-4 hover:border-amber-400 hover:text-amber-700 transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
