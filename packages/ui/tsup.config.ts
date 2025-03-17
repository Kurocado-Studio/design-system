/* eslint import/no-default-export: 0 */
import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['src/Button.tsx'],
  format: ['esm'],
  dts: true,
  external: ['react'],
  ...options,
}));
