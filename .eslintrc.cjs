module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    "*.min.*",
    "build/",
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    GM: "readonly",
    unsafeWindow: "writable",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  rules: {
    "no-unreachable": "off",
    "quotes": [ "error", "double" ],
    "semi": [ "error", "always" ],
    "eol-last": [ "error", "always" ],
    "no-async-promise-executor": "off",
    "indent": ["error", 2, { "ignoredNodes": ["VariableDeclaration[declarations.length=0]"] }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true, "argsIgnorePattern": "^_" }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": ["error", {
      types: {
        "{}": false,
      },
      extendDefaults: true,
    }],
    "comma-dangle": ["error", "only-multiline"],
    "no-misleading-character-class": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
    {
      files: ["**.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "quotes": [ "error", "double" ],
        "semi": [ "error", "always" ],
        "eol-last": [ "error", "always" ],
        "no-async-promise-executor": "off",
        "indent": ["error", 2, { "ignoredNodes": ["VariableDeclaration[declarations.length=0]"] }],
        "comma-dangle": ["error", "only-multiline"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
