export interface Homecard {
	name: string;
	icon: string;
	path: string;
	description: string;
  }
  
  export const homeCards: Homecard[] = [
	{
	  name: "Hem",
	  icon: "/Home-black.svg",
	  path: "/",
	  description: "Gå till startsidan för en överblick av din ekonomi och viktiga händelser."
	},
	{
	  name: "Dokument",
	  icon: "/Document-black.svg",
	  path: "/document",
	  description: "Hantera och organisera alla dina viktiga företagsdokument."
	},
	{
	  name: "Bank och Betalning",
	  icon: "/Bank-black.svg",
	  path: "/bank",
	  description: "Se och hantera dina banktransaktioner samt betalningar."
	},
	{
	  name: "Bokföring",
	  icon: "/Accounting-black.svg",
	  path: "/accounting",
	  description: "Få koll på din bokföring och se transaktioner i realtid."
	},
	{
	  name: "Ekonomiöversikt",
	  icon: "/Economy-black.svg",
	  path: "/economy",
	  description: "En sammanfattning av ditt företags ekonomi och finansiella status."
	},
	{
	  name: "Fakturering",
	  icon: "/Invoice-black.svg",
	  path: "/fakturering",
	  description: "Skapa, skicka och hantera dina fakturor enkelt."
	},
	{
	  name: "Företagskort",
	  icon: "/Business-card-black.svg",
	  path: "/business-card",
	  description: "Hantera och granska utgifter från företagskortet."
	}
  ];