import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

interface PackageJson {
  version: string;
}

export default async function () {
  // Get shortened git hash
  let gitHash = 'unknown';
  try {
    gitHash = execSync('git rev-parse --short HEAD').toString().trim();
  } catch (e) {
    console.warn('Could not get git hash, using fallback value');
  }

  // Get package.json version
  let pkg: PackageJson = { version: 'unknown' };
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const packagePath = join(__dirname, '../package.json');
    const packageJson = readFileSync(packagePath, 'utf-8');
    pkg = JSON.parse(packageJson);
  } catch (e) {
    console.warn('Could not load package.json, using fallback version');
  }

  return {
    version: pkg.version,
    hash: gitHash
  };
}