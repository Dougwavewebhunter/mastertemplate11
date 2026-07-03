import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Target, Heart, Award, MapPin, ArrowRight } from "lucide-react";
import heroVan from "@/assets/hero-van.jpg.asset.json";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Granite Installations (Pty) Ltd" },
      { name: "description", content: "Granite Installations — premium stone solutions including granite, marble, quartz and porcelain. Quality you can see and trust." },
      { property: "og:title", content: "About Granite Installations" },
      { property: "og:description", content: "Built for Elegance. Made to Last. Transforming Spaces. Enhancing Lifestyles." },
      { property: "og:image", content: heroVan.url },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="Quality You Can See & Trust." />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal-up">
            <p className="text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3">OUR STORY</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Transforming Spaces. <span className="gradient-text">Enhancing Lifestyles.</span></h2>
            <p className="text-[color:var(--muted-foreground)] mb-4">
              Granite Installations (Pty) Ltd was founded on a single commitment — delivering premium stone surfaces that stand the test of time. We supply and install granite, marble, quartz and porcelain for kitchens, bathrooms, reception areas and commercial spaces across South Africa.
            </p>
            <p className="text-[color:var(--muted-foreground)] mb-6">
              Our team of experienced craftsmen brings precision, passion and professionalism to every project. From custom kitchen counter tops to full wall cladding, we transform spaces with surfaces built for elegance and made to last.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Premium Quality Stone", "Expert Installation Teams", "Custom Design Solutions", "Durable & Reliable Results"].map((p) => (
                <div key={p} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[color:var(--brand)] flex-shrink-0" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-up">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)]">
              <img src="https://i.imgur.com/9uJGT7h.jpeg" alt="Premium stone installation" className="w-full h-auto" loading="lazy" />
              <div className="absolute bottom-4 left-4 right-4 glass-dark rounded-2xl p-4 text-white">
                <p className="text-xs font-bold tracking-widest text-[color:var(--brand-glow)] mb-1">SERVICE AREA</p>
                <p className="font-semibold flex items-center gap-2"><MapPin className="w-4 h-4" /> Residential & Commercial Projects Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[color:var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Values</h2>
            <p className="text-[color:var(--muted-foreground)] mt-3">What drives every project we undertake.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { i: Target, t: "Mission", d: "To deliver premium stone surfaces and expert installations that transform spaces and exceed client expectations." },
              { i: Heart, t: "Promise", d: "Built for Elegance. Made to Last. Every surface we install reflects our commitment to quality craftsmanship." },
              { i: Award, t: "Standard", d: "Excellence in stone installation — from the first measurement to the final polish, we deliver perfection." },
            ].map(({ i: I, t, d }, i) => (
              <div key={t} className="bg-white rounded-3xl p-7 shadow-[var(--shadow-soft)] reveal-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-2xl btn-brand grid place-items-center mb-4"><I className="w-5 h-5 text-white" /></div>
                <h3 className="text-xl font-bold mb-2">{t}</h3>
                <p className="text-sm text-[color:var(--muted-foreground)]">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          {[{ v: "500+", l: "Projects Completed" }, { v: "4", l: "Stone Types" }, { v: "100%", l: "Guarantee" }, { v: "5★", l: "Rated" }].map((s) => (
            <div key={s.l} className="bg-white rounded-3xl p-6 border border-[color:var(--border)] shadow-[var(--shadow-soft)]">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{s.v}</div>
              <div className="text-xs sm:text-sm text-[color:var(--muted-foreground)] font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 hero-gradient overflow-hidden text-white">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--brand-glow)]/25 blur-3xl floaty" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--brand)]/25 blur-3xl floaty" style={{ animationDelay: "2s" }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 reveal-up">{title}</h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto reveal-up">{subtitle}</p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl hero-gradient p-10 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready to transform your space?</h2>
          <p className="text-white/80 mb-6">Request a free quote for your stone installation project today.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn-whatsapp px-6 py-3 rounded-2xl font-semibold">Chat on WhatsApp</a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-white text-[color:var(--ink)]">Contact Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
