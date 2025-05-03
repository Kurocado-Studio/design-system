/* eslint import/no-named-as-default: 0 */
/* eslint import/no-default-export: 0 */
/* eslint import/no-named-as-default-member: 0 */
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';
import { type PluginOption, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig((options) => ({
  ...options,
  plugins: [
    vue(),
    tsconfigPaths(),
    react(),
    dts({ entryRoot: 'src', insertTypesEntry: true }),
    copyDomainAssets(),
  ],
  build: {
    lib: {
      entry: {
        theme: resolve(__dirname, 'src/lib/infra/theme.ts'),
        index: resolve(__dirname, 'src/index.ts'),
        react: resolve(__dirname, 'src/react/exports.ts'),
        vue: resolve(__dirname, 'src/vue/exports.ts'),
        stories: resolve(__dirname, 'src/stories/index.ts'),
      },
      formats: ['es'],
      fileName: (_: unknown, name: string): string => `${name}.js`,
    },
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      treeshake: true,
      external: ['framer-motion', 'react', 'react-dom', 'vue', 'tailwindcss'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    },
  },
}));

function copyDomainAssets(): PluginOption {
  return {
    // @ts-ignore name convention
    name: 'copy-domain-assets',
    closeBundle() {
      const stdio = 'inherit';
      execSync('copyfiles -u 1 "src/lib/domain/styles/**/*" dist', { stdio });
      execSync('copyfiles -u 1 "src/lib/domain/fonts/**/*" dist', { stdio });
      execSync('copyfiles -u 1 "src/lib/domain/tokens/tokens.json" dist', {
        stdio,
      });
    },
  } satisfies PluginOption;
}
