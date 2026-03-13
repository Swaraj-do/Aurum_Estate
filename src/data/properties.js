export const PROPERTIES = [
  {
    id: 1,
    title: "The Meridian Penthouse",
    address: "1420 Skyline Blvd, Manhattan, NY",
    price: 8750000,
    beds: 4,
    baths: 3,
    sqft: 3840,
    type: "Penthouse",
    status: "For Sale",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description:
      "Floor-to-ceiling glass walls reveal a 360° panorama of the city skyline. Bespoke Italian marble, chef's kitchen, and a wraparound terrace with unobstructed views of Central Park and the Hudson River.",
  },
  {
    id: 2,
    title: "Willow Creek Estate",
    address: "84 Magnolia Lane, The Hamptons, NY",
    price: 5200000,
    beds: 6,
    baths: 5,
    sqft: 6200,
    type: "Villa",
    status: "For Sale",
    tag: "New",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    description:
      "Set on 2.4 acres of manicured grounds, this Hamptons estate blends colonial architecture with contemporary interiors. Features a heated pool, tennis court, and a detached guest cottage.",
  },
  {
    id: 3,
    title: "Harbour Crest Residence",
    address: "210 Marina Drive, Miami Beach, FL",
    price: 3950000,
    beds: 3,
    baths: 3,
    sqft: 2900,
    type: "Condo",
    status: "For Sale",
    tag: "Sold Out",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description:
      "Direct ocean frontage with private beach access. Sunrise views, resort-style amenities, and interiors by a world-renowned design studio. Floor-to-ceiling glass throughout.",
  },
  {
    id: 4,
    title: "The Atelier Loft",
    address: "55 West Chelsea, New York, NY",
    price: 2100000,
    beds: 2,
    baths: 2,
    sqft: 1850,
    type: "Loft",
    status: "For Rent",
    tag: "New",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    description:
      "Industrial-chic loft in the heart of Chelsea with exposed brick, soaring ceilings, and proximity to world-class galleries. Open-plan living with a private rooftop terrace.",
  },
  {
    id: 5,
    title: "Ridgeline Mountain Retreat",
    address: "9 Summit Trail, Aspen, CO",
    price: 6800000,
    beds: 5,
    baths: 4,
    sqft: 5100,
    type: "Villa",
    status: "For Sale",
    tag: "Featured",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    description:
      "Ski-in/ski-out access from this architect-designed mountain retreat. Reclaimed timber, stone fireplaces, and glass walls framing Rocky Mountain peaks. Private hot tub and wine cellar.",
  },
  {
    id: 6,
    title: "Pacific Cliffside Villa",
    address: "3 Coastal Ridge, Malibu, CA",
    price: 11500000,
    beds: 5,
    baths: 6,
    sqft: 7400,
    type: "Villa",
    status: "For Sale",
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    description:
      "Perched atop Malibu's most coveted bluff, this cliffside villa offers unobstructed Pacific views, a vanishing edge pool, home cinema, and a private wine cellar with sommelier service.",
  },
];

export const STATS = [
  { value: "2,400+", label: "Properties Listed" },
  { value: "$18B+", label: "Total Transaction Value" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24", label: "Global Markets" },
];

export const AGENTS = [
  {
    name: "Victoria Chen",
    title: "Senior Luxury Advisor",
    deals: "142 Deals Closed",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Marcus Holt",
    title: "Investment Specialist",
    deals: "98 Deals Closed",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
  },
  {
    name: "Isabelle Moreau",
    title: "International Liaison",
    deals: "87 Deals Closed",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
];

export const SERVICES = [
  {
    icon: "🏛️",
    title: "Acquisition Advisory",
    desc: "Bespoke guidance for discerning buyers seeking rare residential assets across global luxury markets.",
  },
  {
    icon: "📊",
    title: "Portfolio Investment",
    desc: "Strategic real estate investment counsel for high-net-worth individuals seeking to diversify with tangible assets.",
  },
  {
    icon: "🔑",
    title: "Property Management",
    desc: "Full-service concierge management for your residential portfolio, from maintenance to tenancy oversight.",
  },
  {
    icon: "🌍",
    title: "International Relocation",
    desc: "End-to-end relocation services with deep knowledge of cross-border property laws and cultural nuances.",
  },
  {
    icon: "📐",
    title: "Design & Renovation",
    desc: "Curated network of world-class architects and interior designers to transform properties into masterpieces.",
  },
  {
    icon: "⚖️",
    title: "Legal & Compliance",
    desc: "In-house legal experts specializing in real estate transactions, title insurance, and estate planning.",
  },
];

export const TAG_COLORS = {
  Featured: "bg-amber-400 text-stone-900",
  New: "bg-emerald-500 text-white",
  "Sold Out": "bg-stone-500 text-white",
  Luxury: "bg-rose-500 text-white",
};

export const FILTERS = ["All", "For Sale", "For Rent", "Penthouse", "Villa", "Loft", "Condo"];
