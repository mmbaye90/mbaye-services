import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const envPath = resolve(root, '.env');
const outPath = resolve(root, 'src', 'env.ts');

if (!existsSync(envPath)) {
  console.warn('.env not found, using placeholder for env.ts');
  writeFileSync(outPath, 'export const WEB3FORMS_KEY = \'\';\n', 'utf-8');
  process.exit(0);
}

const env = readFileSync(envPath, 'utf-8');
const match = env.match(/^VITE_WEB3FORMS_KEY=(.+)$/m);
const key = match ? match[1].trim() : '';

writeFileSync(outPath, `export const WEB3FORMS_KEY = '${key}';\n`, 'utf-8');
console.log('env.ts generated from .env');
