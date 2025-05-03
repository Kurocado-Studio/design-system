// packages/ui/tailwind-preset.mjs
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { kurocadoStudioTheme } from './lib/infra/theme.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default {
  content: [
    path.resolve(__dirname, 'react', '**', '*.{js,ts,jsx,tsx}'),
    path.resolve(__dirname, 'vue', '**', '*.{js,ts,jsx,tsx,vue}'),
    path.resolve(__dirname, 'lib', '**', '*.{js,ts}'),
    path.resolve(__dirname, 'stories', '**', '*.{js,ts,jsx,tsx}'),
  ],
  theme: kurocadoStudioTheme,
  darkMode: 'class',
  plugins: [import('tailwindcss-animate').then((mod) => mod.default)],
};
