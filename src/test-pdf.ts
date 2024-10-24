import { PDFDocument } from 'pdf-lib';
import * as fs from 'fs/promises';

async function testPDFFilling() {
  try {
    // Read the PDF file
    const pdfBytes = await fs.readFile('dv100.pdf');
    
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(pdfBytes);
    
    // Get the form from the document
    const form = pdfDoc.getForm();

    // Get all fields to see what we can fill
    const fields = form.getFields();
    console.log('Available form fields:');
    fields.forEach(field => {
      console.log(`Field name: ${field.getName()}`);
      console.log(`Field type: ${field.constructor.name}`);
    });

    // Try to fill some basic fields
    try {
      form.getTextField('your_name').setText('Test Name');
      form.getTextField('your_age').setText('30');
    } catch (e) {
      console.log('Error filling specific fields:', e);
    }

    // Save the filled PDF
    const filledPdfBytes = await pdfDoc.save();
    await fs.writeFile('filled-test.pdf', filledPdfBytes);
    
    console.log('PDF test completed - check filled-test.pdf');
  } catch (error) {
    console.error('Error in PDF test:', error);
  }
}

testPDFFilling().catch(console.error);
