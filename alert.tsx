import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE, telLink, waLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-xl shadow-[var(--shadow-soft)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo.url} alt="Tshepo DStv" className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105" />
            <span className={`hidden sm:block font-display font-bold leading-tight ${scrolled ? "text-[color:var(--ink)]" : "text-white"}`}>
              <span className="block text-sm">TSHEPO DStv</span>
              <span className="block text-[10px] tracking-wider opacity-70">ELECTRONIC SOLUTIONS</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? "bg-[color:var(--brand)] text-white shadow-[var(--shadow-glow)]"
                      : scrolled
                        ? "text-[color:var(--ink)] hover:bg-[color:var(--accent)]"
                        : "text-white hover:bg-white/10"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={telLink} className={`hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition ${scrolled ? "bg-[color:var(--ink)] text-white hover:bg-[color:var(--brand-deep)]" : "bg-white/15 text-white hover:bg-white/25 backdrop-blur"}`}>
              <Phone className="w-4 h-4" /> {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn-whatsapp px-4 py-2.5 rounded-full text-sm font-semibold">
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className={`lg:hidden p-2.5 rounded-full ${scrolled ? "bg-[color:var(--accent)] text-[color:var(--ink)]" : "bg-white/15 text-white backdrop-blur"}`}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white text-[color:var(--ink)] shadow-2xl transition-transform duration-300 flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-[color:var(--border)]">
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="" className="h-10 w-auto" />
              <span className="font-display font-bold text-sm leading-tight">
                TSHEPO DStv<br />
                <span className="text-[10px] opacity-60 tracking-wider">ELECTRONIC SOLUTIONS</span>
              </span>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-[color:var(--accent)] hover:rotate-90 transition-transform" aria-label="Close menu">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {NAV.map((n, i) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`block mx-3 my-1 px-4 py-3.5 rounded-2xl font-medium text-base transition reveal-up ${
                    active ? "bg-[color:var(--brand)] text-white" : "hover:bg-[color:var(--accent)]"
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-[color:var(--border)] space-y-2">
            <a href={telLink} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[color:var(--ink)] text-white font-semibold">
              <Phone className="w-4 h-4" /> Call {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full btn-whatsapp py-3 rounded-xl font-semibold">
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
