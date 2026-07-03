import { i as waLink } from "./site-BHhZZt2k.js";
import { Link, createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
var hero_van_jpg_asset_default = {
	version: 1,
	asset_id: "c3217b93-bb6f-4120-8433-1928d7a17dab",
	project_id: "fe13aa1f-e5cc-44a8-84a9-219aee1c4912",
	url: "https://i.imgur.com/7dTi44k.jpeg",
	r2_key: "a/v1/fe13aa1f-e5cc-44a8-84a9-219aee1c4912/c3217b93-bb6f-4120-8433-1928d7a17dab/hero-van.jpg",
	original_filename: "hero-van.jpg",
	size: 160394,
	content_type: "image/jpeg",
	created_at: "2026-06-30T20:28:54Z"
};
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter = () => import("./about-CyfYMN0Z.js");
var Route = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us | Granite Installations (Pty) Ltd" },
		{
			name: "description",
			content: "Granite Installations — premium stone solutions including granite, marble, quartz and porcelain. Quality you can see and trust."
		},
		{
			property: "og:title",
			content: "About Granite Installations"
		},
		{
			property: "og:description",
			content: "Built for Elegance. Made to Last. Transforming Spaces. Enhancing Lifestyles."
		},
		{
			property: "og:image",
			content: hero_van_jpg_asset_default.url
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
export { PageHero as n, Route as r, CTASection as t };
