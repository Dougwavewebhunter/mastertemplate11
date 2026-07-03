import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck as CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { PageHero, CTASection } from "./about";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Granite Installations (Pty) Ltd" },
      { name: "description", content: "Premium granite, marble, quartz and porcelain installations for kitchen counter tops, bathroom vanities, wall cladding and more." },
      { property: "og:title", content: "Our Services | Granite Installations" },
      { property: "og:description", content: "Premium stone solutions for every space." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Premium stone surfaces, expertly installed for every space." />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            const reverse = idx % 2 === 1;
            return (
              <div key={s.slug} id={s.slug} className={`grid md:grid-cols-2 gap-8 items-center scroll-mt-28 reveal-up ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                  <img
                    src={[
                      "https://i.imgur.com/7dTi44k.jpeg",
                      "https://i.imgur.com/9uJGT7h.jpeg",
                      "https://i.imgur.com/lqogvWX.jpeg",
                      "https://i.imgur.com/bYZtqnQ.jpeg",
                    ][idx % 4]}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-2xl btn-brand grid place-items-center">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand-deep)] text-xs font-bold tracking-wider mb-3">
                    SERVICE 0{idx + 1}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-3">{s.title}</h2>
                  <p className="text-[color:var(--muted-foreground)] mb-6 text-lg">{s.blurb}</p>
                  <ul className="space-y-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[color:var(--brand)] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-[color:var(--secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl btn-brand mb-5">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Excellence in Stone Installation</h2>
          <p className="text-[color:var(--muted-foreground)]">Every project is completed to the highest standard of craftsmanship. Built for elegance. Made to last. We stand behind our work — always.</p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
