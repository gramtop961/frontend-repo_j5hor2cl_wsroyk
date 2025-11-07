import { useState } from "react";
import axios from "axios";

export default function ContactRegister() {
  const [form, setForm] = useState({ name: "", email: "", category: "Movie" });
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });
    try {
      // Placeholder submit until backend is integrated in future steps
      await new Promise((r) => setTimeout(r, 600));
      setStatus({ loading: false, success: true, message: "Thank you! Your registration has been received." });
      setForm({ name: "", email: "", category: "Movie" });
    } catch (err) {
      setStatus({ loading: false, success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-deepBlue">Contact</h2>
          <p className="mt-2 text-deepBlue/80">Write to us for collaborations, submissions and support.</p>

          <div className="mt-6 space-y-1 text-deepBlue/90">
            <p>Email: info@kaladarpan.org</p>
            <p>Phone: +91 98XX-XXX-XXX</p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-maroon">Facebook</a>
              <a href="#" className="hover:text-maroon">Instagram</a>
              <a href="#" className="hover:text-maroon">YouTube</a>
            </div>
          </div>
        </div>

        <div id="register" className="rounded-2xl p-6 ring-1 ring-gold/40 bg-ivory shadow-sm">
          <h3 className="font-serif text-2xl text-deepBlue">Registration</h3>
          <p className="text-sm text-deepBlue/70 mb-4">Select a category and share your details.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-deepBlue/80">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-md border border-gold/40 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-deepBlue/80">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-gold/40 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-deepBlue/80">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="mt-1 w-full rounded-md border border-gold/40 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold/50"
              >
                {['Movie','Drama','Serial','Short Film'].map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={status.loading}
              className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-saffron to-gold text-neutral-900 font-semibold shadow hover:shadow-lg disabled:opacity-60"
            >
              {status.loading ? 'Submitting…' : 'Submit Registration'}
            </button>
            {status.message && (
              <p className={`text-sm ${status.success ? 'text-green-700' : 'text-red-700'}`}>{status.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
