import { Box, Gem, Layers, Square } from "lucide-react";
//#region src/lib/services-data.ts
var SERVICES = [
	{
		slug: "granite",
		title: "Granite Installations",
		icon: Layers,
		blurb: "Timeless natural granite surfaces that add elegance and durability to any space.",
		points: [
			"Kitchen Counter Tops",
			"Bar Tops",
			"Reception Counter Tops",
			"Bathroom Vanities",
			"Wall Cladding",
			"Custom Fabrication & Finishing"
		]
	},
	{
		slug: "marble",
		title: "Marble Installations",
		icon: Gem,
		blurb: "Luxury marble surfaces that transform your interiors with natural beauty.",
		points: [
			"Kitchen Counter Tops",
			"Bathroom Vanities",
			"Wall Cladding",
			"Reception Counter Tops",
			"Bar Tops",
			"Feature Walls"
		]
	},
	{
		slug: "quartz",
		title: "Quartz Installations",
		icon: Box,
		blurb: "Engineered quartz surfaces combining beauty with outstanding durability.",
		points: [
			"Kitchen Counter Tops",
			"Bar Tops",
			"Bathroom Vanities",
			"Reception Counters",
			"Commercial Surfaces",
			"Stain & Scratch Resistant Finishes"
		]
	},
	{
		slug: "porcelain",
		title: "Porcelain Installations",
		icon: Square,
		blurb: "Premium porcelain surfaces for versatile indoor and outdoor applications.",
		points: [
			"Wall Cladding",
			"Kitchen Counter Tops",
			"Bathroom Vanities",
			"Feature Walls",
			"Outdoor Surfaces",
			"Large Format Slabs"
		]
	}
];
//#endregion
export { SERVICES as t };
