/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["src/components/__tests__/**.spec.js"],
      globals: {
        test: "readonly",
        describe: "readonly",
        expect: "readonly",
        vi: "readonly",
        beforeEach: "readonly",
        it: "readonly",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "vue/multi-word-component-names": "off",
  },
};
