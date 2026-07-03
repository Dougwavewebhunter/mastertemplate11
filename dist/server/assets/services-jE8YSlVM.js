import { n as PageHero, t as CTASection } from "./about-DkP1cjiA.js";
import { t as SERVICES } from "./services-data-DS697pSe.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CircleCheck, ShieldCheck } from "lucide-react";
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "Our Services",
			subtitle: "Premium stone surfaces, expertly installed for every space."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16 sm:py-20",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 space-y-16",
				children: SERVICES.map((s, idx) => {
					const Icon = s.icon;
					const reverse = idx % 2 === 1;
					return /* @__PURE__ */ jsxs("div", {
						id: s.slug,
						className: `grid md:grid-cols-2 gap-8 items-center scroll-mt-28 reveal-up ${reverse ? "md:[&>*:first-child]:order-2" : ""}`,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "relative aspect-[4/3] rounded-3xl overflow-hidden",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: [
										"https://i.imgur.com/7dTi44k.jpeg",
										"https://i.imgur.com/9uJGT7h.jpeg",
										"https://i.imgur.com/lqogvWX.jpeg",
										"https://i.imgur.com/bYZtqnQ.jpeg"
									][idx % 4],
									alt: s.title,
									className: "w-full h-full object-cover",
									loading: "lazy"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/60 via-transparent to-transparent" }),
								/* @__PURE__ */ jsx("div", {
									className: "absolute bottom-4 left-4",
									children: /* @__PURE__ */ jsx("div", {
										className: "w-14 h-14 rounded-2xl btn-brand grid place-items-center",
										children: /* @__PURE__ */ jsx(Icon, {
											className: "w-7 h-7 text-white",
											strokeWidth: 1.5
										})
									})
								})
							]
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[color:var(--brand)]/10 text-[color:var(--brand-deep)] text-xs font-bold tracking-wider mb-3",
								children: ["SERVICE 0", idx + 1]
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "text-3xl sm:text-4xl font-bold mb-3",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[color:var(--muted-foreground)] mb-6 text-lg",
								children: s.blurb
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "space-y-2.5",
								children: s.points.map((p) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2.5",
									children: [/* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-[color:var(--brand)] flex-shrink-0 mt-0.5" }), /* @__PURE__ */ jsx("span", {
										className: "text-sm",
										children: p
									})]
								}, p))
							})
						] })]
					}, s.slug);
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16 bg-[color:var(--secondary)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-3xl mx-auto px-4 sm:px-6 text-center",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl btn-brand mb-5",
						children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-7 h-7 text-white" })
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold mb-3",
						children: "Excellence in Stone Installation"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-[color:var(--muted-foreground)]",
						children: "Every project is completed to the highest standard of craftsmanship. Built for elegance. Made to last. We stand behind our work — always."
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { ServicesPage as component };
