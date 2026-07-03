import { n as PageHero, t as CTASection } from "./about-DkP1cjiA.js";
import * as React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/routes/faq.tsx?tsr-split=component
var FAQS = [
	{
		q: "What types of stone do you supply and install?",
		a: "We supply and install granite, marble, quartz and porcelain for a wide range of applications including kitchen counter tops, bar tops, reception counters, bathroom vanities and wall cladding."
	},
	{
		q: "Do you handle both residential and commercial projects?",
		a: "Yes, we work on residential homes and commercial spaces including offices, restaurants, hotels and retail environments. Contact us to discuss your project requirements."
	},
	{
		q: "How do I get a quote?",
		a: "Contact us via WhatsApp, phone or email and describe your project. We'll arrange a consultation to measure the space and provide an accurate quote based on your chosen stone and design."
	},
	{
		q: "How long does a typical installation take?",
		a: "Installation timelines vary depending on the surface area and complexity of the project. We'll provide a full project timeline during your consultation."
	},
	{
		q: "Can I choose a custom design or edge profile?",
		a: "Absolutely. We offer custom fabrication and a range of edge profiles, finishes and cuts to match your design vision perfectly."
	},
	{
		q: "What is the difference between granite, marble and quartz?",
		a: "Granite is a natural stone known for durability and unique patterns. Marble offers luxury aesthetics with natural veining. Quartz is engineered for consistency and high stain resistance. We'll help you choose the best option for your needs."
	},
	{
		q: "Do you offer a guarantee on your installations?",
		a: "Yes. Every installation is completed to the highest standard of craftsmanship. Contact us for specific warranty information related to your project."
	},
	{
		q: "How do I maintain my stone surfaces?",
		a: "We provide care and maintenance guidance for all stone types after installation. Generally, avoid harsh chemicals and seal natural stone surfaces regularly to maintain their beauty."
	}
];
function FaqPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: "Frequently Asked Questions",
			subtitle: "Everything you need to know about our premium stone installation services."
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "max-w-3xl mx-auto px-4 sm:px-6",
				children: /* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					className: "space-y-3",
					children: FAQS.map((f, i) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: `item-${i}`,
						className: "bg-white rounded-2xl border border-[color:var(--border)] shadow-[var(--shadow-soft)] px-5 reveal-up",
						style: { animationDelay: `${i * 50}ms` },
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "text-left font-semibold py-5 hover:no-underline",
							children: f.q
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "text-[color:var(--muted-foreground)] pb-5",
							children: f.a
						})]
					}, i))
				})
			})
		}),
		/* @__PURE__ */ jsx(CTASection, {})
	] });
}
//#endregion
export { FaqPage as component };
