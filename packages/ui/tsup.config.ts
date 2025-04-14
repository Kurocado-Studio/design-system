/* eslint import/no-default-export: 0 */
import { execSync } from 'node:child_process';
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...options,
  entry: ['./src/index.ts', './src/domain/theme/index.ts'],
  target: ['esnext'],
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: ['framer-motion', 'react', 'react-dom', 'tailwindcss'],
  onSuccess: async (): Promise<void> => {
    execSync('copyfiles -u 1 "src/fonts/**/*" "src/styles/**/*" dist', {
      stdio: 'inherit',
    });
  },
}));
