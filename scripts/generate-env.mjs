import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const envPath = resolve(root, '.env');
const outPath = resolve(root, 'src', 'env.ts');

let key = '';

if (process.env.VITE_WEB3FORMS_KEY) {
  key = process.env.VITE_WEB3FORMS_KEY;
  console.log('env.ts generated from VITE_WEB3FORMS_KEY environment variable');
} else if (existsSync(envPath)) {
  const env = readFileSync(envPath, 'utf-8');
  const match = env.match(/^VITE_WEB3FORMS_KEY=(.+)$/m);
  key = match ? match[1].trim() : '';
  console.log('env.ts generated from .env');
} else {
  console.warn('.env not found and VITE_WEB3FORMS_KEY not set — using placeholder');
}

writeFileSync(outPath, `export const WEB3FORMS_KEY = '${key}';\n`, 'utf-8');
