import { get } from 'lodash-es';

import {
  resolvePrimitive,
  resolvePrimitivePath,
} from 'src/domain/tokens/resolvePrimitive';

import { type TokenLeaf } from './flattenTokens';

export interface ResolvePrimitiveDimensionsOptions {
  path: string;
  tailwindTheme: Record<string, unknown>;
  leaf: TokenLeaf;
  fallback?: string;
}

export interface ResolvedPrimitiveDimensions {
  dimensionPath: string;
  dimensionValue: string;
}

export function resolvePrimitiveDimensions(
  options: ResolvePrimitiveDimensionsOptions,
): ResolvedPrimitiveDimensions {
  const dimensionPath = resolvePrimitivePath(options.path);

  const dimensionValue = resolvePrimitive(
    options.tailwindTheme,
    options.leaf.value,
    get(options, ['fallback'], ''),
  );

  return { dimensionPath, dimensionValue };
}
