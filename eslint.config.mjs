import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Our marketing copy is full of intentional apostrophes and quotes
      // ("don't", "we're", quoted phrases). React/Next render these raw
      // characters correctly, and escaping them to &apos;/&quot; only makes
      // the prose harder to read and edit — so we don't flag them.
      "react/no-unescaped-entities": "off",
    },
  },
]);

export default eslintConfig;
