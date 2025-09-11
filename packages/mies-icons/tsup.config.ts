import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    web: 'src/web.ts',
    native: 'src/native.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  external: ['react', 'react-native', 'react-native-svg'],
  treeshake: true,
  splitting: false,
});