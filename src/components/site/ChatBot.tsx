import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

type Msg = { role: "bot" | "user"; text: string; quick?: { label: string; value: string }[] };

const SERVICE_KEYWORDS: Record<string, string> = {
  granite: "Granite installation",
  marble: "Marble installation",
  quartz: "Quartz installation",
  porcelain: "Porcelain installation",
  kitchen: "Kitchen counter top",
  counter: "Counter top installation",
  countertop: "Counter top installation",
  bar: "Bar top installation",
  reception: "Reception counter",
  bathroom: "Bathroom vanity",
  vanity: "Bathroom vanity",
  cladding: "Wall cladding",
  wall: "Wall cladding",
  price: "pricing",
  cost: "pricing",
  quote: "quote",
  install: "installation",
};

function botReply(text: string): Msg {
  const t = text.toLowerCase();

  if (/\b(hi|hello|hey|hola|howzit|sawubona|dumela)\b/.test(t)) {
    return {
      role: "bot",
      text: "Hi there! I'm the Granite Installations assistant. We supply and install granite, marble, quartz and porcelain surfaces. How can I help you today?",
      quick: [
        { label: "Kitchen Counters", value: "I need a kitchen counter top" },
        { label: "Bathroom Vanity", value: "I need a bathroom vanity" },
        { label: "Wall Cladding", value: "I need wall cladding" },
        { label: "Get a Quote", value: "Please send me a quote" },
      ],
    };
  }

  if (/\b(price|cost|how much|quote|charge)\b/.test(t)) {
    return {
      role: "bot",
      text: "Pricing depends on the stone type, surface area and complexity. The fastest way to get an accurate quote is via WhatsApp — our team responds quickly.",
      quick: [{ label: "WhatsApp Us", value: "__wa__" }, { label: "Call Now", value: "__call__" }],
    };
  }

  if (/\b(area|location|where|come|travel|service area)\b/.test(t)) {
    return {
      role: "bot",
      text: "We operate across South Africa for both residential and commercial projects. Contact us to confirm availability for your area.",
      quick: [{ label: "Book a Consultation", value: "__wa__" }],
    };
  }

  if (/\b(time|how long|when|today|tomorrow|emergency|urgent)\b/.test(t)) {
    return {
      role: "bot",
      text: "Project timelines vary depending on the scope. We'll provide a full timeline during consultation. Want to book a free quote?",
      quick: [{ label: "Book Now", value: "__wa__" }],
    };
  }

  if (/\b(warrant|guarantee)\b/.test(t)) {
    return {
      role: "bot",
      text: "Every installation is completed to the highest standard with quality craftsmanship. We stand behind our work. Contact us for details on our quality guarantee.",
    };
  }

  if (/\b(thanks|thank you|cool|great|nice|awesome)\b/.test(t)) {
    return { role: "bot", text: "You're welcome! Anything else I can help with?" };
  }

  const hits = Object.keys(SERVICE_KEYWORDS).filter((k) => t.includes(k));
  if (hits.length) {
    const svc = SERVICE_KEYWORDS[hits[0]];
    return {
      role: "bot",
      text: `${svc} is one of our specialities. Tap below to chat with our team on WhatsApp for a fast quote.`,
      quick: [
        { label: "WhatsApp Now", value: "__wa__" },
        { label: "Call Us", value: "__call__" },
      ],
    };
  }

  return {
    role: "bot",
    text: "For the quickest response, our team is available on WhatsApp. Or I can answer questions about our stone types, pricing or project process.",
    quick: [
      { label: "WhatsApp", value: "__wa__" },
      { label: "Pricing", value: "How much does it cost?" },
      { label: "Stone Types", value: "What types of stone do you install?" },
    ],
  };
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [showPing, setShowPing] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Welcome to Granite Installations! I'm your virtual assistant. How can I help you today?",
      quick: [
        { label: "Kitchen Counters", value: "I need a kitchen counter top" },
        { label: "Bathroom Vanity", value: "I need a bathroom vanity" },
        { label: "Wall Cladding", value: "I need wall cladding" },
        { label: "Get a Quote", value: "Please send me a quote" },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowPing(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    if (trimmed === "__wa__") {
      window.open(waLink("Hi Granite Installations, I'd like to make an enquiry."), "_blank");
      return;
    }
    if (trimmed === "__call__") {
      window.location.href = `tel:${SITE.phoneRaw}`;
      return;
    }
    setMsgs((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, botReply(trimmed)]);
      setTyping(false);
    }, 700 + Math.random() * 500);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => { setOpen(true); setShowPing(false); }}
        className={`fixed z-40 right-4 bottom-24 lg:bottom-6 w-14 h-14 rounded-full btn-whatsapp grid place-items-center transition-transform ${open ? "scale-0" : "scale-100"}`}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        {showPing && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-ping" />
        )}
        {showPing && <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white" />}
      </button>

      {/* Popup */}
      {showPing && !open && (
        <div className="fixed z-40 right-4 bottom-40 lg:bottom-24 max-w-[260px] glass-card rounded-2xl p-3 reveal-up cursor-pointer" onClick={() => { setOpen(true); setShowPing(false); }}>
          <p className="text-sm font-semibold text-[color:var(--ink)]">Hi there!</p>
          <p className="text-xs text-[color:var(--muted-foreground)] mt-0.5">Need a quote? Chat with us now!</p>
        </div>
      )}

      {/* Window */}
      <div
        className={`fixed z-50 right-3 sm:right-4 bottom-24 lg:bottom-4 w-[calc(100%-1.5rem)] sm:w-[380px] max-h-[78vh] sm:max-h-[600px] transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-[78vh] sm:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-[color:var(--border)]">
          <div className="hero-gradient p-4 text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/15 grid place-items-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-sm">Granite Installations Assistant</p>
              <p className="text-xs flex items-center gap-1.5 text-white/80">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Online now
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-white/15" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-[color:var(--secondary)]">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${m.role === "user" ? "bg-[color:var(--brand)] text-white rounded-2xl rounded-br-sm" : "bg-white text-[color:var(--ink)] rounded-2xl rounded-bl-sm shadow-sm"} px-4 py-2.5`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                  {m.quick && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.quick.map((q, j) => (
                        <button
                          key={j}
                          onClick={() => handleSend(q.value)}
                          className="text-xs px-3 py-1.5 rounded-full bg-[color:var(--brand-glow)]/15 text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-glow)]/30 transition font-medium"
                        >
                          {q.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <span className="w-2 h-2 rounded-full bg-[color:var(--brand)] animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="border-t border-[color:var(--border)] p-3 flex gap-2 bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 rounded-full bg-[color:var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] text-sm"
            />
            <button type="submit" className="w-10 h-10 rounded-full btn-brand grid place-items-center flex-shrink-0" aria-label="Send">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
