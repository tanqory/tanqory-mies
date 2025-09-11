import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: false,
  clean: true,
  external: ['tailwindcss'],
  treeshake: true,
  splitting: false,
});