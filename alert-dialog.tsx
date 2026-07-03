import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE, telLink, mailLink, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-16 pb-24 lg:pb-0">
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo.url} alt="" className="h-14 w-auto" />
              <div>
                <div className="font-display font-bold">TSHEPO DStv</div>
                <div className="text-[10px] tracking-wider opacity-70">ELECTRONIC SOLUTIONS</div>
              </div>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              We Connect. We Install. We Care! Premium DStv, WiFi and electronic services across Gauteng.
            </p>
            <div className="flex gap-2 mt-5">
              {[Facebook, Instagram, MessageCircle].map((I, i) => (
                <a key={i} href={i === 2 ? waLink() : "#"} target="_blank" rel="noreferrer"
                   className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--brand)] transition-colors">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                ["/", "Home"], ["/about", "About Us"], ["/services", "Services"],
                ["/gallery", "Gallery"], ["/faq", "FAQ"], ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-[color:var(--brand-glow)] transition">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li><a href={telLink} className="flex items-center gap-2 hover:text-[color:var(--brand-glow)]"><Phone className="w-4 h-4" /> {SITE.phone}</a></li>
              <li><a href={mailLink} className="flex items-center gap-2 hover:text-[color:var(--brand-glow)]"><Mail className="w-4 h-4" /> {SITE.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> {SITE.address}</li>
            </ul>
            <a href={waLink()} target="_blank" rel="noreferrer" className="mt-5 inline-flex btn-whatsapp px-4 py-2.5 rounded-xl text-sm font-semibold">
              <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4 text-sm uppercase tracking-wider">Find Us</h4>
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <iframe
                title="Map"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                className="w-full h-40 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70">
            <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
            <p>{SITE.tagline}</p>
          </div>
        </div>
      </div>

      {/* Designer credit (always visible) */}
      <div className="bg-[color:var(--ink)] text-white/80 text-center text-xs py-3 px-4">
        Website designed by{" "}
        <a href={SITE.designer.url} target="_blank" rel="noreferrer" className="text-[color:var(--brand-glow)] font-semibold hover:underline">
          [{SITE.designer.label}]
        </a>{" "}
        <a href={`tel:${SITE.designer.phone}`} className="text-[color:var(--brand-glow)] font-semibold hover:underline">
          {SITE.designer.phone}
        </a>
      </div>
    </footer>
  );
}
