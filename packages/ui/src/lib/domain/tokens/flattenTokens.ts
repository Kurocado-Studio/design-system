export type TokenLeaf = { value: string; type?: string };
export type TokenTree = Record<string, TokenLeaf>;

export interface FlatToken {
  path: string;
  leaf: TokenLeaf;
}

export function flattenTokens(
  tree: unknown,
  prefix: string[] = [],
): FlatToken[] {
  const treeObject = typeof tree === 'object' ? tree : {};

  return Object.entries(treeObject || {}).flatMap(([key, node]) => {
    const path = [...prefix, key];
    // @ts-ignore
    if (typeof node === 'object' && 'value' in node) {
      return [{ path: path.join('.'), leaf: node as TokenLeaf }];
    }
    return flattenTokens(node as TokenTree, path);
  });
}
