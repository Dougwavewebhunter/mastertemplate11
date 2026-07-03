import { i as waLink, n as mailLink, r as telLink, t as SITE } from "./site-BHhZZt2k.js";
import { r as Route$7 } from "./about-DkP1cjiA.js";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArrowUp, Chrome, Clock, Download, Facebook, Image, Instagram, Lock, Mail, MapPin, Menu, MessageCircle, Phone, Send, ShieldCheck, Smartphone, Wrench, X } from "lucide-react";
import { Toaster } from "sonner";
//#region src/lib/pwa-install.ts
var storedEvent = null;
var initialized = false;
var listeners = /* @__PURE__ */ new Set();
function notify() {
	listeners.forEach((fn) => fn());
}
function setInstallEvent(evt) {
	storedEvent = evt;
	notify();
}
function subscribe(callback) {
	listeners.add(callback);
	return () => {
		listeners.delete(callback);
	};
}
function getSnapshot() {
	return storedEvent;
}
function getServerSnapshot() {
	return null;
}
function initPwaInstall() {
	if (initialized || typeof window === "undefined") return;
	initialized = true;
	window.addEventListener("beforeinstallprompt", (e) => {
		e.preventDefault();
		setInstallEvent(e);
	});
	window.addEventListener("appinstalled", () => {
		setInstallEvent(null);
	});
}
function useInstallEvent() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
function isIOSDevice() {
	if (typeof navigator === "undefined") return false;
	return /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
}
function isStandalonePWA() {
	if (typeof window === "undefined") return false;
	return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}
async function triggerInstall() {
	if (isStandalonePWA()) return "unavailable";
	if (!storedEvent) {
		if (isIOSDevice()) {
			window.dispatchEvent(new CustomEvent("pwa-show-ios-hint"));
			return "ios";
		}
		window.dispatchEvent(new CustomEvent("pwa-show-ios-hint"));
		return "unavailable";
	}
	try {
		storedEvent.prompt();
		const outcome = (await storedEvent.userChoice)?.outcome === "accepted" ? "accepted" : "dismissed";
		if (outcome === "accepted") setInstallEvent(null);
		return outcome;
	} catch {
		return "dismissed";
	}
}
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-C1Zv65dZ.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var logo_png_asset_default = {
	version: 1,
	asset_id: "fa3fd772-9209-4864-869e-2c0b1d6e716b",
	project_id: "fe13aa1f-e5cc-44a8-84a9-219aee1c4912",
	url: "https://i.imgur.com/HBY0SWU.png",
	r2_key: "a/v1/fe13aa1f-e5cc-44a8-84a9-219aee1c4912/fa3fd772-9209-4864-869e-2c0b1d6e716b/logo.png",
	original_filename: "logo.png",
	size: 1539464,
	content_type: "image/png",
	created_at: "2026-06-30T20:28:51Z"
};
//#endregion
//#region src/components/site/AccessGate.tsx
var KEY = "granite_access_ok";
function AccessGate({ children }) {
	const [ok, setOk] = useState(null);
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
	if (ok) return /* @__PURE__ */ jsx(Fragment, { children });
	const submit = (e) => {
		e.preventDefault();
		if (val.trim() === SITE.accessCode) {
			try {
				sessionStorage.setItem(KEY, "1");
			} catch {}
			setOk(true);
		} else setErr("Invalid access code. Please try again.");
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex items-center justify-center px-4 hero-gradient relative overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 opacity-30 pointer-events-none",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--brand-glow)] blur-3xl floaty" }), /* @__PURE__ */ jsx("div", {
				className: "absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--brand)] blur-3xl floaty",
				style: { animationDelay: "2s" }
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative w-full max-w-md glass-dark rounded-3xl p-8 reveal-up text-white",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-center mb-6",
					children: /* @__PURE__ */ jsx("img", {
						src: logo_png_asset_default.url,
						alt: "Granite Installations",
						className: "h-20 w-auto drop-shadow-2xl"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-3",
							children: [/* @__PURE__ */ jsx(Lock, { className: "w-3.5 h-3.5" }), " Private Demo Preview"]
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-bold mb-2",
							children: "Access Required"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-white/70",
							children: "Enter the access code to view this demo website."
						})
					]
				}),
				/* @__PURE__ */ jsxs("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsx("input", {
							type: "text",
							value: val,
							onChange: (e) => {
								setVal(e.target.value);
								setErr("");
							},
							placeholder: "Enter access code",
							className: "w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-glow)] text-center tracking-widest",
							autoFocus: true
						}),
						err && /* @__PURE__ */ jsx("p", {
							className: "text-sm text-red-300 text-center",
							children: err
						}),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "w-full btn-brand py-3.5 rounded-xl font-semibold",
							children: "Unlock Website"
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 space-y-2 text-xs text-white/70 border-t border-white/10 pt-5",
					children: [/* @__PURE__ */ jsxs("p", {
						className: "flex items-start gap-2",
						children: [
							/* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mt-0.5 flex-shrink-0 text-[color:var(--brand-glow)]" }),
							" Demo is valid for ",
							/* @__PURE__ */ jsx("b", {
								className: "text-white",
								children: "48 hours"
							}),
							" only."
						]
					}), /* @__PURE__ */ jsxs("p", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 mt-0.5 flex-shrink-0 text-[color:var(--brand-glow)]" }), " Website goes permanently live only after invoice payment."]
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-6 text-center text-[11px] text-white/50",
					children: [
						"Website designed by",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: SITE.designer.url,
							target: "_blank",
							rel: "noreferrer",
							className: "underline hover:text-white",
							children: SITE.designer.label
						}),
						" ",
						"• ",
						SITE.designer.phone
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/site/Header.tsx
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const path = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		setOpen(false);
	}, [path]);
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-[var(--shadow-soft)]" : "bg-transparent"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2 group",
					children: [/* @__PURE__ */ jsx("img", {
						src: logo_png_asset_default.url,
						alt: "Granite Installations",
						className: "h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
					}), /* @__PURE__ */ jsxs("span", {
						className: `hidden sm:block font-display font-bold leading-tight ${scrolled ? "text-[color:var(--ink)]" : "text-white"}`,
						children: [/* @__PURE__ */ jsx("span", {
							className: "block text-sm",
							children: "GRANITE INSTALLATIONS"
						}), /* @__PURE__ */ jsx("span", {
							className: "block text-[10px] tracking-wider opacity-70",
							children: "PREMIUM STONE SOLUTIONS"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-1",
					children: NAV.map((n) => {
						const active = path === n.to;
						return /* @__PURE__ */ jsx(Link, {
							to: n.to,
							className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${active ? "bg-[color:var(--brand)] text-white shadow-[var(--shadow-glow)]" : scrolled ? "text-[color:var(--ink)] hover:bg-[color:var(--accent)]" : "text-white hover:bg-white/10"}`,
							children: n.label
						}, n.to);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsxs("a", {
							href: telLink,
							className: `hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition ${scrolled ? "bg-[color:var(--ink)] text-white hover:bg-[color:var(--brand-deep)]" : "bg-white/15 text-white hover:bg-white/25 backdrop-blur"}`,
							children: [
								/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
								" ",
								SITE.phone
							]
						}),
						/* @__PURE__ */ jsx("a", {
							href: waLink(),
							target: "_blank",
							rel: "noreferrer",
							className: "hidden sm:inline-flex btn-whatsapp px-4 py-2.5 rounded-full text-sm font-semibold",
							children: "WhatsApp"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen(true),
							className: `lg:hidden p-2.5 rounded-full ${scrolled ? "bg-[color:var(--accent)] text-[color:var(--ink)]" : "bg-white/15 text-white backdrop-blur"}`,
							"aria-label": "Open menu",
							children: /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
						})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: `fixed inset-0 z-[60] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`,
		"aria-hidden": !open,
		children: [/* @__PURE__ */ jsx("div", {
			className: `absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`,
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ jsxs("aside", {
			className: `absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white text-[color:var(--ink)] shadow-2xl transition-transform duration-300 flex flex-col ${open ? "translate-x-0" : "translate-x-full"}`,
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between p-5 border-b border-[color:var(--border)]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("img", {
							src: logo_png_asset_default.url,
							alt: "",
							className: "h-10 w-auto"
						}), /* @__PURE__ */ jsxs("span", {
							className: "font-display font-bold text-sm leading-tight",
							children: [
								"GRANITE INSTALLATIONS",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[10px] opacity-60 tracking-wider",
									children: "PREMIUM STONE SOLUTIONS"
								})
							]
						})]
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => setOpen(false),
						className: "p-2 rounded-full bg-[color:var(--accent)] hover:rotate-90 transition-transform",
						"aria-label": "Close menu",
						children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "flex-1 overflow-y-auto py-4",
					children: NAV.map((n, i) => {
						const active = path === n.to;
						return /* @__PURE__ */ jsx(Link, {
							to: n.to,
							className: `block mx-3 my-1 px-4 py-3.5 rounded-2xl font-medium text-base transition reveal-up ${active ? "bg-[color:var(--brand)] text-white" : "hover:bg-[color:var(--accent)]"}`,
							style: { animationDelay: `${i * 60}ms` },
							children: n.label
						}, n.to);
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "p-4 border-t border-[color:var(--border)] space-y-2",
					children: [/* @__PURE__ */ jsxs("a", {
						href: telLink,
						className: "flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[color:var(--ink)] text-white font-semibold",
						children: [
							/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
							" Call ",
							SITE.phone
						]
					}), /* @__PURE__ */ jsx("a", {
						href: waLink(),
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center justify-center gap-2 w-full btn-whatsapp py-3 rounded-xl font-semibold",
						children: "Chat on WhatsApp"
					})]
				})
			]
		})]
	})] });
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "relative mt-16 pb-24 lg:pb-0",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "hero-gradient text-white",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ jsx("img", {
								src: logo_png_asset_default.url,
								alt: "",
								className: "h-14 w-auto"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display font-bold",
								children: "GRANITE INSTALLATIONS"
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] tracking-wider opacity-70",
								children: "PREMIUM STONE SOLUTIONS"
							})] })]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-sm text-white/75 leading-relaxed",
							children: "Built for Elegance. Made to Last. Premium granite, marble, quartz and porcelain installations across South Africa."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex gap-2 mt-5",
							children: [
								Facebook,
								Instagram,
								MessageCircle
							].map((I, i) => /* @__PURE__ */ jsx("a", {
								href: i === 2 ? waLink() : "#",
								target: "_blank",
								rel: "noreferrer",
								className: "w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-[color:var(--brand)] transition-colors",
								children: /* @__PURE__ */ jsx(I, { className: "w-4 h-4" })
							}, i))
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display font-bold mb-4 text-sm uppercase tracking-wider",
						children: "Quick Links"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 text-sm text-white/80",
						children: [
							["/", "Home"],
							["/about", "About Us"],
							["/services", "Services"],
							["/gallery", "Gallery"],
							["/faq", "FAQ"],
							["/contact", "Contact"]
						].map(([to, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to,
							className: "hover:text-[color:var(--brand-glow)] transition",
							children: label
						}) }, to))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h4", {
							className: "font-display font-bold mb-4 text-sm uppercase tracking-wider",
							children: "Contact"
						}),
						/* @__PURE__ */ jsxs("ul", {
							className: "space-y-3 text-sm text-white/85",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: telLink,
									className: "flex items-center gap-2 hover:text-[color:var(--brand-glow)]",
									children: [
										/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }),
										" ",
										SITE.phone
									]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: mailLink,
									className: "flex items-center gap-2 hover:text-[color:var(--brand-glow)]",
									children: [
										/* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
										" ",
										SITE.email
									]
								}) }),
								/* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2",
									children: [
										/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mt-0.5" }),
										" ",
										SITE.address
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: waLink(),
							target: "_blank",
							rel: "noreferrer",
							className: "mt-5 inline-flex btn-whatsapp px-4 py-2.5 rounded-xl text-sm font-semibold",
							children: [/* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4 mr-2" }), " Chat on WhatsApp"]
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "font-display font-bold mb-4 text-sm uppercase tracking-wider",
						children: "Find Us"
					}), /* @__PURE__ */ jsx("div", {
						className: "rounded-2xl overflow-hidden border border-white/15 shadow-xl",
						children: /* @__PURE__ */ jsx("iframe", {
							title: "Map",
							src: `https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`,
							className: "w-full h-40 grayscale-[20%]",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})] })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-white/10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/70",
					children: [/* @__PURE__ */ jsxs("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						SITE.fullName,
						". All rights reserved."
					] }), /* @__PURE__ */ jsx("p", { children: SITE.tagline })]
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "bg-[color:var(--ink)] text-white/80 text-center text-xs py-3 px-4",
			children: [
				"Website designed by",
				" ",
				/* @__PURE__ */ jsxs("a", {
					href: SITE.designer.url,
					target: "_blank",
					rel: "noreferrer",
					className: "text-[color:var(--brand-glow)] font-semibold hover:underline",
					children: [
						"[",
						SITE.designer.label,
						"]"
					]
				}),
				" ",
				/* @__PURE__ */ jsx("a", {
					href: `tel:${SITE.designer.phone}`,
					className: "text-[color:var(--brand-glow)] font-semibold hover:underline",
					children: SITE.designer.phone
				})
			]
		})]
	});
}
//#endregion
//#region src/components/site/MobileBottomNav.tsx
var NAV_ITEMS = [
	{
		to: "/",
		label: "Home",
		icon: Chrome
	},
	{
		to: "/services",
		label: "Services",
		icon: Wrench
	},
	{
		to: "/gallery",
		label: "Gallery",
		icon: Image
	}
];
function MobileBottomNav() {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const installEvent = useInstallEvent();
	const isStandalone = typeof window !== "undefined" && (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone);
	const handleInstall = async () => {
		if (installEvent) await triggerInstall();
		else window.dispatchEvent(new CustomEvent("pwa-show-ios-hint"));
	};
	return /* @__PURE__ */ jsx("nav", {
		className: "lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2 pointer-events-none",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pointer-events-auto mx-auto max-w-md rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,30,0.35)] border border-[color:var(--border)] flex justify-around items-stretch px-2 py-2",
			children: [NAV_ITEMS.map((it) => {
				const Icon = it.icon;
				const active = path === it.to;
				return /* @__PURE__ */ jsxs(Link, {
					to: it.to,
					className: `flex-1 flex flex-col items-center gap-1 py-2 px-2 rounded-2xl transition-all ${active ? "bg-[color:var(--brand)] text-white shadow-[var(--shadow-glow)] scale-[1.02]" : "text-[color:var(--ink)] hover:bg-[color:var(--accent)]"}`,
					children: [/* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", {
						className: "text-[10px] font-semibold tracking-wide",
						children: it.label
					})]
				}, it.to);
			}), !isStandalone && /* @__PURE__ */ jsxs("button", {
				onClick: handleInstall,
				className: "flex-1 flex flex-col items-center gap-1 py-2 px-2 rounded-2xl transition-all text-[color:var(--ink)] hover:bg-[color:var(--accent)]",
				children: [installEvent ? /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Smartphone, { className: "w-5 h-5" }), /* @__PURE__ */ jsx("span", {
					className: "text-[10px] font-semibold tracking-wide",
					children: "Install App"
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/site/ChatBot.tsx
var SERVICE_KEYWORDS = {
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
	install: "installation"
};
function botReply(text) {
	const t = text.toLowerCase();
	if (/\b(hi|hello|hey|hola|howzit|sawubona|dumela)\b/.test(t)) return {
		role: "bot",
		text: "Hi there! I'm the Granite Installations assistant. We supply and install granite, marble, quartz and porcelain surfaces. How can I help you today?",
		quick: [
			{
				label: "Kitchen Counters",
				value: "I need a kitchen counter top"
			},
			{
				label: "Bathroom Vanity",
				value: "I need a bathroom vanity"
			},
			{
				label: "Wall Cladding",
				value: "I need wall cladding"
			},
			{
				label: "Get a Quote",
				value: "Please send me a quote"
			}
		]
	};
	if (/\b(price|cost|how much|quote|charge)\b/.test(t)) return {
		role: "bot",
		text: "Pricing depends on the stone type, surface area and complexity. The fastest way to get an accurate quote is via WhatsApp — our team responds quickly.",
		quick: [{
			label: "WhatsApp Us",
			value: "__wa__"
		}, {
			label: "Call Now",
			value: "__call__"
		}]
	};
	if (/\b(area|location|where|come|travel|service area)\b/.test(t)) return {
		role: "bot",
		text: "We operate across South Africa for both residential and commercial projects. Contact us to confirm availability for your area.",
		quick: [{
			label: "Book a Consultation",
			value: "__wa__"
		}]
	};
	if (/\b(time|how long|when|today|tomorrow|emergency|urgent)\b/.test(t)) return {
		role: "bot",
		text: "Project timelines vary depending on the scope. We'll provide a full timeline during consultation. Want to book a free quote?",
		quick: [{
			label: "Book Now",
			value: "__wa__"
		}]
	};
	if (/\b(warrant|guarantee)\b/.test(t)) return {
		role: "bot",
		text: "Every installation is completed to the highest standard with quality craftsmanship. We stand behind our work. Contact us for details on our quality guarantee."
	};
	if (/\b(thanks|thank you|cool|great|nice|awesome)\b/.test(t)) return {
		role: "bot",
		text: "You're welcome! Anything else I can help with?"
	};
	const hits = Object.keys(SERVICE_KEYWORDS).filter((k) => t.includes(k));
	if (hits.length) return {
		role: "bot",
		text: `${SERVICE_KEYWORDS[hits[0]]} is one of our specialities. Tap below to chat with our team on WhatsApp for a fast quote.`,
		quick: [{
			label: "WhatsApp Now",
			value: "__wa__"
		}, {
			label: "Call Us",
			value: "__call__"
		}]
	};
	return {
		role: "bot",
		text: "For the quickest response, our team is available on WhatsApp. Or I can answer questions about our stone types, pricing or project process.",
		quick: [
			{
				label: "WhatsApp",
				value: "__wa__"
			},
			{
				label: "Pricing",
				value: "How much does it cost?"
			},
			{
				label: "Stone Types",
				value: "What types of stone do you install?"
			}
		]
	};
}
function ChatBot() {
	const [open, setOpen] = useState(false);
	const [showPing, setShowPing] = useState(false);
	const [msgs, setMsgs] = useState([{
		role: "bot",
		text: "Welcome to Granite Installations! I'm your virtual assistant. How can I help you today?",
		quick: [
			{
				label: "Kitchen Counters",
				value: "I need a kitchen counter top"
			},
			{
				label: "Bathroom Vanity",
				value: "I need a bathroom vanity"
			},
			{
				label: "Wall Cladding",
				value: "I need wall cladding"
			},
			{
				label: "Get a Quote",
				value: "Please send me a quote"
			}
		]
	}]);
	const [input, setInput] = useState("");
	const [typing, setTyping] = useState(false);
	const scrollRef = useRef(null);
	useEffect(() => {
		const t = setTimeout(() => setShowPing(true), 4e3);
		return () => clearTimeout(t);
	}, []);
	useEffect(() => {
		scrollRef.current?.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [
		msgs,
		typing,
		open
	]);
	const handleSend = (text) => {
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
		setMsgs((m) => [...m, {
			role: "user",
			text: trimmed
		}]);
		setInput("");
		setTyping(true);
		setTimeout(() => {
			setMsgs((m) => [...m, botReply(trimmed)]);
			setTyping(false);
		}, 700 + Math.random() * 500);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("button", {
			onClick: () => {
				setOpen(true);
				setShowPing(false);
			},
			className: `fixed z-40 right-4 bottom-24 lg:bottom-6 w-14 h-14 rounded-full btn-whatsapp grid place-items-center transition-transform ${open ? "scale-0" : "scale-100"}`,
			"aria-label": "Open chat",
			children: [
				/* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-white" }),
				showPing && /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-ping" }),
				showPing && /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white" })
			]
		}),
		showPing && !open && /* @__PURE__ */ jsxs("div", {
			className: "fixed z-40 right-4 bottom-40 lg:bottom-24 max-w-[260px] glass-card rounded-2xl p-3 reveal-up cursor-pointer",
			onClick: () => {
				setOpen(true);
				setShowPing(false);
			},
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-sm font-semibold text-[color:var(--ink)]",
				children: "Hi there!"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xs text-[color:var(--muted-foreground)] mt-0.5",
				children: "Need a quote? Chat with us now!"
			})]
		}),
		/* @__PURE__ */ jsx("div", {
			className: `fixed z-50 right-3 sm:right-4 bottom-24 lg:bottom-4 w-[calc(100%-1.5rem)] sm:w-[380px] max-h-[78vh] sm:max-h-[600px] transition-all duration-300 origin-bottom-right ${open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}`,
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col h-[78vh] sm:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-[color:var(--border)]",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "hero-gradient p-4 text-white flex items-center gap-3",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-10 h-10 rounded-full bg-white/15 grid place-items-center",
								children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-semibold text-sm",
									children: "Granite Installations Assistant"
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-xs flex items-center gap-1.5 text-white/80",
									children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }), " Online now"]
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => setOpen(false),
								className: "p-1.5 rounded-full hover:bg-white/15",
								"aria-label": "Close",
								children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						ref: scrollRef,
						className: "flex-1 overflow-y-auto p-4 space-y-3 bg-[color:var(--secondary)]",
						children: [msgs.map((m, i) => /* @__PURE__ */ jsx("div", {
							className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
							children: /* @__PURE__ */ jsxs("div", {
								className: `max-w-[80%] ${m.role === "user" ? "bg-[color:var(--brand)] text-white rounded-2xl rounded-br-sm" : "bg-white text-[color:var(--ink)] rounded-2xl rounded-bl-sm shadow-sm"} px-4 py-2.5`,
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-sm leading-relaxed whitespace-pre-wrap",
									children: m.text
								}), m.quick && /* @__PURE__ */ jsx("div", {
									className: "mt-2 flex flex-wrap gap-1.5",
									children: m.quick.map((q, j) => /* @__PURE__ */ jsx("button", {
										onClick: () => handleSend(q.value),
										className: "text-xs px-3 py-1.5 rounded-full bg-[color:var(--brand-glow)]/15 text-[color:var(--brand-deep)] hover:bg-[color:var(--brand-glow)]/30 transition font-medium",
										children: q.label
									}, j))
								})]
							})
						}, i)), typing && /* @__PURE__ */ jsx("div", {
							className: "flex justify-start",
							children: /* @__PURE__ */ jsxs("div", {
								className: "bg-white rounded-2xl rounded-bl-sm shadow-sm px-4 py-3 flex gap-1",
								children: [
									/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-[color:var(--brand)] animate-bounce" }),
									/* @__PURE__ */ jsx("span", {
										className: "w-2 h-2 rounded-full bg-[color:var(--brand)] animate-bounce",
										style: { animationDelay: "0.15s" }
									}),
									/* @__PURE__ */ jsx("span", {
										className: "w-2 h-2 rounded-full bg-[color:var(--brand)] animate-bounce",
										style: { animationDelay: "0.3s" }
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: (e) => {
							e.preventDefault();
							handleSend(input);
						},
						className: "border-t border-[color:var(--border)] p-3 flex gap-2 bg-white",
						children: [/* @__PURE__ */ jsx("input", {
							value: input,
							onChange: (e) => setInput(e.target.value),
							placeholder: "Type your message...",
							className: "flex-1 px-4 py-2.5 rounded-full bg-[color:var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)] text-sm"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "w-10 h-10 rounded-full btn-brand grid place-items-center flex-shrink-0",
							"aria-label": "Send",
							children: /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" })
						})]
					})
				]
			})
		})
	] });
}
//#endregion
//#region src/components/site/PWAInstallPrompt.tsx
var DISMISS_KEY = "granite_pwa_dismissed_v1";
function PWAInstallPrompt() {
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
		window.addEventListener("pwa-show-ios-hint", showHint);
		let t;
		if (!dismissed) t = setTimeout(() => setShow(true), isIos ? 8e3 : 6e3);
		return () => {
			window.removeEventListener("pwa-show-ios-hint", showHint);
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
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-x-0 bottom-28 lg:bottom-6 z-[55] flex justify-center px-4 pointer-events-none",
		children: /* @__PURE__ */ jsxs("div", {
			className: "pointer-events-auto w-full max-w-md glass-card rounded-2xl p-4 flex items-center gap-3 reveal-up shadow-2xl",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: logo_png_asset_default.url,
					alt: "",
					className: "w-12 h-12 rounded-xl flex-shrink-0"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-semibold text-sm text-[color:var(--ink)]",
						children: "Install Granite Installations App"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-[color:var(--muted-foreground)] truncate",
						children: ios && !evt ? "Tap Share → Add to Home Screen" : "Get fast access from your home screen"
					})]
				}),
				evt ? /* @__PURE__ */ jsxs("button", {
					onClick: install,
					className: "btn-brand px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 flex-shrink-0",
					children: [/* @__PURE__ */ jsx(Download, { className: "w-3.5 h-3.5" }), " Install"]
				}) : null,
				/* @__PURE__ */ jsx("button", {
					onClick: close,
					className: "p-1.5 rounded-full hover:bg-[color:var(--accent)] flex-shrink-0",
					"aria-label": "Close",
					children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
				})
			]
		})
	});
}
//#endregion
//#region src/components/site/ScrollToTop.tsx
function ScrollToTop() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ jsx("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		className: "fixed z-30 left-4 bottom-24 lg:bottom-6 w-11 h-11 rounded-full bg-white shadow-lg border border-[color:var(--border)] grid place-items-center hover:bg-[color:var(--brand)] hover:text-white transition reveal-up",
		"aria-label": "Scroll to top",
		children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-4 h-4" })
	});
}
//#endregion
//#region src/components/site/Loader.tsx
function Loader$1() {
	const [done, setDone] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => setDone(true), 900);
		return () => clearTimeout(t);
	}, []);
	if (done) return null;
	return /* @__PURE__ */ jsx("div", {
		className: "fixed inset-0 z-[100] hero-gradient grid place-items-center transition-opacity duration-500",
		children: /* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("img", {
				src: logo_png_asset_default.url,
				alt: "",
				className: "h-24 w-auto mx-auto mb-6 animate-pulse"
			}), /* @__PURE__ */ jsx("div", {
				className: "w-40 h-1 mx-auto rounded-full bg-white/15 overflow-hidden",
				children: /* @__PURE__ */ jsx("div", { className: "h-full w-1/2 shimmer-bg rounded-full" })
			})]
		})
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "mt-6 inline-flex btn-brand px-5 py-2.5 rounded-xl text-sm font-semibold",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Please try again."
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 btn-brand px-5 py-2.5 rounded-xl text-sm font-semibold",
					children: "Try again"
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, maximum-scale=5"
			},
			{
				name: "theme-color",
				content: "#3d2b1a"
			},
			{ title: "Granite Installations (Pty) Ltd | Premium Stone Solutions" },
			{
				name: "description",
				content: "Premium granite, marble, quartz and porcelain installations. Kitchen counter tops, bathroom vanities, wall cladding and more. Built for Elegance. Made to Last."
			},
			{
				name: "author",
				content: "Granite Installations (Pty) Ltd"
			},
			{
				property: "og:title",
				content: "Granite Installations (Pty) Ltd | Premium Stone Solutions"
			},
			{
				property: "og:description",
				content: "Built for Elegance. Made to Last. Premium stone surface installations across South Africa."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Granite Installations (Pty) Ltd | Premium Stone Solutions"
			},
			{
				name: "twitter:description",
				content: "Built for Elegance. Made to Last. Premium stone surface installations across South Africa."
			},
			{
				property: "og:image",
				content: "https://i.imgur.com/7dTi44k.jpeg"
			},
			{
				name: "twitter:image",
				content: "https://i.imgur.com/7dTi44k.jpeg"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "icon",
				href: "/icons/icon-512.png",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/icons/icon-512.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&family=Manrope:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function ScrollResetOnNav() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return null;
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	useEffect(() => {
		import("./pwa-install-DSqzUmow.js").then((m) => m.initPwaInstall());
	}, []);
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs(AccessGate, { children: [
			/* @__PURE__ */ jsx(Loader$1, {}),
			/* @__PURE__ */ jsx(ScrollResetOnNav, {}),
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "min-h-screen",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(MobileBottomNav, {}),
			/* @__PURE__ */ jsx(ChatBot, {}),
			/* @__PURE__ */ jsx(PWAInstallPrompt, {}),
			/* @__PURE__ */ jsx(ScrollToTop, {}),
			/* @__PURE__ */ jsx(Toaster, {
				position: "top-center",
				richColors: true
			})
		] })
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		"/",
		"/about",
		"/services",
		"/gallery",
		"/contact",
		"/faq"
	].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$4 = () => import("./services-jE8YSlVM.js");
var Route$4 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services | Granite Installations (Pty) Ltd" },
		{
			name: "description",
			content: "Premium granite, marble, quartz and porcelain installations for kitchen counter tops, bathroom vanities, wall cladding and more."
		},
		{
			property: "og:title",
			content: "Our Services | Granite Installations"
		},
		{
			property: "og:description",
			content: "Premium stone solutions for every space."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$3 = () => import("./gallery-1Mo0ycoE.js");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery | Granite Installations — Our Projects" },
		{
			name: "description",
			content: "Browse our completed stone installation projects — granite, marble, quartz and porcelain surfaces for kitchens, bathrooms, reception areas and more."
		},
		{
			property: "og:title",
			content: "Gallery | Granite Installations"
		},
		{
			property: "og:description",
			content: "Premium stone installations, real results."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/faq.tsx
var $$splitComponentImporter$2 = () => import("./faq-CQk5xdPX.js");
var Route$2 = createFileRoute("/faq")({
	head: () => ({ meta: [
		{ title: "FAQ | Granite Installations (Pty) Ltd" },
		{
			name: "description",
			content: "Common questions about our granite, marble, quartz and porcelain installation services."
		},
		{
			property: "og:title",
			content: "FAQ | Granite Installations"
		},
		{
			property: "og:description",
			content: "Answers to common questions about our stone installation services."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$1 = () => import("./contact-B7IBfJqz.js");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Granite Installations (Pty) Ltd" },
		{
			name: "description",
			content: "Get in touch with Granite Installations. Call, WhatsApp, email or send us a quote request — we respond fast."
		},
		{
			property: "og:title",
			content: "Contact Granite Installations"
		},
		{
			property: "og:description",
			content: "Reach us by phone, WhatsApp, email or form."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-DZIXk-9B.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Granite Installations (Pty) Ltd | Premium Stone Solutions" },
		{
			name: "description",
			content: "Premium granite, marble, quartz and porcelain installations for kitchen counter tops, bathrooms, reception areas and wall cladding. Built for Elegance. Made to Last."
		},
		{
			property: "og:title",
			content: "Granite Installations (Pty) Ltd — Premium Stone Solutions"
		},
		{
			property: "og:description",
			content: "Built for Elegance. Made to Last. Transforming Spaces. Enhancing Lifestyles."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var ServicesRoute = Route$4.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$6
});
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$6
});
var FaqRoute = Route$2.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute,
	ContactRoute,
	FaqRoute,
	GalleryRoute,
	ServicesRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.ts
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { triggerInstall as a, getRouter, setInstallEvent as i, isIOSDevice as n, useInstallEvent as o, isStandalonePWA as r, initPwaInstall as t };
