/* eslint import/no-default-export: 0 */
import { kurocadoStudioTheme } from './lib/infra';

export default {
  content: [
    new URL('./lib/**/*.{js,ts,jsx,tsx}', import.meta.url).pathname,
    new URL('./react/**/*.{js,ts,jsx,tsx}', import.meta.url).pathname,
    new URL('./src/**/*.{js,ts,jsx,tsx}', import.meta.url).pathname,
    new URL('./stories/**/*.{js,ts,jsx,tsx}', import.meta.url).pathname,
    new URL('./vue/**/*.{js,ts,jsx,tsx,vue}', import.meta.url).pathname,
  ],
  theme: kurocadoStudioTheme,
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')],
};
