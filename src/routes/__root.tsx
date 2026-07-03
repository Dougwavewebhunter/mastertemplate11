import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AccessGate } from "@/components/site/AccessGate";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileBottomNav } from "@/components/site/MobileBottomNav";
import { ChatBot } from "@/components/site/ChatBot";
import { PWAInstallPrompt } from "@/components/site/PWAInstallPrompt";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Loader } from "@/components/site/Loader";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex btn-brand px-5 py-2.5 rounded-xl text-sm font-semibold">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 btn-brand px-5 py-2.5 rounded-xl text-sm font-semibold">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "theme-color", content: "#3d2b1a" },
      { title: "Granite Installations (Pty) Ltd | Premium Stone Solutions" },
      { name: "description", content: "Premium granite, marble, quartz and porcelain installations. Kitchen counter tops, bathroom vanities, wall cladding and more. Built for Elegance. Made to Last." },
      { name: "author", content: "Granite Installations (Pty) Ltd" },
      { property: "og:title", content: "Granite Installations (Pty) Ltd | Premium Stone Solutions" },
      { property: "og:description", content: "Built for Elegance. Made to Last. Premium stone surface installations across South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Granite Installations (Pty) Ltd | Premium Stone Solutions" },
      { name: "twitter:description", content: "Built for Elegance. Made to Last. Premium stone surface installations across South Africa." },
      { property: "og:image", content: "https://i.imgur.com/7dTi44k.jpeg" },
      { name: "twitter:image", content: "https://i.imgur.com/7dTi44k.jpeg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "icon", href: "/icons/icon-512.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/icons/icon-512.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function ScrollResetOnNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [path]);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    import("@/lib/pwa-install").then((m) => m.initPwaInstall());
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <AccessGate>
        <Loader />
        <ScrollResetOnNav />
        <Header />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <MobileBottomNav />
        <ChatBot />
        <PWAInstallPrompt />
        <ScrollToTop />
        <Toaster position="top-center" richColors />
      </AccessGate>
    </QueryClientProvider>
  );
}
