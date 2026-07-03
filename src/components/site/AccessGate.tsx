import { useEffect, useState, type ReactNode } from "react";
import { Lock, ShieldCheck, Clock } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE } from "@/lib/site";

const KEY = "granite_access_ok";

export function AccessGate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState<boolean | null>(null);
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      setOk(sessionStorage.getItem(KEY) === "1");
    } catch {
      setOk(true);
    }
  }, []);

  if (ok === null) return null;
  if (ok) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (val.trim() === SITE.accessCode) {
      try { sessionStorage.setItem(KEY, "1"); } catch {}
      setOk(true);
    } else {
      setErr("Invalid access code. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--brand-glow)] blur-3xl floaty" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--brand)] blur-3xl floaty" style={{ animationDelay: "2s" }} />
      </div>
      <div className="relative w-full max-w-md glass-dark rounded-3xl p-8 reveal-up text-white">
        <div className="flex justify-center mb-6">
          <img src={logo.url} alt="Granite Installations" className="h-20 w-auto drop-shadow-2xl" />
        </div>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-3">
            <Lock className="w-3.5 h-3.5" /> Private Demo Preview
          </div>
          <h1 className="text-2xl font-bold mb-2">Access Required</h1>
          <p className="text-sm text-white/70">Enter the access code to view this demo website.</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <input
            type="text"
            value={val}
            onChange={(e) => { setVal(e.target.value); setErr(""); }}
            placeholder="Enter access code"
            className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-glow)] text-center tracking-widest"
            autoFocus
          />
          {err && <p className="text-sm text-red-300 text-center">{err}</p>}
          <button type="submit" className="w-full btn-brand py-3.5 rounded-xl font-semibold">
            Unlock Website
          </button>
        </form>

        <div className="mt-6 space-y-2 text-xs text-white/70 border-t border-white/10 pt-5">
          <p className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-[color:var(--brand-glow)]" /> Demo is valid for <b className="text-white">48 hours</b> only.</p>
          <p className="flex items-start gap-2"><ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-[color:var(--brand-glow)]" /> Website goes permanently live only after invoice payment.</p>
        </div>

        <p className="mt-6 text-center text-[11px] text-white/50">
          Website designed by{" "}
          <a href={SITE.designer.url} target="_blank" rel="noreferrer" className="underline hover:text-white">
            {SITE.designer.label}
          </a>{" "}
          • {SITE.designer.phone}
        </p>
      </div>
    </div>
  );
}
