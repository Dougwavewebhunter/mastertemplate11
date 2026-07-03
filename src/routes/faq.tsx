import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, CTASection } from "./about";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Granite Installations (Pty) Ltd" },
      { name: "description", content: "Common questions about our granite, marble, quartz and porcelain installation services." },
      { property: "og:title", content: "FAQ | Granite Installations" },
      { property: "og:description", content: "Answers to common questions about our stone installation services." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "What types of stone do you supply and install?", a: "We supply and install granite, marble, quartz and porcelain for a wide range of applications including kitchen counter tops, bar tops, reception counters, bathroom vanities and wall cladding." },
  { q: "Do you handle both residential and commercial projects?", a: "Yes, we work on residential homes and commercial spaces including offices, restaurants, hotels and retail environments. Contact us to discuss your project requirements." },
  { q: "How do I get a quote?", a: "Contact us via WhatsApp, phone or email and describe your project. We'll arrange a consultation to measure the space and provide an accurate quote based on your chosen stone and design." },
  { q: "How long does a typical installation take?", a: "Installation timelines vary depending on the surface area and complexity of the project. We'll provide a full project timeline during your consultation." },
  { q: "Can I choose a custom design or edge profile?", a: "Absolutely. We offer custom fabrication and a range of edge profiles, finishes and cuts to match your design vision perfectly." },
  { q: "What is the difference between granite, marble and quartz?", a: "Granite is a natural stone known for durability and unique patterns. Marble offers luxury aesthetics with natural veining. Quartz is engineered for consistency and high stain resistance. We'll help you choose the best option for your needs." },
  { q: "Do you offer a guarantee on your installations?", a: "Yes. Every installation is completed to the highest standard of craftsmanship. Contact us for specific warranty information related to your project." },
  { q: "How do I maintain my stone surfaces?", a: "We provide care and maintenance guidance for all stone types after installation. Generally, avoid harsh chemicals and seal natural stone surfaces regularly to maintain their beauty." },
];

function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know about our premium stone installation services." />
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
