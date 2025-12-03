const { Parser } = require('acorn');

class CoreParser {
  constructor(code) {
    this.ast = null;
    this.code = code;
  }

  parse() {
    return new Promise((resolve, reject) => {
      const parser = new Parser({
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          asyncFunctions: true,
          arrowFunctions: true,
          classes: true,
          defaultParams: true,
          destructuring: true,
          forOf: true,
          functionBind: true,
          generatorFunctions: true,
          objectLiteralComputedProperties: true,
          objectLiteralShorthandProperties: true,
          regexUFlags: true,
          spread: true,
          templateLiteral: true,
          trailingFunctionCommas: true
        }
      });

      parser.parse(this.code, (err, ast) => {
        if (err) {
          reject(err);
        } else {
          this.ast = ast;
          resolve(ast);
        }
      });
    });
  }
}

module.exports = CoreParser;