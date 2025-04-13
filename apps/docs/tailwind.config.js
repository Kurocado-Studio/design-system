import { kurocadoStudioTheme } from '@kurocado-studio/ui/theme';

export const content = [
  './src/**/*.{ts,tsx}',
  './node_modules/@kurocado-studio/ui/dist/**/*.js',
];

export const darkMode = 'class';
export const plugins = [require('tailwindcss-animate')];

export const theme = kurocadoStudioTheme;
