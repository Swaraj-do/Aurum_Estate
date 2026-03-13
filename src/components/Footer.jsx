export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gold rounded-sm flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 5V11L8 15L2 11V5L8 1Z" fill="#ffffff" />
              </svg>
            </div>
            <span className="font-display text-lg font-light tracking-widest uppercase text-white">
              Aurum<span className="gold font-medium"> Estate</span>
            </span>
          </div>
          <p className="text-stone-500 text-xs tracking-widest text-center">
            © {new Date().getFullYear()} Aurum Estate Group. All rights reserved. Licensed in NY, CA, FL & CO.
          </p>
          <div className="flex gap-6 text-xs tracking-widest text-stone-500 uppercase">
            <a href="#properties" className="hover-gold transition-colors">Privacy</a>
            <a href="#about" className="hover-gold transition-colors">Terms</a>
            <a href="#contact" className="hover-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
