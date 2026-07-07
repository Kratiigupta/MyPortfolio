const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
  'public/C--_Essentials_1_certificate_kratigupta-2433353-gmail-com_0e00228d-e2d2-40b9-83b4-c16780a55ae5.pdf',
  'public/Krati Gupta_24116002282_Feb_2026.pdf',
  'public/Krati Gupta_24116002282_Feb_2026_2.pdf',
  'public/Krati Gupta_24116002282_Feb_2026_3.pdf',
  'public/Krati Gupta_24116002282_Feb_2026_4.pdf',
  'public/Krati Gupta_24116002282_april_2026_5.pdf',
  'public/Krati Gupta_24116002282_may_2026_6.pdf'
];

async function check() {
  for (const file of files) {
    try {
      const dataBuffer = fs.readFileSync(file);
      const parse = typeof pdf === 'function' ? pdf : pdf.default || pdf.pdf;
      const data = await parse(dataBuffer);
      console.log(`\n--- ${file} ---`);
      console.log(data.text.substring(0, 300).replace(/\n/g, ' '));
    } catch(e) {
      console.error(`Error reading ${file}:`, e.message);
    }
  }
}
check();
