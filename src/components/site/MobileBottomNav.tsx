import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Wrench, Image as ImageIcon, Download, Smartphone } from "lucide-react";
import { useInstallEvent, triggerInstall } from "@/lib/pwa-install";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: Home },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/gallery", label: "Gallery", icon: ImageIcon },
] as const;

export function MobileBottomNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const installEvent = useInstallEvent();
  const isStandalone = typeof window !== "undefined" && (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone);

  const handleInstall = async () => {
    if (installEvent) {
      await triggerInstall();
    } else {
      window.dispatchEvent(new CustomEvent("pwa-show-ios-hint"));
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-md rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,30,0.35)] border border-[color:var(--border)] flex justify-around items-stretch px-2 py-2">
        {NAV_ITEMS.map((it) => {
          const Icon = it.icon;
          const active = path === it.to;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex-1 flex flex-col items-center gap-1 py-2 px-2 rounded-2xl transition-all ${
                active ? "bg-[color:var(--brand)] text-white shadow-[var(--shadow-glow)] scale-[1.02]" : "text-[color:var(--ink)] hover:bg-[color:var(--accent)]"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-semibold tracking-wide">{it.label}</span>
            </Link>
          );
        })}
        {!isStandalone && (
          <button
            onClick={handleInstall}
            className="flex-1 flex flex-col items-center gap-1 py-2 px-2 rounded-2xl transition-all text-[color:var(--ink)] hover:bg-[color:var(--accent)]"
          >
            {installEvent ? <Download className="w-5 h-5" /> : <Smartphone className="w-5 h-5" />}
            <span className="text-[10px] font-semibold tracking-wide">Install App</span>
          </button>
        )}
      </div>
    </nav>
  );
}
