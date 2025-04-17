import type { CustomThemeConfig } from 'tailwindcss/types/config';

export const fontFamily: Required<CustomThemeConfig['fontFamily']> = {
  caption: 'Mona Sans',
  content: 'Mona Sans',
  sans: ['Mona Sans'],
  body: 'Mona Sans',
  'body-bold': 'Mona Sans',
  'heading-3': 'Mona Sans',
  'heading-2': 'Mona Sans',
  'heading-1': 'Mona Sans',
  'monospace-body': 'monospace',
  display: [['Mona Sans'], { fontVariationSettings: '"wdth" 125' }],
  fontFamily: 'Mona Sans',
};
