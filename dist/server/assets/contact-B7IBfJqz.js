import { i as waLink, n as mailLink, r as telLink, t as SITE } from "./site-BHhZZt2k.js";
import { n as PageHero } from "./about-DkP1cjiA.js";
import { t as SERVICES } from "./services-data-DS697pSe.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CircleCheck, Loader, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
//#region src/routes/contact.tsx?tsr-split=component
var schema = z.object({
	name: z.string().trim().min(2, "Please enter your name").max(80),
	phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
	email: z.string().trim().email("Invalid email").max(200),
	service: z.string().min(1, "Please select a service"),
	message: z.string().trim().min(5, "Tell us a little more").max(1e3)
});
function ContactPage() {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		email: "",
		service: "",
		message: ""
	});
	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);
	const submit = async (e) => {
		e.preventDefault();
		const r = schema.safeParse(form);
		if (!r.success) {
			toast.error(r.error.issues[0].message);
			return;
		}
		setLoading(true);
		const msg = `*New Quote Request*\n\n*Name:* ${r.data.name}\n*Phone:* ${r.data.phone}\n*Email:* ${r.data.email}\n*Service:* ${r.data.service}\n\n${r.data.message}`;
		await new Promise((res) => setTimeout(res, 900));
		setLoading(false);
		setDone(true);
		window.open(waLink(msg), "_blank");
		toast.success("Message ready! Sending you to WhatsApp...");
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: "Get In Touch",
		subtitle: "Tell us about your project — we'll provide a free quote."
	}), /* @__PURE__ */ jsx("section", {
		className: "py-16",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2 space-y-4",
				children: [[
					{
						i: Phone,
						t: "Call Us",
						v: SITE.phone,
						href: telLink
					},
					{
						i: MessageCircle,
						t: "WhatsApp",
						v: SITE.phone,
						href: waLink()
					},
					{
						i: Mail,
						t: "Email",
						v: SITE.email,
						href: mailLink
					},
					{
						i: MapPin,
						t: "Service Area",
						v: SITE.address,
						href: void 0
					}
				].map(({ i: I, t, v, href }) => {
					const Inner = /* @__PURE__ */ jsxs("div", {
						className: "flex items-start gap-4 bg-white rounded-2xl p-5 border border-[color:var(--border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition group",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 rounded-2xl btn-brand grid place-items-center flex-shrink-0 group-hover:scale-110 transition-transform",
							children: /* @__PURE__ */ jsx(I, { className: "w-5 h-5 text-white" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-bold tracking-widest text-[color:var(--brand)]",
							children: t.toUpperCase()
						}), /* @__PURE__ */ jsx("p", {
							className: "font-semibold mt-0.5",
							children: v
						})] })]
					});
					return href ? /* @__PURE__ */ jsx("a", {
						href,
						target: href.startsWith("http") ? "_blank" : void 0,
						rel: "noreferrer",
						children: Inner
					}, t) : /* @__PURE__ */ jsx("div", { children: Inner }, t);
				}), /* @__PURE__ */ jsx("div", {
					className: "bg-white rounded-2xl p-2 border border-[color:var(--border)] shadow-[var(--shadow-soft)] overflow-hidden",
					children: /* @__PURE__ */ jsx("iframe", {
						title: "Google Map",
						src: `https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`,
						className: "w-full h-72 rounded-xl",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-3",
				children: /* @__PURE__ */ jsx("div", {
					className: "bg-white rounded-3xl p-6 sm:p-8 border border-[color:var(--border)] shadow-[var(--shadow-card)]",
					children: done ? /* @__PURE__ */ jsxs("div", {
						className: "text-center py-10",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-20 h-20 mx-auto rounded-full btn-brand grid place-items-center mb-5 floaty",
								children: /* @__PURE__ */ jsx(CircleCheck, { className: "w-10 h-10 text-white" })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-bold mb-2",
								children: "Message Sent!"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[color:var(--muted-foreground)] mb-6",
								children: "We'll be in touch shortly via WhatsApp."
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => {
									setDone(false);
									setForm({
										name: "",
										phone: "",
										email: "",
										service: "",
										message: ""
									});
								},
								className: "btn-brand px-6 py-3 rounded-xl font-semibold",
								children: "Send Another"
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: submit,
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-bold mb-1",
								children: "Request a Quote"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-[color:var(--muted-foreground)] mb-4",
								children: "Fill in the form below and we'll respond with a free quote."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ jsx(Field, {
									label: "Full Name",
									v: form.name,
									on: (v) => setForm({
										...form,
										name: v
									}),
									placeholder: "John Doe"
								}), /* @__PURE__ */ jsx(Field, {
									label: "Phone",
									v: form.phone,
									on: (v) => setForm({
										...form,
										phone: v
									}),
									placeholder: "+27 78 300 7127",
									type: "tel"
								})]
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Email",
								v: form.email,
								on: (v) => setForm({
									...form,
									email: v
								}),
								placeholder: "you@example.com",
								type: "email"
							}),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-sm font-semibold mb-1.5",
								children: "Service Needed"
							}), /* @__PURE__ */ jsxs("select", {
								value: form.service,
								onChange: (e) => setForm({
									...form,
									service: e.target.value
								}),
								className: "w-full px-4 py-3 rounded-xl bg-[color:var(--secondary)] border border-transparent focus:border-[color:var(--brand)] focus:bg-white focus:outline-none transition",
								children: [/* @__PURE__ */ jsx("option", {
									value: "",
									children: "Select a service..."
								}), SERVICES.map((s) => /* @__PURE__ */ jsx("option", {
									value: s.title,
									children: s.title
								}, s.slug))]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
								className: "block text-sm font-semibold mb-1.5",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								rows: 4,
								placeholder: "Describe your project — stone type, surface area, location...",
								className: "w-full px-4 py-3 rounded-xl bg-[color:var(--secondary)] border border-transparent focus:border-[color:var(--brand)] focus:bg-white focus:outline-none transition resize-none"
							})] }),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: loading,
								className: "btn-brand w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70",
								children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Loader, { className: "w-4 h-4 animate-spin" }), " Sending..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }), " Send Message"] })
							})
						]
					})
				})
			})]
		})
	})] });
}
function Field({ label, v, on, placeholder, type = "text" }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		className: "block text-sm font-semibold mb-1.5",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		type,
		value: v,
		onChange: (e) => on(e.target.value),
		placeholder,
		className: "w-full px-4 py-3 rounded-xl bg-[color:var(--secondary)] border border-transparent focus:border-[color:var(--brand)] focus:bg-white focus:outline-none transition"
	})] });
}
//#endregion
export { ContactPage as component };
