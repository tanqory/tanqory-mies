import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    button: 'src/button.tsx',
    card: 'src/card.tsx',
    form: 'src/form.tsx',
    table: 'src/table.tsx',
    layout: 'src/layout.tsx',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
  splitting: false,
});