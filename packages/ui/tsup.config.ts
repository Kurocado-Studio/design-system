/* eslint import/no-default-export: 0 */
import { execSync } from 'node:child_process';
import { defineConfig } from 'tsup';
import vuePlugin from 'unplugin-vue/esbuild';

export default defineConfig((options) => ({
  ...options,
  entry: {
    theme: './src/lib/infra/theme.ts',
    shared: './src/shared/index.ts',
    react: './src/react/exports.ts',
    vue: './src/vue/exports.ts',
  },
  target: ['esnext'],
  format: ['esm', 'cjs'],
  dts: false,
  clean: true,
  splitting: true,
  treeshake: true,
  esbuildPlugins: [vuePlugin()],
  external: ['framer-motion', 'react', 'vue', 'react-dom', 'tailwindcss'],
  noExternal: ['@internal/domain'],
  onSuccess: async (): Promise<void> => {
    const stdio = 'inherit';
    execSync('copyfiles -u 1 "src/lib/domain/styles/**/*" dist', { stdio });
    execSync('copyfiles -u 1 "src/lib/domain/fonts/**/*" dist', { stdio });
    execSync('copyfiles -u 1 "src/lib/domain/tokens/tokens.json" dist', {
      stdio,
    });
    execSync('pnpm run build:types:react', { stdio });
    execSync('pnpm run build:types:vue', { stdio });
  },
}));
