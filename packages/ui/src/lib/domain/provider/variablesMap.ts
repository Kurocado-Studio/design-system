export function handleVariablesMap(
  htmlStyleElementRef: HTMLStyleElement | null,
  cssVariablesPayload: Record<string, unknown>,
): HTMLStyleElement {
  const styleElRef: HTMLStyleElement = htmlStyleElementRef
    ? htmlStyleElementRef
    : document.createElement('style');

  document.head.appendChild(styleElRef);

  styleElRef.textContent = `:root {
    ${Object.entries(cssVariablesPayload)
      .map(([variableName, variableValue]) =>
        typeof variableValue === 'string'
          ? `${variableName}: ${variableValue};`
          : '',
      )
      .join('\n')}
  }`;

  return styleElRef;
}
