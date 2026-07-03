export const SITE = {
  name: "Tshepo DStv",
  fullName: "Tshepo DStv and Electronic Solutions",
  slogan: "Your Entertainment. Our Expertise.",
  tagline: "BEST SERVICE • BEST PRICES • BEST EXPERIENCE",
  phone: "+27 72 406 9491",
  phoneRaw: "+27724069491",
  whatsapp: "27724069491",
  email: "info@tshepodstv.co.za",
  website: "www.tshepodstv.co.za",
  address: "Pretoria, Gauteng, South Africa",
  mapsQuery: "Pretoria,+Gauteng,+South+Africa",
  designer: {
    name: "WebDevPro",
    url: "https://www.webdevpro.co.za",
    label: "www.webdevpro.co.za",
    phone: "+27812159792",
  },
  accessCode: "1234tsh",
};

export const waLink = (msg = "Hi Tshepo DStv, I'd like to enquire about your services.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phoneRaw}`;
export const mailLink = `mailto:${SITE.email}`;
