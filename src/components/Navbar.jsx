import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-ivory/60 dark:bg-neutral-900/60 border-b border-gold/20">
      <nav className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-saffron to-maroon ring-2 ring-gold/60 shadow-md" />
          <div className="leading-tight">
            <div className="font-serif text-xl tracking-wide text-deepBlue group-hover:text-maroon transition-colors">
              Sanskrutik Kaladarpan
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-deepBlue/70">
              A Reflection of Culture
            </div>
          </div>
        </a>

        <button
          className="md:hidden p-2 rounded-md bg-ivory/70 ring-1 ring-gold/40 text-deepBlue"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <Menu size={22} />
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-deepBlue/80 hover:text-maroon transition-colors font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#register"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-saffron to-gold text-neutral-900 font-semibold shadow hover:shadow-md transition-shadow"
            >
              Register Now
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gold/20 bg-ivory/95">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-deepBlue/90 hover:bg-gold/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="block text-center px-3 py-2 rounded-md bg-gradient-to-r from-saffron to-gold text-neutral-900 font-semibold"
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
