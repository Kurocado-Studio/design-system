"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCssVariableEntry = createCssVariableEntry;
function createCssVariableEntry(prefix, name, value) {
    var cssVariableName = "--".concat(prefix, "-").concat(name);
    var cssVariableValue = value;
    var cssVariableReference = "var(".concat(cssVariableName, ")");
    return {
        cssVariableName: cssVariableName,
        cssVariableValue: cssVariableValue,
        cssVariableReference: cssVariableReference,
    };
}
