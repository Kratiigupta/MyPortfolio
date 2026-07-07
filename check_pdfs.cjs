const fs = require('fs');
const pdf = require('pdf-parse');

const path = require('path');

const dir = path.join(__dirname, 'public', 'certificates');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

async function check() {
    for (const file of files) {
        const p = path.join(dir, file);
        const dataBuffer = fs.readFileSync(p);
        try {
            const data = await pdf(dataBuffer);
            console.log(`\n--- ${file} ---`);
            console.log(data.text.substring(0, 200).replace(/\n/g, ' '));
        } catch (e) {
            console.log(`\n--- ${file} --- ERROR: ${e.message}`);
        }
    }
}
check();
