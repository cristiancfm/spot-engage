// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";

export default withNuxt({
  ignores: ["**/node_modules/**", "**/build/**", "**/dist/**", "**/public/**"],
  files: ["**/*.vue", "**/*.js"],
  plugins: {
    prettier,
  },
  rules: {
    "prettier/prettier": "error",
  },
});
