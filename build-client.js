import * as esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const args = process.argv.slice(2);
const watch = args.includes('--watch');

const buildOptions = {
  entryPoints: ['./src/components/client/main.tsx'], // Entry point for React
  bundle: true, // Bundle all dependencies
  outfile: '_site/assets/client-bundle.js', // Output file for bundled JS
  format: 'esm', // ES Module format
  platform: 'browser', // Browser platform
  minify: false, // No minification for debugging
  sourcemap: true, // Enable sourcemaps for debugging
  loader: {
    '.tsx': 'tsx', // Handle TypeScript with JSX
    '.ts': 'ts', // Handle TypeScript
  },
  jsx: 'automatic', // Modern JSX runtime
  jsxImportSource: 'react', // React as the JSX library
  define: {
    'process.env.NODE_ENV': '"development"', // Set environment variable
  },
  tsconfig: './tsconfig.client.json', // Use the client tsconfig
};

if (watch) {
  // Watch mode
  const context = await esbuild.context(buildOptions);
  await context.watch();
  console.log('Watching for client changes...');
} else {
  // Single build
  await esbuild.build(buildOptions);
}