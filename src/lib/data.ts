// data.ts
export interface Invoice {
	id: number;
	customer: string;
	invoiceDate: string;
	dueDate: string;
	amount: string;
	paid: boolean;
}

export const invoices: Invoice[] = [
	{
		id: 123,
		customer: "Pelles Plåt AB",
		invoiceDate: "2025-01-29",
		dueDate: "2025-02-29",
		amount: "3200kr",
		paid: true
	},
	{
		id: 124,
		customer: "Svenska Maskiner AB",
		invoiceDate: "2025-01-30",
		dueDate: "2025-02-28",
		amount: "4500kr",
		paid: false
	},
	{
		id: 125,
		customer: "Nordic Design AB",
		invoiceDate: "2025-02-01",
		dueDate: "2025-03-01",
		amount: "2100kr",
		paid: true
	},
	{
		id: 126,
		customer: "Köp & Sälj AB",
		invoiceDate: "2025-02-05",
		dueDate: "2025-03-05",
		amount: "5300kr",
		paid: false
	},
	{
		id: 127,
		customer: "Stadens Bygg AB",
		invoiceDate: "2025-02-10",
		dueDate: "2025-03-10",
		amount: "4800kr",
		paid: true
	},
	{
		id: 128,
		customer: "Teknik & Co AB",
		invoiceDate: "2025-02-12",
		dueDate: "2025-03-12",
		amount: "3700kr",
		paid: false
	},
	{
		id: 129,
		customer: "Innovativa IT AB",
		invoiceDate: "2025-02-15",
		dueDate: "2025-03-15",
		amount: "6000kr",
		paid: true
	},
	{
		id: 130,
		customer: "Logistikpartner AB",
		invoiceDate: "2025-02-18",
		dueDate: "2025-03-18",
		amount: "2800kr",
		paid: false
	},
	{
		id: 131,
		customer: "Energi & Miljö AB",
		invoiceDate: "2025-02-20",
		dueDate: "2025-03-20",
		amount: "4200kr",
		paid: true
	},
	{
		id: 132,
		customer: "Hantverk & Design AB",
		invoiceDate: "2025-02-22",
		dueDate: "2025-03-22",
		amount: "3900kr",
		paid: false
	}
];
