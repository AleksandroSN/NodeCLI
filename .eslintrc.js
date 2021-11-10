module.exports = {
  extends: ["plugin:prettier/recommended", "airbnb-base"],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": "error",
    "no-console": "warn",
  },
};
