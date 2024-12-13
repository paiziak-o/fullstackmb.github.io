import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  optimizeDeps: {
    include: ['jsx-async-runtime']
  },
  esbuild: {
    jsx: "transform",
    jsxInject: "import { jsx } from 'jsx-async-runtime/jsx-runtime'",
    jsxFactory: "jsx",
    jsxImportSource: "jsx-async-runtime",
  },
  test: {
    environment: "happy-dom",
    testTimeout: 15000,
    include: [
      // "./eleventy.config.ts",
      "./pages/**/*.test.tsx",
      "./src/components/**/*.test.tsx",
      "./_layouts/**/*.test.tsx",
      "./tests/site.test.ts",
    ],
  },
});
