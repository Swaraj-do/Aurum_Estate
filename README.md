# 🏛️ Aurum Estate — Luxury Real Estate Website

A fully responsive, production-ready luxury real estate frontend built with **React.js** and **Tailwind CSS**. Designed with a clean white theme, cinematic hero section, and smooth animations throughout.

---

## 🌐 Live Demo

[🔗 Live Demo](https://aurum-estate-ko7y.vercel.app)

---

## 📸 Preview

![Hero Section](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80)

---

## ✨ Features

- **Responsive Navbar** — Transparent over hero, turns white on scroll, mobile hamburger menu
- **Hero Section** — Full-screen background image with gradient fade into white page
- **Live Search & Filter** — Filter properties by type (Villa, Loft, Condo) or status (For Sale, For Rent) in real time
- **Property Cards** — Hover animations, image zoom, price badge, and tag labels
- **Property Detail Modal** — Click any card to open a full detail view with stats and CTA buttons
- **About Section** — Company story, key metrics, and a floating rating card
- **Services Section** — 6 service cards with hover effects
- **Agents Section** — Team showcase with hover-reveal profile buttons
- **CTA Banner** — Full-bleed image section with call to action
- **Contact Form** — Fully functional form with success state on submission
- **Footer** — Dark footer with logo, copyright, and legal links

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js 18 | Component-based UI |
| Tailwind CSS 3 | Utility-first styling |
| Google Fonts | Cormorant Garamond + DM Sans |
| Unsplash API | Property & agent images |
| CSS Animations | Scroll reveal, hero text, modal transitions |

---

## 📁 Project Structure
```
aurum-estate/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive navbar with scroll effect
│   │   ├── Hero.jsx            # Hero with background image + stats bar
│   │   ├── SearchFilter.jsx    # Search input + filter buttons
│   │   ├── PropertiesSection.jsx
│   │   ├── PropertyCard.jsx    # Individual property card
│   │   ├── PropertyModal.jsx   # Property detail modal
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── AgentsSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── ContactSection.jsx  # Form with success state
│   │   └── Footer.jsx
│   ├── data/
│   │   └── properties.js       # All static data
│   ├── utils/
│   │   └── formatPrice.js      # Price formatting helper
│   ├── styles/
│   │   └── global.css          # Custom animations & global styles
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm

### Installation & Running Locally
```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/aurum-estate.git

# 2. Navigate into the project
cd aurum-estate

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

---

## 🎨 Design Decisions

- **White background theme** — Clean, professional feel suited for a luxury brand
- **Hero image with gradient fade** — The background image fades smoothly into the white page using a CSS gradient overlay, creating a seamless transition
- **Cormorant Garamond** — Chosen as the display font for its elegant, editorial quality that matches the luxury real estate aesthetic
- **Gold accent color (#C9A84C)** — Used consistently across headings, icons, and CTAs to establish a premium brand identity
- **Dark footer** — Provides visual grounding and contrast against the white body

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| Mobile (< 768px) | Single column, hamburger nav |
| Tablet (768px+) | Two column grids |
| Desktop (1024px+) | Three column property grid, full navbar |

---

## 🔧 Key React Concepts Used

- `useState` — Managing search, filter, modal, form, and navbar states
- `useEffect` — Scroll event listener for navbar transition
- Component composition — 12 reusable components
- Props & data flow — Data passed from parent to child components
- Conditional rendering — Modal, mobile menu, form success state
- Array methods — `.filter()` for live search and category filtering

---

## 📦 Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "tailwindcss": "^3.4.0",
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.35"
}
```

---

## 🙋 About This Project

This project was built as a **frontend showcase** demonstrating:
- Clean component architecture in React
- Responsive design without any UI libraries (pure Tailwind CSS)
- Real-world UI patterns like search/filter, modals, and form handling
- Attention to design detail — typography, spacing, animations, and color

---

## 📄 License

MIT License — free to use for personal and commercial projects.

---

⭐ If you found this project useful, please consider giving it a star!