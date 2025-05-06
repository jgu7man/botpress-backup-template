import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.transition.*.{ts,tsx}"], rules: {
      "@typescript-eslint/no-unused-vars": "off",
    }
  },
  {
    file: ["**/*.state.{ts,tsx}"], rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/await-thenable": "off"
    }
  }
]);