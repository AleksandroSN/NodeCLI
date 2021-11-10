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
    "comma-dangle": "off",
    "arrow-body-style": "off",
    "operator-linebreak": "off",
    "prettier/prettier": "error",
    "no-console": "warn",
  },
};
