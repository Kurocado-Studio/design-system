import { get } from 'lodash-es';

import type { TokenLeaf } from '../tokens/flattenTokens';

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

function stripBraces(ref: string): string {
  return ref.replace(/^\{|\}$/g, '');
}

export function primitiveResolver<T>(
  tokenTree: unknown,
  ref: string,
  fallBack: T,
): T {
  return get(tokenTree, stripBraces(ref), fallBack);
}

export function resolvePrimitivePath(primitivePath: string): string {
  return primitivePath.replace(/\./g, '-');
}

export function resolvePrimitiveColors(
  options: ResolvePrimitiveColorsOptions,
): ResolvedPrimitiveColors {
  const colorPath = resolvePrimitivePath(options.path);

  const colorValue = primitiveResolver(
    options.tailwindTheme,
    options.leaf.value,
    get(options, ['fallback'], ''),
  );

  return { colorPath, colorValue };
}

export function resolvePrimitiveDimensions(
  options: ResolvePrimitiveDimensionsOptions,
): ResolvedPrimitiveDimensions {
  const dimensionPath = resolvePrimitivePath(options.path);

  const dimensionValue = primitiveResolver(
    options.tailwindTheme,
    options.leaf.value,
    get(options, ['fallback'], ''),
  );

  return { dimensionPath, dimensionValue };
}
