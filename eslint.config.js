// eslint.config.js
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import parser from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  {
    ignores: ["**/node_modules/**"],
  },
  js.configs.recommended,
  ...compat.extends("plugin:@next/next/recommended"),
  ...compat.extends("prettier"),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser, // ← ここが重要！
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: true,
      },
    },
  },
];
