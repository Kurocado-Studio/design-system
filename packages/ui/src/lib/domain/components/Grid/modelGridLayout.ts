import { get } from 'lodash-es';
import { twMerge } from 'tailwind-merge';

import {
  columnStyles,
  directionStyles,
  gapStyles,
  itemsStyles,
  justifyStyles,
  minHStyles,
  minWStyles,
  rowStyles,
} from 'src/lib/domain/components/Grid/grid.styles';
import {
  type ColumnStyles,
  type DirectionStyles,
  type GapStyles,
  type GridComponentLayoutOptions,
  type ItemsStyles,
  type JustifyStyles,
  type MinHStyles,
  type MinWStyles,
  type RowStyles,
} from 'src/lib/domain/components/Grid/types';

export function modelGridLayout(payload: GridComponentLayoutOptions): string {
  const gridColumnStyles: ColumnStyles = {
    base: get(payload, ['columns', 'base'], get(payload, ['columns'])),
    sm: get(payload, ['columns', 'sm']),
    md: get(payload, ['columns', 'md']),
    lg: get(payload, ['columns', 'lg']),
    xl: get(payload, ['columns', 'xl']),
    '2xl': get(payload, ['columns', '2xl']),
  };

  const gridDirectionStyles: DirectionStyles = {
    base: get(payload, ['direction', 'base'], get(payload, ['direction'])),
    sm: get(payload, ['direction', 'sm']),
    md: get(payload, ['direction', 'md']),
    lg: get(payload, ['direction', 'lg']),
    xl: get(payload, ['direction', 'xl']),
    '2xl': get(payload, ['direction', '2xl']),
  };

  const gridGapStyles: GapStyles = {
    base: get(payload, ['gap', 'base'], get(payload, ['gap'])),
    sm: get(payload, ['gap', 'sm']),
    md: get(payload, ['gap', 'md']),
    lg: get(payload, ['gap', 'lg']),
    xl: get(payload, ['gap', 'xl']),
    '2xl': get(payload, ['gap', '2xl']),
  };

  const gridItemsStyles: ItemsStyles = {
    base: get(payload, ['items', 'base'], get(payload, ['items'])),
    sm: get(payload, ['items', 'sm']),
    md: get(payload, ['items', 'md']),
    lg: get(payload, ['items', 'lg']),
    xl: get(payload, ['items', 'xl']),
    '2xl': get(payload, ['items', '2xl']),
  };

  const gridJustifyStyles: JustifyStyles = {
    base: get(payload, ['justify', 'base'], get(payload, ['justify'])),
    sm: get(payload, ['justify', 'sm']),
    md: get(payload, ['justify', 'md']),
    lg: get(payload, ['justify', 'lg']),
    xl: get(payload, ['justify', 'xl']),
    '2xl': get(payload, ['justify', '2xl']),
  };

  const gridMinHStyles: MinHStyles = {
    base: get(payload, ['minH', 'base'], get(payload, ['minH'])),
    sm: get(payload, ['minH', 'sm']),
    md: get(payload, ['minH', 'md']),
    lg: get(payload, ['minH', 'lg']),
    xl: get(payload, ['minH', 'xl']),
    '2xl': get(payload, ['minH', '2xl']),
  };

  const gridMinWStyles: MinWStyles = {
    base: get(payload, ['minW', 'base'], get(payload, ['minW'])),
    sm: get(payload, ['minW', 'sm']),
    md: get(payload, ['minW', 'md']),
    lg: get(payload, ['minW', 'lg']),
    xl: get(payload, ['minW', 'xl']),
    '2xl': get(payload, ['minW', '2xl']),
  };

  const gridRowStyles: RowStyles = {
    base: get(payload, ['rows', 'base'], get(payload, ['rows'])),
    sm: get(payload, ['rows', 'sm']),
    md: get(payload, ['rows', 'md']),
    lg: get(payload, ['rows', 'lg']),
    xl: get(payload, ['rows', 'xl']),
    '2xl': get(payload, ['rows', '2xl']),
  };

  return twMerge(
    'grid',
    columnStyles(gridColumnStyles),
    directionStyles(gridDirectionStyles),
    gapStyles(gridGapStyles),
    itemsStyles(gridItemsStyles),
    justifyStyles(gridJustifyStyles),
    minHStyles(gridMinHStyles),
    minWStyles(gridMinWStyles),
    rowStyles(gridRowStyles),
  );
}
