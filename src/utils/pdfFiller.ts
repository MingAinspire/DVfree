import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

export async function fillPDF(formData: any) {
  try {
    // Read the PDF file
    const pdfBytes = fs.readFileSync('dv100.pdf');
    
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    // Get the form from the document
    const form = pdfDoc.getForm();

    // Get all fields to see what we can fill
    const fields = form.getFields();
    console.log('Available fields:', fields.map(f => f.getName()));

    // Save the filled PDF
    const filledPdfBytes = await pdfDoc.save();
    fs.writeFileSync('filled-dv100.pdf', filledPdfBytes);
    
    return true;
  } catch (error) {
    console.error('Error filling PDF:', error);
    return false;
  }
}
