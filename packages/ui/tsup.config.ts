/* eslint import/no-default-export:0 */
import { execSync } from 'node:child_process';
import { defineConfig } from 'tsup';
import vuePlugin from 'unplugin-vue/esbuild';

export default defineConfig({
  entry: [
    'src/lib/theme/theme.ts',
    'src/index.ts',
    'src/react/exports.ts',
    'src/vue/exports.ts',
    'src/stories/index.ts',
  ],
  format: ['esm'],
  dts: false,
  splitting: true,
  sourcemap: true,
  target: 'esnext',
  clean: true,
  esbuildPlugins: [vuePlugin()],
  external: [
    'vue',
    '@vue/runtime-dom',
    'react',
    'react-dom',
    '@react-aria/button',
    '@react-aria/textfield',
    'motion',
    'motion-v',
    '@kurocado-studio/html-forms',
    'lodash-es',
    'tailwindcss',
    'tailwind-merge',
    'tailwind-variants',
    'tailwindcss-animate',
    '@storybook/react',
  ],
  onSuccess: async (): Promise<void> => {
    const stdio = 'inherit';
    execSync('copyfiles -u 1 "src/lib/domain/{styles,fonts}/**/*" dist', {
      stdio,
    });
    execSync('copyfiles -u 1 "src/lib/domain/tokens/tokens.json" dist', {
      stdio,
    });
    execSync('copyfiles packages/ui/src/lib/domain/tokens/tokens.json dist', {
      stdio,
    });
    execSync('copyfiles tailwind.preset.mjs dist', { stdio });
    execSync('tsc -p tsconfig.react.json', { stdio });
    execSync('vue-tsc -p tsconfig.vue.json', { stdio });
  },
});
