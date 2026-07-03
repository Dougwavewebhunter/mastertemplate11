import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, CTASection } from "./about";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Tshepo DStv & Electronic Solutions" },
      { name: "description", content: "Common questions about our DStv, WiFi, unlocking and repair services." },
      { property: "og:title", content: "FAQ | Tshepo DStv" },
      { property: "og:description", content: "Answers to common questions about our services." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "What areas do you service?", a: "We come to you anywhere in Gauteng — Pretoria, Johannesburg, Centurion and surrounding suburbs. Travel may apply for distant areas." },
  { q: "Do you offer same-day installations?", a: "Yes, subject to availability. Contact us via WhatsApp or call early in the day and we'll do our best to slot you in." },
  { q: "How long does a typical DStv installation take?", a: "A standard new installation with dish alignment usually takes 1–2 hours, depending on the setup and access to the mounting point." },
  { q: "Is there a guarantee on your work?", a: "Absolutely. Every installation and repair comes with our Quality Installation Guarantee. If it isn't working perfectly, we make it right." },
  { q: "Do you handle 24-month DStv contracts?", a: "Yes. We offer 24-month DStv decoder and internet packages with free installation and delivery for qualifying contracts." },
  { q: "Can you unlock any phone brand?", a: "We support most major Android brands with software and network unlocks. Send us the model and we'll confirm." },
  { q: "How do I pay for services?", a: "We accept cash, EFT and mobile payments. Larger jobs may require a small deposit upfront — we'll always confirm before starting." },
  { q: "Do you repair small appliances too?", a: "Yes — TVs, fridges, microwaves, washing machines and small appliances. Fault diagnosis is quick and pricing is honest." },
];

function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Quick answers to the things customers ask us most." />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)] px-5 reveal-up" style={{ animationDelay: `${i * 50}ms` }}>
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-[color:var(--muted-foreground)] pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CTASection />
    </>
  );
}
