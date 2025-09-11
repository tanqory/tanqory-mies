import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  splitting: false,
  publicDir: 'src',
  onSuccess: 'cp src/tokens.css dist/ && cp src/tokens.json dist/',
});