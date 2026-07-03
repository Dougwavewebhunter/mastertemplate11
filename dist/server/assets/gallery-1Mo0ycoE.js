import { n as PageHero, t as CTASection } from "./about-DkP1cjiA.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
//#region src/routes/gallery.tsx?tsr-split=component
var IMAGES = [
	{
		src: "https://i.imgur.com/7dTi44k.jpeg",
		c: "Kitchen Granite Counter Top"
	},
	{
		src: "https://i.imgur.com/9uJGT7h.jpeg",
		c: "Luxury Kitchen Installation"
	},
	{
		src: "https://i.imgur.com/lqogvWX.jpeg",
		c: "Modern Kitchen Surface"
	},
	{
		src: "https://i.imgur.com/bYZtqnQ.jpeg",
		c: "Marble Bathroom Vanity"
	},
	{
		src: "https://i.imgur.com/4QFhhOU.jpeg",
		c: "Quartz Counter Top"
	},
	{
		src: "https://i.imgur.com/BYZAp69.jpeg",
		c: "Porcelain Wall Cladding"
	},
	{
		src: "https://i.imgur.com/k8syAx0.jpeg",
		c: "Reception Counter Top"
	},
	{
		src: "https://i.imgur.com/rBPNMKo.jpeg",
		c: "Bar Top Installation"
	}
];
function GalleryPage() {
	const [zoom, setZoom] = useState(null);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "Our Projects",
			subtitle: "A showcase of premium stone installations crafted with precision and passion."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4",
				children: IMAGES.map((im, i) => /* @__PURE__ */ jsxs("button", {
					onClick: () => setZoom(i),
					className: `group relative rounded-2xl overflow-hidden aspect-square shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all reveal-up ${i % 5 === 0 ? "md:row-span-2 md:aspect-auto" : ""}`,
					style: { animationDelay: `${i * 60}ms` },
					children: [
						/* @__PURE__ */ jsx("img", {
							src: im.src,
							alt: im.c,
							className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
							loading: "lazy"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" }),
						/* @__PURE__ */ jsx("div", {
							className: "absolute bottom-3 left-3 right-3 text-left text-white text-sm font-semibold translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition",
							children: im.c
						})
					]
				}, i))
			})
		}),
		zoom !== null && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-[80] bg-black/90 backdrop-blur grid place-items-center p-4 reveal-up",
			onClick: () => setZoom(null),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setZoom(null),
				className: "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 grid place-items-center text-white",
				"aria-label": "Close",
				children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
			}), /* @__PURE__ */ jsx("img", {
				src: IMAGES[zoom].src,
				alt: IMAGES[zoom].c,
				className: "max-h-[85vh] max-w-full rounded-2xl shadow-2xl"
			})]
		}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { GalleryPage as component };
