import { Invoice, Product } from '../types';

// Mock invoices data
export const invoices: Invoice[] = [
  {
    id: 1,
    invoiceNumber: 'INV-2023-001',
    date: '2023-01-15',
    amount: 1250.00,
    status: 'paid',
    clientName: 'Acme Corporation',
    clientEmail: 'billing@acme.com',
    clientAddress: '123 Business Ave, Commerce City, 10001',
    items: [
      { id: 1, description: 'Interior Design Consultation', quantity: 1, unitPrice: 1000, total: 1000 },
      { id: 2, description: 'Material Samples', quantity: 1, unitPrice: 250, total: 250 }
    ]
  },
  {
    id: 2,
    invoiceNumber: 'INV-2023-002',
    date: '2023-02-20',
    amount: 3500.00,
    status: 'pending',
    clientName: 'TechStart Inc.',
    clientEmail: 'accounts@techstart.io',
    clientAddress: '456 Innovation Blvd, Tech Valley, 20002',
    items: [
      { id: 1, description: 'Office Redesign Project', quantity: 1, unitPrice: 3000, total: 3000 },
      { id: 2, description: 'Furniture Selection', quantity: 1, unitPrice: 500, total: 500 }
    ]
  },
  {
    id: 3,
    invoiceNumber: 'INV-2023-003',
    date: '2023-03-05',
    amount: 750.00,
    status: 'overdue',
    clientName: 'Global Traders Ltd.',
    clientEmail: 'finance@globaltraders.co',
    clientAddress: '789 Market St, Trade City, 30003',
    items: [
      { id: 1, description: 'Lighting Consultation', quantity: 1, unitPrice: 500, total: 500 },
      { id: 2, description: 'Fixture Selection', quantity: 1, unitPrice: 250, total: 250 }
    ]
  },
  {
    id: 4,
    invoiceNumber: 'INV-2023-004',
    date: '2023-04-10',
    amount: 1800.00,
    status: 'paid',
    clientName: 'Creative Designs Co.',
    clientEmail: 'payments@creativedesigns.com',
    clientAddress: '101 Art Avenue, Design District, 40004',
    items: [
      { id: 1, description: 'Color Scheme Design', quantity: 1, unitPrice: 800, total: 800 },
      { id: 2, description: 'Textile Selection', quantity: 1, unitPrice: 1000, total: 1000 }
    ]
  },
  {
    id: 5,
    invoiceNumber: 'INV-2023-005',
    date: '2023-05-25',
    amount: 2200.00,
    status: 'pending',
    clientName: 'Eco Solutions Inc.',
    clientEmail: 'accounting@ecosolutions.org',
    clientAddress: '202 Green Road, Eco Park, 50005',
    items: [
      { id: 1, description: 'Sustainable Materials Consultation', quantity: 1, unitPrice: 1500, total: 1500 },
      { id: 2, description: 'Eco-friendly Furniture Selection', quantity: 1, unitPrice: 700, total: 700 }
    ]
  }
];

// Mock products data for interior design
export const products: Product[] = [
  {
    id: 1,
    name: 'Modern Leather Sofa',
    description: 'Elegant 3-seater leather sofa with chrome legs, perfect for contemporary living rooms.',
    price: 1299.00,
    category: 'Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Marble Coffee Table',
    description: 'Luxurious coffee table with genuine marble top and gold-finished metal frame.',
    price: 649.00,
    category: 'Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Ceramic Floor Tiles - Terracotta',
    description: 'Premium ceramic floor tiles with natural terracotta finish, 60x60cm, pack of 10.',
    price: 89.99,
    category: 'Tiles',
    imageUrl: 'https://images.unsplash.com/photo-1560184611-c4a72a4c9a9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Pendant Lighting Fixture',
    description: 'Contemporary pendant light with adjustable height and warm ambient lighting.',
    price: 179.00,
    category: 'Lighting',
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Porcelain Wall Tiles - Marble Effect',
    description: 'Elegant porcelain wall tiles with marble effect, perfect for bathrooms and kitchens, 30x60cm, pack of 8.',
    price: 75.50,
    category: 'Tiles',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Scandinavian Dining Set',
    description: 'Complete dining set with oak table and 4 matching chairs in Scandinavian style.',
    price: 899.00,
    category: 'Furniture',
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Geometric Pattern Rug',
    description: 'Hand-woven wool rug with contemporary geometric pattern, 200x300cm.',
    price: 349.00,
    category: 'Textiles',
    imageUrl: 'https://images.unsplash.com/photo-1575414003880-048b61ae26bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Hexagonal Mosaic Tiles',
    description: 'Small hexagonal mosaic tiles in black and white, perfect for feature walls and floors, 30x30cm sheets.',
    price: 12.99,
    category: 'Tiles',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];