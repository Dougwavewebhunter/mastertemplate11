import { i as waLink } from "./site-BHhZZt2k.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Award, CircleCheck, Heart, MapPin, Target } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "About Us",
			subtitle: "Quality You Can See & Trust."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "reveal-up",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-xs font-bold tracking-[0.25em] text-[color:var(--brand)] mb-3",
							children: "OUR STORY"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "text-3xl sm:text-4xl font-bold mb-5",
							children: ["Transforming Spaces. ", /* @__PURE__ */ jsx("span", {
								className: "gradient-text",
								children: "Enhancing Lifestyles."
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[color:var(--muted-foreground)] mb-4",
							children: "Granite Installations (Pty) Ltd was founded on a single commitment — delivering premium stone surfaces that stand the test of time. We supply and install granite, marble, quartz and porcelain for kitchens, bathrooms, reception areas and commercial spaces across South Africa."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-[color:var(--muted-foreground)] mb-6",
							children: "Our team of experienced craftsmen brings precision, passion and professionalism to every project. From custom kitchen counter tops to full wall cladding, we transform spaces with surfaces built for elegance and made to last."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid sm:grid-cols-2 gap-3",
							children: [
								"Premium Quality Stone",
								"Expert Installation Teams",
								"Custom Design Solutions",
								"Durable & Reliable Results"
							].map((p) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-[color:var(--brand)] flex-shrink-0" }), /* @__PURE__ */ jsx("span", {
									className: "text-sm font-medium",
									children: p
								})]
							}, p))
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "reveal-up",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ jsx("img", {
							src: "https://i.imgur.com/9uJGT7h.jpeg",
							alt: "Premium stone installation",
							className: "w-full h-auto",
							loading: "lazy"
						}), /* @__PURE__ */ jsxs("div", {
							className: "absolute bottom-4 left-4 right-4 glass-dark rounded-2xl p-4 text-white",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs font-bold tracking-widest text-[color:var(--brand-glow)] mb-1",
								children: "SERVICE AREA"
							}), /* @__PURE__ */ jsxs("p", {
								className: "font-semibold flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }), " Residential & Commercial Projects Nationwide"]
							})]
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-[color:var(--secondary)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-14",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl font-bold",
						children: "Our Values"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-[color:var(--muted-foreground)] mt-3",
						children: "What drives every project we undertake."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-3 gap-5",
					children: [
						{
							i: Target,
							t: "Mission",
							d: "To deliver premium stone surfaces and expert installations that transform spaces and exceed client expectations."
						},
						{
							i: Heart,
							t: "Promise",
							d: "Built for Elegance. Made to Last. Every surface we install reflects our commitment to quality craftsmanship."
						},
						{
							i: Award,
							t: "Standard",
							d: "Excellence in stone installation — from the first measurement to the final polish, we deliver perfection."
						}
					].map(({ i: I, t, d }, i) => /* @__PURE__ */ jsxs("div", {
						className: "bg-white rounded-3xl p-7 shadow-[var(--shadow-soft)] reveal-up",
						style: { animationDelay: `${i * 100}ms` },
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-2xl btn-brand grid place-items-center mb-4",
								children: /* @__PURE__ */ jsx(I, { className: "w-5 h-5 text-white" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-bold mb-2",
								children: t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-[color:var(--muted-foreground)]",
								children: d
							})
						]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-5 text-center",
				children: [
					{
						v: "500+",
						l: "Projects Completed"
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
						l: "Rated"
					}
				].map((s) => /* @__PURE__ */ jsxs("div", {
					className: "bg-white rounded-3xl p-6 border border-[color:var(--border)] shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-3xl sm:text-4xl font-bold gradient-text mb-1",
						children: s.v
					}), /* @__PURE__ */ jsx("div", {
						className: "text-xs sm:text-sm text-[color:var(--muted-foreground)] font-medium",
						children: s.l
					})]
				}, s.l))
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
function PageHero({ title, subtitle }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative pt-32 pb-16 sm:pt-40 sm:pb-24 hero-gradient overflow-hidden text-white",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[color:var(--brand-glow)]/25 blur-3xl floaty" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[color:var(--brand)]/25 blur-3xl floaty",
				style: { animationDelay: "2s" }
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative max-w-7xl mx-auto px-4 sm:px-6 text-center",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-4xl sm:text-6xl font-bold mb-4 reveal-up",
					children: title
				}), /* @__PURE__ */ jsx("p", {
					className: "text-white/80 text-lg max-w-2xl mx-auto reveal-up",
					children: subtitle
				})]
			})
		]
	});
}
function CTASection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-5xl mx-auto px-4 sm:px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl hero-gradient p-10 text-center text-white",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl sm:text-3xl font-bold mb-3",
						children: "Ready to transform your space?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-white/80 mb-6",
						children: "Request a free quote for your stone installation project today."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap gap-3 justify-center",
						children: [/* @__PURE__ */ jsx("a", {
							href: waLink(),
							target: "_blank",
							rel: "noreferrer",
							className: "btn-whatsapp px-6 py-3 rounded-2xl font-semibold",
							children: "Chat on WhatsApp"
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-white text-[color:var(--ink)]",
							children: ["Contact Us ", /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })]
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { CTASection, PageHero, AboutPage as component };
