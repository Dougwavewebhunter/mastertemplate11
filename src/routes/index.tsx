import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MessageCircle, FileText, ArrowRight, CheckCircle2, Star, Zap, ShieldCheck, Users, Award, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { SITE, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Granite Installations (Pty) Ltd | Premium Stone Solutions" },
      { name: "description", content: "Premium granite, marble, quartz and porcelain installations for kitchen counter tops, bathrooms, reception areas and wall cladding. Built for Elegance. Made to Last." },
      { property: "og:title", content: "Granite Installations (Pty) Ltd — Premium Stone Solutions" },
      { property: "og:description", content: "Built for Elegance. Made to Last. Transforming Spaces. Enhancing Lifestyles." },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  { img: "https://i.imgur.com/7dTi44k.jpeg", eyebrow: "PREMIUM STONE SOLUTIONS", title: "Built for Elegance.", accent: "Made to Last.", text: "Transforming spaces with premium granite, marble, quartz and porcelain surfaces." },
  { img: "https://i.imgur.com/9uJGT7h.jpeg", eyebrow: "EXPERT CRAFTSMANSHIP", title: "Quality You Can", accent: "See & Trust.", text: "Expert installation teams delivering flawless stone surfaces for kitchens, bathrooms and commercial spaces." },
  { img: "https://i.imgur.com/lqogvWX.jpeg", eyebrow: "CUSTOM DESIGNS", title: "Transforming Spaces.", accent: "Enhancing Lifestyles.", text: "From kitchen counter tops to wall cladding — custom stone solutions crafted to perfection." },
];

const TYPING_WORDS = ["Granite Counter Tops", "Marble Vanities", "Quartz Surfaces", "Porcelain Cladding"];

function HomePage() {
  const [active, setActive] = useState(0);
  const [typed, setTyped] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const word = TYPING_WORDS[wi];
    const speed = del ? 50 : 110;
    const t = setTimeout(() => {
      if (!del && typed === word) { setTimeout(() => setDel(true), 1400); return; }
      if (del && typed === "") { setDel(false); setWi((wi + 1) % TYPING_WORDS.length); return; }
      setTyped(del ? word.slice(0, typed.length - 1) : word.slice(0, typed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [typed, del, wi]);

  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative h-[100svh] min-h-[640px] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}>
            <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--ink)]/85 via-[color:var(--brand-deep)]/70 to-[color:var(--brand)]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-transparent to-transparent" />
          </div>
        ))}

        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-[color:var(--brand-glow)]/20 blur-3xl floaty pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[color:var(--brand)]/25 blur-3xl floaty pointer-events-none" style={{ animationDelay: "2s" }} />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center pt-16">
          <div className="max-w-2xl text-white">
            {SLIDES.map((s, i) => i === active && (
              <div key={i} className="reveal-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-semibold tracking-wider mb-5">
                  <Zap className="w-3.5 h-3.5 text-[color:var(--brand-glow)]" /> {s.eyebrow}
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
                  {s.title}<br />
                  <span className="gradient-text">{s.accent}</span>
                </h1>
                <p className="text-lg text-white/85 mb-3 max-w-xl">{s.text}</p>
              </div>
            ))}
            <p className="text-base sm:text-lg text-white/80 mb-8 font-medium">
              We specialise in <span className="text-[color:var(--brand-glow)] font-bold typing-caret">{typed}</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition">
                <FileText className="w-4 h-4" /> Request Quote
              </Link>
            </div>

            <div className="flex gap-2 mt-10">
              {SLIDES.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/60"}`} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 pb-6">
            <div className="glass-dark rounded-2xl p-4 grid grid-cols-4 gap-4 text-white">
              {[
                { i: Zap, l: "Premium Quality" }, { i: Award, l: "Expert Installation" },
                { i: ShieldCheck, l: "Custom Designs" }, { i: Star, l: "Durable & Reliable" },
              ].map(({ i: I, l }) => (
                <div key={l} className="flex items-center gap-3 justify-center">
                  <div className="w-9 h-9 rounded-full bg-[color:var(--brand)]/30 grid place-items-center"><I className="w-4 h-4" /></div>
                  <span className="text-sm font-semibold">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3">WHAT WE OFFER</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Premium Stone Solutions, <span className="gradient-text">Perfectly Installed.</span></h2>
            <p className="text-[color:var(--muted-foreground)]">We supply and install granite, marble, quartz and porcelain for kitchens, bathrooms, reception areas and beyond.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} to="/services" hash={s.slug}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-[color:var(--border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300 reveal-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={[
                        "https://i.imgur.com/7dTi44k.jpeg",
                        "https://i.imgur.com/bYZtqnQ.jpeg",
                        "https://i.imgur.com/4QFhhOU.jpeg",
                        "https://i.imgur.com/BYZAp69.jpeg",
                      ][i % 4]}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-2xl btn-brand grid place-items-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-[color:var(--muted-foreground)] mb-4">{s.blurb}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand)] group-hover:gap-2.5 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28 hero-gradient text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[color:var(--brand-glow)]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[color:var(--brand)]/30 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand-glow)] mb-3">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-5">Quality You Can See <span className="gradient-text">& Trust.</span></h2>
            <p className="text-white/80 mb-8 text-lg">We don't just install stone — we craft surfaces that transform spaces and stand the test of time.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { i: Users, t: "Expert Installation", d: "Skilled craftsmen with years of experience in stone installation." },
                { i: Zap, t: "Premium Quality", d: "Only the finest stone materials for every project." },
                { i: ShieldCheck, t: "Custom Designs", d: "Bespoke solutions tailored to your space and vision." },
                { i: Award, t: "Durable & Reliable", d: "Surfaces built to last a lifetime with proper care." },
              ].map(({ i: I, t, d }) => (
                <div key={t} className="glass-dark rounded-2xl p-5">
                  <I className="w-7 h-7 text-[color:var(--brand-glow)] mb-3" />
                  <h4 className="font-bold mb-1">{t}</h4>
                  <p className="text-sm text-white/70">{d}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href={telLink} className="btn-brand inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold">
                <Phone className="w-4 h-4" /> Call Us Now
              </a>
              <Link to="/about" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 backdrop-blur transition border border-white/20">
                More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "500+", l: "Projects Done" }, { v: "4", l: "Stone Types" },
              { v: "100%", l: "Guarantee" }, { v: "5★", l: "Rated Service" },
            ].map((s, i) => (
              <div key={s.l} className="glass-dark rounded-3xl p-6 sm:p-8 text-center reveal-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{s.v}</div>
                <div className="text-sm text-white/80 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3">OUR WORK</p>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">Project Showcase</h2>
            <p className="text-[color:var(--muted-foreground)]">A glimpse of the premium stone surfaces we've installed across South Africa.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              "https://i.imgur.com/7dTi44k.jpeg",
              "https://i.imgur.com/9uJGT7h.jpeg",
              "https://i.imgur.com/lqogvWX.jpeg",
              "https://i.imgur.com/bYZtqnQ.jpeg",
              "https://i.imgur.com/4QFhhOU.jpeg",
              "https://i.imgur.com/BYZAp69.jpeg",
            ].map((src, i) => (
              <div key={i} className={`group relative rounded-2xl overflow-hidden aspect-square shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all reveal-up ${i === 0 ? "md:row-span-2 md:aspect-auto" : ""}`} style={{ animationDelay: `${i * 60}ms` }}>
                <img src={src} alt="Stone installation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-flex items-center gap-2 btn-brand px-6 py-3 rounded-2xl font-semibold">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-[color:var(--secondary)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl hero-gradient p-10 sm:p-16 text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--brand-glow)]/30 blur-3xl rounded-full" />
            <div className="relative">
              <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand-glow)] mb-3">OUR COMMITMENT</p>
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">Built for Elegance. <span className="gradient-text">Made to Last.</span></h2>
              <p className="text-white/85 mb-8 max-w-xl mx-auto">Request a free quote for your stone installation project. We'll respond quickly.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold">
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-white text-[color:var(--ink)] hover:bg-white/90 transition">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <p className="mt-8 text-sm font-bold tracking-widest text-white/80">{SITE.tagline}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const TESTIMONIALS = [
  { n: "Thabo M.", r: "Granite Installations transformed our kitchen completely. The counter tops are stunning and the workmanship is flawless. Highly recommend!" },
  { n: "Sarah K.", r: "We chose marble for our bathroom vanity and the result exceeded all expectations. Professional team, clean work, beautiful finish." },
  { n: "David N.", r: "The quartz surfaces in our reception area look absolutely premium. Clients always comment on how elegant the space looks." },
  { n: "Priya S.", r: "Outstanding porcelain wall cladding in our restaurant. Durable, beautiful and exactly what we envisioned. Will definitely use again." },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5000); return () => clearInterval(t); }, []);
  return (
    <section className="py-20 sm:py-24 bg-[color:var(--secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3">TESTIMONIALS</p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">What Our Clients Say</h2>
        <div className="relative h-56 sm:h-44">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="flex justify-center gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-5 h-5 fill-[color:var(--brand)] text-[color:var(--brand)]" />)}</div>
              <p className="text-lg sm:text-xl italic text-[color:var(--ink)]/85 leading-relaxed mb-4">"{t.r}"</p>
              <p className="font-bold text-[color:var(--brand-deep)]">— {t.n}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[color:var(--brand)]" : "w-2 bg-[color:var(--border)]"}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
