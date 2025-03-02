export interface Invoice {
  id: number;
  invoiceNumber: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}