import { defineConfig } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // Next's React, accessibility, and import plugins still use pre-v10 rule APIs.
  ...fixupConfigRules([...nextVitals, ...nextTs]),
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);
