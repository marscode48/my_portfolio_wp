const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    ignores: ["src/js/vendors/**"],
  },
  {
    files: ["src/js/**/*.js"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser,
    },
  },
];
