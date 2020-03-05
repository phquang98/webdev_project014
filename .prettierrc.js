// Prettier updated -> dont use JSON anymore, save configs as `.prettier.js`
module.exports = {
  // Yazan rules, change these if dont like
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120, // use this so that props in TS dont line break
  requirePragma: false,
  useTabs: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  // Personal rules
  singleQuote: false,
  tabWidth: 2,
  semi: true,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto"
};
