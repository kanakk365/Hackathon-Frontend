import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
const config = {
  // Specify the files to lint
  overrides: [
    {
      files: ['src/**/*.{ts,tsx,js,jsx}'],
      languageOptions: {
        parser: tseslintParser,  // Use the TypeScript parser
        parserOptions: {
          ecmaVersion: 2020,  // Optional: Specify ECMAScript version
          sourceType: "module", // Optional: Specify module source type
        },
        globals: globals.browser,
      },
      plugins: {
        "@typescript-eslint": tseslint,
        react: pluginReact,
      },
      extends: [
        pluginJs.configs.recommended,  // JavaScript recommended rules
        "plugin:@typescript-eslint/recommended",  // TypeScript recommended rules
        "plugin:react/recommended",  // React recommended rules
      ],
      rules: {
        "no-unused-vars": "warn", // Customize rules as needed
        "@typescript-eslint/no-unused-vars": "warn",  // Handle unused vars in TS
        "react/react-in-jsx-scope": "off",  // React 17+ doesn't require React import
      },
      settings: {
        react: {
          version: "detect",  // Automatically detect the React version
        },
      },
    },
  ],
};

export default config;
