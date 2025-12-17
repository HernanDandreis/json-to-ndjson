const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Uso: node json-to-ndjson.js archivo.json');
  process.exit(1);
}

const inputFile = process.argv[2];
const outputFile = inputFile.replace(/\.json$/i, '.ndjson');

try {
  const raw = fs.readFileSync(inputFile, 'utf8');
  const parsed = JSON.parse(raw);

  let records;

  if (Array.isArray(parsed)) {
    records = parsed;
  } else if (parsed.games && Array.isArray(parsed.games)) {
    records = parsed.games;
  } else {
    throw new Error('El JSON no contiene un array raíz ni una clave "games" con array');
  }

  const ndjson = records
    .map(obj => JSON.stringify(obj))
    .join('\n');

  fs.writeFileSync(outputFile, ndjson, 'utf8');

  console.log(`✅ Conversión exitosa`);
  console.log(`📄 Archivo generado: ${outputFile}`);
  console.log(`📦 Registros: ${records.length}`);

} catch (err) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
