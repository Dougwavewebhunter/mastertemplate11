import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="fixed inset-0 z-[100] hero-gradient grid place-items-center transition-opacity duration-500">
      <div className="text-center">
        <img src={logo.url} alt="" className="h-24 w-auto mx-auto mb-6 animate-pulse" />
        <div className="w-40 h-1 mx-auto rounded-full bg-white/15 overflow-hidden">
          <div className="h-full w-1/2 shimmer-bg rounded-full" />
        </div>
      </div>
    </div>
  );
}
