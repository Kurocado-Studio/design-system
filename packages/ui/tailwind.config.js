export const content = ['./src/**/*.{ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      caption: 'Mona Sans',
      content: 'Mona Sans',
      sans: ['Mona Sans'],
      body: 'Mona Sans',
      'body-bold': 'Mona Sans',
      'heading-3': 'Mona Sans',
      'heading-2': 'Mona Sans',
      'heading-1': 'Mona Sans',
      'monospace-body': 'monospace',
      display: [['Mona Sans'], { fontVariationSettings: '"width" 125' }],
    },
  },
};
export const darkMode = ['class', '[data-mode="dark"]'];
export const plugins = [require('tailwindcss-animate')];
