import reactRefresh from "eslint-plugin-react-refresh";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig} */
export default [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2020: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      "react-refresh": reactRefresh,
      "@typescript-eslint": typescriptEslint,
      "react-hooks": reactHooks,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    ignorePatterns: ["**/*.css"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    rules: {
      // Правила для TypeScript
    },
  },
  {
    files: ["**/*.jsx", "**/*.js"],
    rules: {
      // Правила для JavaScript и React
    },
  },
];
