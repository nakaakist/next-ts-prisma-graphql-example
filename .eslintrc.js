module.exports = {
  extends: ["next", "prettier"],
  plugins: ["unused-imports"],
  rules: {
    "import/order": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
