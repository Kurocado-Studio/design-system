/* eslint import/no-default-export: 0 */
import { execSync } from 'node:child_process';
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  ...options,
  entry: [
    './src/lib/infra/theme.ts',
    './src/index.ts',
    './src/react/exports.ts',
    './src/vue/exports.ts',
  ],
  target: ['esnext'],
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  external: ['framer-motion', 'react', 'vue', 'react-dom', 'tailwindcss'],
  noExternal: ['@internal/domain'],
  watch: true, // Watch mode for rebuilding on file changes
  onSuccess: async (): Promise<void> => {
    execSync(
      'copyfiles -u 1 "src/lib/domain/fonts/**/*" "src/lib/domain/styles/**/*" dist',
      {
        stdio: 'inherit',
      },
    );
  },
}));
