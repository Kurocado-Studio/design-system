import { get } from 'lodash-es';

import {
  resolvePrimitive,
  resolvePrimitivePath,
} from 'src/domain/tokens/resolvePrimitive';

import { type TokenLeaf } from './flattenTokens';

export interface ResolvePrimitiveColorsOptions {
  path: string;
  tailwindTheme: Record<string, unknown>;
  leaf: TokenLeaf;
  fallback?: string;
}

export interface ResolvedPrimitiveColors {
  colorPath: string;
  colorValue: string;
}

export function resolvePrimitiveColors(
  options: ResolvePrimitiveColorsOptions,
): ResolvedPrimitiveColors {
  const colorPath = resolvePrimitivePath(options.path);

  const colorValue = resolvePrimitive(
    options.tailwindTheme,
    options.leaf.value,
    get(options, ['fallback'], ''),
  );

  return { colorPath, colorValue };
}
