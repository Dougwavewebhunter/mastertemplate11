import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { useInstallEvent, triggerInstall, isIOSDevice, isStandalonePWA, initPwaInstall } from "@/lib/pwa-install";

const DISMISS_KEY = "tshepo_pwa_dismissed_v2";

export function PWAInstallPrompt() {
  const evt = useInstallEvent();
  const [show, setShow] = useState(false);
  const [ios, setIOS] = useState(false);

  useEffect(() => {
    initPwaInstall();
    if (isStandalonePWA()) return;
    const dismissed = localStorage.getItem(DISMISS_KEY);
    const isIos = isIOSDevice();
    setIOS(isIos);

    const showHint = () => setShow(true);
    window.addEventListener("pwa-show-ios-hint" as any, showHint);

    let t: any;
    if (!dismissed) {
      t = setTimeout(() => setShow(true), isIos ? 8000 : 6000);
    }
    return () => {
      window.removeEventListener("pwa-show-ios-hint" as any, showHint);
      if (t) clearTimeout(t);
    };
  }, []);

  const close = () => {
    setShow(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  const install = async () => {
    const res = await triggerInstall();
    if (res === "accepted" || res === "dismissed") close();
  };

  if (!show || isStandalonePWA()) return null;

  return (
    <div className="fixed inset-x-0 bottom-28 lg:bottom-6 z-[55] flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-md glass-card rounded-2xl p-4 flex items-center gap-3 reveal-up shadow-2xl">
        <img src={logo.url} alt="" className="w-12 h-12 rounded-xl flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-[color:var(--ink)]">Install Tshepo DStv App</p>
          <p className="text-xs text-[color:var(--muted-foreground)] truncate">
            {ios && !evt ? "Tap Share → Add to Home Screen" : "Get fast access from your home screen"}
          </p>
        </div>
        {evt ? (
          <button onClick={install} className="btn-brand px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 flex-shrink-0">
            <Download className="w-3.5 h-3.5" /> Install
          </button>
        ) : null}
        <button onClick={close} className="p-1.5 rounded-full hover:bg-[color:var(--accent)] flex-shrink-0" aria-label="Close">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
