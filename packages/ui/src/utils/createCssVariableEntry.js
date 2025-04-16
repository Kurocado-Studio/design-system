'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.createCssVariableEntry = createCssVariableEntry;
function createCssVariableEntry(prefix, name, value) {
  const cssVariableName = '--'.concat(prefix, '-').concat(name);
  const cssVariableValue = value;
  const cssVariableReference = 'var('.concat(cssVariableName, ')');
  return {
    cssVariableName,
    cssVariableValue,
    cssVariableReference,
  };
}
