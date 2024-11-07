import { execSync } from 'child_process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default function() {
  // Get shortened git hash
  const gitHash = execSync('git rev-parse --short HEAD').toString().trim();
  // Get package.json json object
  let pkg = { version: 'unknown' };
  try {
    pkg = require('../../package.json');
  } catch (e) {
    console.warn('Could not load package.json, using fallback version');
  }

  return {
    version: pkg.version,
    hash: gitHash
  };
}