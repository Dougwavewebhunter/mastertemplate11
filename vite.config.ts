@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-brand: var(--brand);
  --color-brand-deep: var(--brand-deep);
  --color-brand-glow: var(--brand-glow);
  --color-ink: var(--ink);
  --color-silver: var(--silver);
  --font-display: "Sora", system-ui, sans-serif;
  --font-body: "Manrope", system-ui, sans-serif;
}

:root {
  --radius: 0.875rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.16 0.03 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.16 0.03 260);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.16 0.03 260);
  --primary: oklch(0.48 0.22 258);
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.96 0.01 250);
  --secondary-foreground: oklch(0.2 0.04 260);
  --muted: oklch(0.96 0.01 250);
  --muted-foreground: oklch(0.5 0.03 258);
  --accent: oklch(0.94 0.04 255);
  --accent-foreground: oklch(0.2 0.04 260);
  --destructive: oklch(0.6 0.22 27);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.91 0.015 255);
  --input: oklch(0.93 0.015 255);
  --ring: oklch(0.48 0.22 258);

  --brand: oklch(0.5 0.24 258);          /* royal blue */
  --brand-deep: oklch(0.28 0.15 260);    /* deep navy blue */
  --brand-glow: oklch(0.7 0.2 252);      /* light blue */
  --ink: oklch(0.12 0.02 260);           /* near black */
  --silver: oklch(0.85 0.01 255);

  --gradient-hero: linear-gradient(135deg, oklch(0.12 0.02 260) 0%, oklch(0.22 0.12 258) 50%, oklch(0.42 0.22 258) 100%);
  --gradient-brand: linear-gradient(135deg, var(--brand-deep), var(--brand));
  --gradient-glow: linear-gradient(135deg, var(--brand), var(--brand-glow));
  --shadow-glow: 0 20px 60px -20px color-mix(in oklab, var(--brand) 55%, transparent);
  --shadow-card: 0 10px 40px -12px oklch(0.2 0.05 260 / 0.18);
  --shadow-soft: 0 4px 20px -8px oklch(0.2 0.05 260 / 0.12);
}

.dark {
  --background: oklch(0.12 0.02 260);
  --foreground: oklch(0.98 0 0);
  --card: oklch(0.18 0.04 260);
  --card-foreground: oklch(0.98 0 0);
  --popover: oklch(0.18 0.04 260);
  --popover-foreground: oklch(0.98 0 0);
  --primary: oklch(0.62 0.22 258);
  --primary-foreground: oklch(0.12 0.02 260);
  --secondary: oklch(0.22 0.04 260);
  --secondary-foreground: oklch(0.98 0 0);
  --muted: oklch(0.22 0.04 260);
  --muted-foreground: oklch(0.7 0.02 258);
  --accent: oklch(0.25 0.06 258);
  --accent-foreground: oklch(0.98 0 0);
  --border: oklch(1 0 0 / 12%);
  --input: oklch(1 0 0 / 15%);
}

@layer base {
  * { border-color: var(--color-border); }
  html { scroll-behavior: smooth; }
  body {
    background: var(--background);
    color: var(--foreground);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3, h4, h5 { font-family: var(--font-display); letter-spacing: -0.02em; }
}

@utility glass-card {
  background: color-mix(in oklab, white 70%, transparent);
  backdrop-filter: blur(14px);
  border: 1px solid color-mix(in oklab, var(--brand) 18%, transparent);
  box-shadow: var(--shadow-card);
}

@utility glass-dark {
  background: color-mix(in oklab, oklch(0.12 0.02 260) 65%, transparent);
  backdrop-filter: blur(14px);
  border: 1px solid color-mix(in oklab, var(--brand-glow) 25%, transparent);
}

@utility gradient-text {
  background: var(--gradient-glow);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@utility btn-brand {
  background: var(--gradient-brand);
  color: white;
  box-shadow: var(--shadow-glow);
  transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
  &:hover { transform: translateY(-2px); filter: brightness(1.08); }
}

@utility btn-whatsapp {
  background: linear-gradient(135deg, #25D366, #128C7E);
  color: white;
  box-shadow: 0 12px 32px -10px rgba(37, 211, 102, 0.6);
  transition: transform .25s ease, filter .25s ease;
  &:hover { transform: translateY(-2px); filter: brightness(1.08); }
}

@utility hero-gradient {
  background: var(--gradient-hero);
}

@utility reveal-up {
  animation: revealUp .8s cubic-bezier(.2,.7,.2,1) both;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float-y {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}

@utility floaty {
  animation: float-y 6s ease-in-out infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@utility shimmer-bg {
  background: linear-gradient(90deg, transparent, color-mix(in oklab, var(--brand-glow) 40%, transparent), transparent);
  background-size: 200% 100%;
  animation: shimmer 2.4s linear infinite;
}

@keyframes blink-caret {
  50% { opacity: 0; }
}
.typing-caret::after {
  content: "|";
  margin-left: 2px;
  animation: blink-caret 1s steps(1) infinite;
  color: var(--brand-glow);
}

/* premium scrollbar (desktop) */
@media (min-width: 768px) {
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-thumb { background: var(--gradient-brand); border-radius: 999px; }
  ::-webkit-scrollbar-track { background: oklch(0.95 0.01 255); }
}
