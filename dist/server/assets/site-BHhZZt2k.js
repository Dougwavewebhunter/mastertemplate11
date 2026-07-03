//#region src/lib/site.ts
var SITE = {
	name: "Granite Installations",
	fullName: "Granite Installations (Pty) Ltd",
	slogan: "Built for Elegance. Made to Last.",
	tagline: "PREMIUM QUALITY • EXPERT INSTALLATION • CUSTOM DESIGNS",
	phone: "+27 78 300 7127",
	phoneRaw: "+27783007127",
	whatsapp: "27783007127",
	email: "info@graniteinstallations.co.za",
	website: "www.graniteinstallations.co.za",
	address: "South Africa",
	mapsQuery: "South+Africa",
	designer: {
		name: "WebDevPro",
		url: "https://www.webdevpro.co.za",
		label: "www.webdevpro.co.za",
		phone: "+27812159792"
	},
	accessCode: "1234tsh"
};
var waLink = (msg = "Hi Granite Installations, I'd like to enquire about your services.") => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
var telLink = `tel:${SITE.phoneRaw}`;
var mailLink = `mailto:${SITE.email}`;
//#endregion
export { waLink as i, mailLink as n, telLink as r, SITE as t };
