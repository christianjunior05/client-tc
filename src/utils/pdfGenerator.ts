import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Invoice } from '../types';

// Add the missing type for jsPDF with autotable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

export const generateInvoicePDF = (invoice: Invoice) => {
  const doc = new jsPDF();
  
  // Add company logo/header
  doc.setFillColor(255, 140, 0); // Orange color
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.text('INVOICE', 105, 20, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text('Interior Design Solutions', 105, 30, { align: 'center' });
  
  // Reset text color
  doc.setTextColor(0, 0, 0);
  
  // Invoice details
  doc.setFontSize(12);
  doc.text(`Invoice Number: ${invoice.invoiceNumber}`, 15, 50);
  doc.text(`Date: ${invoice.date}`, 15, 58);
  doc.text(`Status: ${invoice.status.toUpperCase()}`, 15, 66);
  
  // Client details
  doc.setFontSize(14);
  doc.text('Bill To:', 15, 80);
  doc.setFontSize(12);
  doc.text(invoice.clientName, 15, 88);
  doc.text(invoice.clientEmail, 15, 96);
  doc.text(invoice.clientAddress, 15, 104);
  
  // Invoice items table
  const tableColumn = ["Description", "Quantity", "Unit Price", "Total"];
  const tableRows = invoice.items.map(item => [
    item.description,
    item.quantity,
    `$${item.unitPrice.toFixed(2)}`,
    `$${item.total.toFixed(2)}`
  ]);
  
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 120,
    theme: 'grid',
    headStyles: {
      fillColor: [255, 140, 0],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    foot: [['', '', 'Total Amount', `$${invoice.amount.toFixed(2)}`]],
    footStyles: {
      fillColor: [240, 240, 240],
      fontStyle: 'bold'
    }
  });
  
  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(10);
    doc.text('Thank you for your business!', 105, 285, { align: 'center' });
  }
  
  // Save the PDF
  doc.save(`${invoice.invoiceNumber}.pdf`);
};