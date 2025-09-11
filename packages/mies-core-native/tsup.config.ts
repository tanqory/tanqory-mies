import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    button: 'src/button.tsx',
    card: 'src/card.tsx',
    form: 'src/form.tsx',
    list: 'src/list.tsx',
    layout: 'src/layout.tsx',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-native'],
  treeshake: true,
  splitting: false,
});