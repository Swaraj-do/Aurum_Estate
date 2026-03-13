import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", enquiry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact" className="py-24 bg-stone-50 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Info */}
          <div className="reveal">
            <p className="gold text-xs tracking-[0.3em] uppercase font-medium mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl font-light mb-6 text-stone-900">
              We'd Love to<br /><em className="not-italic gold">Hear From You</em>
            </h2>
            <p className="text-stone-500 mb-8 text-sm leading-relaxed">
              Our advisors are available 7 days a week for discreet, no-obligation consultations.
            </p>
            <div className="space-y-4 text-sm text-stone-500">
              <p className="flex items-center gap-3"><span className="gold">📍</span>425 Park Avenue, Suite 3100, New York, NY 10022</p>
              <p className="flex items-center gap-3"><span className="gold">📞</span>+1 (212) 555-0190</p>
              <p className="flex items-center gap-3"><span className="gold">✉️</span>concierge@aurumestates.com</p>
              <p className="flex items-center gap-3"><span className="gold">⏰</span>Mon–Sun, 9AM – 8PM EST</p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal delay-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="font-display text-5xl gold mb-4">✓</div>
                <h3 className="font-display text-2xl font-light text-stone-900 mb-2">Message Received</h3>
                <p className="text-stone-500 text-sm">One of our advisors will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-stone-200 p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required
                    className="bg-stone-50 border border-stone-200 text-stone-800 px-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                  <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required
                    className="bg-stone-50 border border-stone-200 text-stone-800 px-4 py-3.5 text-sm focus:outline-none focus:border-amber-400 transition-colors" />
                </div>
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 px-4 py-3.5 text-sm mb-4 focus:outline-none focus:border-amber-400 transition-colors" />
                <select name="enquiry" value={form.enquiry} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 text-stone-500 px-4 py-3.5 text-sm mb-4 focus:outline-none focus:border-amber-400 transition-colors appearance-none">
                  <option value="">Enquiry Type</option>
                  <option>I want to buy</option>
                  <option>I want to sell</option>
                  <option>Investment consultation</option>
                  <option>Property management</option>
                </select>
                <textarea name="message" rows={4} placeholder="Tell us about your property goals..." value={form.message} onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 text-stone-800 px-4 py-3.5 text-sm mb-4 resize-none focus:outline-none focus:border-amber-400 transition-colors" />
                <button type="submit"
                  className="w-full bg-stone-900 text-amber-400 font-semibold tracking-widest uppercase py-4 text-sm hover:bg-stone-800 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
