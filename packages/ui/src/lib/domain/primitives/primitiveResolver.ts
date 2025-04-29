import { get } from 'lodash-es';

import type { TokenLeaf } from '../tokens/flattenTokens';

export interface ResolvePrimitiveDimensionsOptions {
  path: string;
  payload: Record<string, unknown>;
  leaf: TokenLeaf;
  fallback?: string;
}

export interface ResolvedPrimitiveDimensions {
  dimensionPath: string;
  dimensionValue: string;
}

export interface ResolvePrimitiveColorsOptions {
  path: string;
  payload: {
    primitives: Record<string, unknown>;
  };
  leaf: TokenLeaf;
  fallback?: string;
}

export interface ResolveAliasColorsOptions {
  path: string;
  tokensPayload: Record<string, unknown>;
  leaf: TokenLeaf;
  fallback?: TokenLeaf;
}

export interface ResolveAliasDimensionsOptions {
  path: string;
  tokensPayload: Record<string, unknown>;
  leaf: TokenLeaf;
  fallback?: TokenLeaf;
}

export interface ResolvedPrimitiveColors {
  colorPath: string;
  colorValue: string;
}

export interface ResolvedAliasColors {
  path: string;
  leaf: TokenLeaf;
}

export interface ResolvedAliasDimensions {
  path: string;
  leaf: TokenLeaf;
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
    get(options, ['payload']),
    get(options, ['leaf', '$value']),
    get(options, ['fallback'], ''),
  );

  return { colorPath, colorValue };
}

export function resolveAliasColor(
  options: ResolveAliasColorsOptions,
): ResolvedAliasColors {
  const colorPath = resolvePrimitivePath(options.path);

  const colorValue = primitiveResolver<TokenLeaf>(
    options.tokensPayload,
    get(options, ['leaf', '$value']),
    get(options, ['fallback'], { $value: '', $type: '' }),
  );

  return {
    path: colorPath,
    leaf: colorValue,
  };
}

export function resolvePrimitiveDimensions(
  options: ResolvePrimitiveDimensionsOptions,
): ResolvedPrimitiveDimensions {
  const dimensionPath = resolvePrimitivePath(options.path);

  const dimensionValue = primitiveResolver(
    get(options, ['payload']),
    get(options, ['leaf', '$value']),
    get(options, ['fallback'], ''),
  );

  return { dimensionPath, dimensionValue };
}

export function resolveAliasDimensions(
  options: ResolveAliasDimensionsOptions,
): ResolvedAliasDimensions {
  const dimensionPath = resolvePrimitivePath(options.path);

  const dimensionValue = primitiveResolver(
    options.tokensPayload,
    get(options, ['leaf', '$value']),
    get(options, ['fallback'], { $value: '', $type: '' }),
  );

  return {
    path: dimensionPath,
    leaf: dimensionValue,
  };
}
