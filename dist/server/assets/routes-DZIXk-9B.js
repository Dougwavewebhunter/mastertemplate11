import { i as waLink, r as telLink, t as SITE } from "./site-BHhZZt2k.js";
import { t as SERVICES } from "./services-data-DS697pSe.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, FileText, MessageCircle, Phone, ShieldCheck, Star, Users, Zap } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var SLIDES = [
	{
		img: "https://i.imgur.com/7dTi44k.jpeg",
		eyebrow: "PREMIUM STONE SOLUTIONS",
		title: "Built for Elegance.",
		accent: "Made to Last.",
		text: "Transforming spaces with premium granite, marble, quartz and porcelain surfaces."
	},
	{
		img: "https://i.imgur.com/9uJGT7h.jpeg",
		eyebrow: "EXPERT CRAFTSMANSHIP",
		title: "Quality You Can",
		accent: "See & Trust.",
		text: "Expert installation teams delivering flawless stone surfaces for kitchens, bathrooms and commercial spaces."
	},
	{
		img: "https://i.imgur.com/lqogvWX.jpeg",
		eyebrow: "CUSTOM DESIGNS",
		title: "Transforming Spaces.",
		accent: "Enhancing Lifestyles.",
		text: "From kitchen counter tops to wall cladding — custom stone solutions crafted to perfection."
	}
];
var TYPING_WORDS = [
	"Granite Counter Tops",
	"Marble Vanities",
	"Quartz Surfaces",
	"Porcelain Cladding"
];
function HomePage() {
	const [active, setActive] = useState(0);
	const [typed, setTyped] = useState("");
	const [wi, setWi] = useState(0);
	const [del, setDel] = useState(false);
	useEffect(() => {
		const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6e3);
		return () => clearInterval(t);
	}, []);
	useEffect(() => {
		const word = TYPING_WORDS[wi];
		const t = setTimeout(() => {
			if (!del && typed === word) {
				setTimeout(() => setDel(true), 1400);
				return;
			}
			if (del && typed === "") {
				setDel(false);
				setWi((wi + 1) % TYPING_WORDS.length);
				return;
			}
			setTyped(del ? word.slice(0, typed.length - 1) : word.slice(0, typed.length + 1));
		}, del ? 50 : 110);
		return () => clearTimeout(t);
	}, [
		typed,
		del,
		wi
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative h-[100svh] min-h-[640px] overflow-hidden",
			children: [
				SLIDES.map((s, i) => /* @__PURE__ */ jsxs("div", {
					className: `absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`,
					children: [
						/* @__PURE__ */ jsx("img", {
							src: s.img,
							alt: "",
							className: "absolute inset-0 w-full h-full object-cover",
							loading: i === 0 ? "eager" : "lazy"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[color:var(--ink)]/85 via-[color:var(--brand-deep)]/70 to-[color:var(--brand)]/60" }),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-transparent to-transparent" })
					]
				}, i)),
				/* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-10 w-72 h-72 rounded-full bg-[color:var(--brand-glow)]/20 blur-3xl floaty pointer-events-none" }),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[color:var(--brand)]/25 blur-3xl floaty pointer-events-none",
					style: { animationDelay: "2s" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center pt-16",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl text-white",
						children: [
							SLIDES.map((s, i) => i === active && /* @__PURE__ */ jsxs("div", {
								className: "reveal-up",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-xs font-semibold tracking-wider mb-5",
										children: [
											/* @__PURE__ */ jsx(Zap, { className: "w-3.5 h-3.5 text-[color:var(--brand-glow)]" }),
											" ",
											s.eyebrow
										]
									}),
									/* @__PURE__ */ jsxs("h1", {
										className: "text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4",
										children: [
											s.title,
											/* @__PURE__ */ jsx("br", {}),
											/* @__PURE__ */ jsx("span", {
												className: "gradient-text",
												children: s.accent
											})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-lg text-white/85 mb-3 max-w-xl",
										children: s.text
									})
								]
							}, i)),
							/* @__PURE__ */ jsxs("p", {
								className: "text-base sm:text-lg text-white/80 mb-8 font-medium",
								children: ["We specialise in ", /* @__PURE__ */ jsx("span", {
									className: "text-[color:var(--brand-glow)] font-bold typing-caret",
									children: typed
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-3",
								children: [/* @__PURE__ */ jsxs("a", {
									href: waLink(),
									target: "_blank",
									rel: "noreferrer",
									className: "btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }), " WhatsApp Us"]
								}), /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20 transition",
									children: [/* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }), " Request Quote"]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-2 mt-10",
								children: SLIDES.map((_, i) => /* @__PURE__ */ jsx("button", {
									onClick: () => setActive(i),
									className: `h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/60"}`,
									"aria-label": `Slide ${i + 1}`
								}, i))
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute bottom-0 inset-x-0 hidden md:block",
					children: /* @__PURE__ */ jsx("div", {
						className: "max-w-7xl mx-auto px-6 pb-6",
						children: /* @__PURE__ */ jsx("div", {
							className: "glass-dark rounded-2xl p-4 grid grid-cols-4 gap-4 text-white",
							children: [
								{
									i: Zap,
									l: "Premium Quality"
								},
								{
									i: Award,
									l: "Expert Installation"
								},
								{
									i: ShieldCheck,
									l: "Custom Designs"
								},
								{
									i: Star,
									l: "Durable & Reliable"
								}
							].map(({ i: I, l }) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 justify-center",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-9 h-9 rounded-full bg-[color:var(--brand)]/30 grid place-items-center",
									children: /* @__PURE__ */ jsx(I, { className: "w-4 h-4" })
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold",
									children: l
								})]
							}, l))
						})
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 sm:py-28 relative",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3",
							children: "WHAT WE OFFER"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-3xl sm:text-5xl font-bold mb-4",
							children: ["Premium Stone Solutions, ", /* @__PURE__ */ jsx("span", {
								className: "gradient-text",
								children: "Perfectly Installed."
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[color:var(--muted-foreground)]",
							children: "We supply and install granite, marble, quartz and porcelain for kitchens, bathrooms, reception areas and beyond."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5",
					children: SERVICES.map((s, i) => {
						const Icon = s.icon;
						return /* @__PURE__ */ jsxs(Link, {
							to: "/services",
							hash: s.slug,
							className: "group relative bg-white rounded-3xl overflow-hidden border border-[color:var(--border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-1 transition-all duration-300 reveal-up",
							style: { animationDelay: `${i * 80}ms` },
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative h-52 overflow-hidden",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: [
											"https://i.imgur.com/7dTi44k.jpeg",
											"https://i.imgur.com/bYZtqnQ.jpeg",
											"https://i.imgur.com/4QFhhOU.jpeg",
											"https://i.imgur.com/BYZAp69.jpeg"
										][i % 4],
										alt: s.title,
										className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
										loading: "lazy"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 via-transparent to-transparent" }),
									/* @__PURE__ */ jsx("div", {
										className: "absolute bottom-4 left-4",
										children: /* @__PURE__ */ jsx("div", {
											className: "w-12 h-12 rounded-2xl btn-brand grid place-items-center",
											children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-white" })
										})
									})
								]
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ jsx("h3", {
										className: "text-xl font-bold mb-2",
										children: s.title
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-[color:var(--muted-foreground)] mb-4",
										children: s.blurb
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand)] group-hover:gap-2.5 transition-all",
										children: ["Learn more ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
									})
								]
							})]
						}, s.slug);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-20 sm:py-28 hero-gradient text-white relative overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[color:var(--brand-glow)]/20 blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[color:var(--brand)]/30 blur-3xl" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-bold tracking-[0.25em] text-[color:var(--brand-glow)] mb-3",
							children: "WHY CHOOSE US"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-3xl sm:text-5xl font-bold mb-5",
							children: ["Quality You Can See ", /* @__PURE__ */ jsx("span", {
								className: "gradient-text",
								children: "& Trust."
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/80 mb-8 text-lg",
							children: "We don't just install stone — we craft surfaces that transform spaces and stand the test of time."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid sm:grid-cols-2 gap-4",
							children: [
								{
									i: Users,
									t: "Expert Installation",
									d: "Skilled craftsmen with years of experience in stone installation."
								},
								{
									i: Zap,
									t: "Premium Quality",
									d: "Only the finest stone materials for every project."
								},
								{
									i: ShieldCheck,
									t: "Custom Designs",
									d: "Bespoke solutions tailored to your space and vision."
								},
								{
									i: Award,
									t: "Durable & Reliable",
									d: "Surfaces built to last a lifetime with proper care."
								}
							].map(({ i: I, t, d }) => /* @__PURE__ */ jsxs("div", {
								className: "glass-dark rounded-2xl p-5",
								children: [
									/* @__PURE__ */ jsx(I, { className: "w-7 h-7 text-[color:var(--brand-glow)] mb-3" }),
									/* @__PURE__ */ jsx("h4", {
										className: "font-bold mb-1",
										children: t
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-sm text-white/70",
										children: d
									})
								]
							}, t))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap gap-3 mt-8",
							children: [/* @__PURE__ */ jsxs("a", {
								href: telLink,
								className: "btn-brand inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold",
								children: [/* @__PURE__ */ jsx(Phone, { className: "w-4 h-4" }), " Call Us Now"]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 backdrop-blur transition border border-white/20",
								children: ["More About Us ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
							})]
						})
					] }), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-4",
						children: [
							{
								v: "500+",
								l: "Projects Done"
							},
							{
								v: "4",
								l: "Stone Types"
							},
							{
								v: "100%",
								l: "Guarantee"
							},
							{
								v: "5★",
								l: "Rated Service"
							}
						].map((s, i) => /* @__PURE__ */ jsxs("div", {
							className: "glass-dark rounded-3xl p-6 sm:p-8 text-center reveal-up",
							style: { animationDelay: `${i * 100}ms` },
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-4xl sm:text-5xl font-bold gradient-text mb-2",
								children: s.v
							}), /* @__PURE__ */ jsx("div", {
								className: "text-sm text-white/80 font-medium",
								children: s.l
							})]
						}, s.l))
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 sm:py-24 bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-12",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3",
								children: "OUR WORK"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl sm:text-5xl font-bold mb-4",
								children: "Project Showcase"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[color:var(--muted-foreground)]",
								children: "A glimpse of the premium stone surfaces we've installed across South Africa."
							})
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4",
						children: [
							"https://i.imgur.com/7dTi44k.jpeg",
							"https://i.imgur.com/9uJGT7h.jpeg",
							"https://i.imgur.com/lqogvWX.jpeg",
							"https://i.imgur.com/bYZtqnQ.jpeg",
							"https://i.imgur.com/4QFhhOU.jpeg",
							"https://i.imgur.com/BYZAp69.jpeg"
						].map((src, i) => /* @__PURE__ */ jsxs("div", {
							className: `group relative rounded-2xl overflow-hidden aspect-square shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all reveal-up ${i === 0 ? "md:row-span-2 md:aspect-auto" : ""}`,
							style: { animationDelay: `${i * 60}ms` },
							children: [/* @__PURE__ */ jsx("img", {
								src,
								alt: "Stone installation",
								className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
								loading: "lazy"
							}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" })]
						}, i))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "text-center mt-8",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/gallery",
							className: "inline-flex items-center gap-2 btn-brand px-6 py-3 rounded-2xl font-semibold",
							children: ["View Full Gallery ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 sm:py-24 bg-[color:var(--secondary)]",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-5xl mx-auto px-4 sm:px-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative overflow-hidden rounded-3xl hero-gradient p-10 sm:p-16 text-center text-white",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[color:var(--brand-glow)]/30 blur-3xl rounded-full" }), /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold tracking-[0.25em] text-[color:var(--brand-glow)] mb-3",
								children: "OUR COMMITMENT"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl sm:text-5xl font-bold mb-4",
								children: ["Built for Elegance. ", /* @__PURE__ */ jsx("span", {
									className: "gradient-text",
									children: "Made to Last."
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-white/85 mb-8 max-w-xl mx-auto",
								children: "Request a free quote for your stone installation project. We'll respond quickly."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap gap-3 justify-center",
								children: [/* @__PURE__ */ jsxs("a", {
									href: waLink(),
									target: "_blank",
									rel: "noreferrer",
									className: "btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold",
									children: [/* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }), " Chat on WhatsApp"]
								}), /* @__PURE__ */ jsxs(Link, {
									to: "/contact",
									className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold bg-white text-[color:var(--ink)] hover:bg-white/90 transition",
									children: ["Request a Quote ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-8 text-sm font-bold tracking-widest text-white/80",
								children: SITE.tagline
							})
						]
					})]
				})
			})
		})
	] });
}
var TESTIMONIALS = [
	{
		n: "Thabo M.",
		r: "Granite Installations transformed our kitchen completely. The counter tops are stunning and the workmanship is flawless. Highly recommend!"
	},
	{
		n: "Sarah K.",
		r: "We chose marble for our bathroom vanity and the result exceeded all expectations. Professional team, clean work, beautiful finish."
	},
	{
		n: "David N.",
		r: "The quartz surfaces in our reception area look absolutely premium. Clients always comment on how elegant the space looks."
	},
	{
		n: "Priya S.",
		r: "Outstanding porcelain wall cladding in our restaurant. Durable, beautiful and exactly what we envisioned. Will definitely use again."
	}
];
function Testimonials() {
	const [idx, setIdx] = useState(0);
	useEffect(() => {
		const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 5e3);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ jsx("section", {
		className: "py-20 sm:py-24 bg-[color:var(--secondary)]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-4 sm:px-6 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3",
					children: "TESTIMONIALS"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "text-3xl sm:text-5xl font-bold mb-12",
					children: "What Our Clients Say"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative h-56 sm:h-44",
					children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxs("div", {
						className: `absolute inset-0 transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`,
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex justify-center gap-1 mb-4",
								children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 fill-[color:var(--brand)] text-[color:var(--brand)]" }, j))
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-lg sm:text-xl italic text-[color:var(--ink)]/85 leading-relaxed mb-4",
								children: [
									"\"",
									t.r,
									"\""
								]
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "font-bold text-[color:var(--brand-deep)]",
								children: ["— ", t.n]
							})
						]
					}, i))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex gap-2 justify-center mt-6",
					children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ jsx("button", {
						onClick: () => setIdx(i),
						className: `h-2 rounded-full transition-all ${i === idx ? "w-8 bg-[color:var(--brand)]" : "w-2 bg-[color:var(--border)]"}`,
						"aria-label": `Testimonial ${i + 1}`
					}, i))
				})
			]
		})
	});
}
//#endregion
export { HomePage as component };
