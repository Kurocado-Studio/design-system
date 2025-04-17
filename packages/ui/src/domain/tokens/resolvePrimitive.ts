import { get } from 'lodash-es';

function stripBraces(ref: string): string {
  return ref.replace(/^\{|\}$/g, '');
}

export function resolvePrimitive<T>(
  tokenTree: unknown,
  ref: string,
  fallBack: T,
): T {
  return get(tokenTree, stripBraces(ref), fallBack);
}

export function resolvePrimitivePath(primitivePath: string): string {
  return primitivePath.replace(/\./g, '-');
}
