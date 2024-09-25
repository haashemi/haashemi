const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
  modules: {
    react: true,
    next: true,
    typescript: { parserProject: true, resolverProject: "./tsconfig.json" },
    strict: true,
    import: true,
    esm: true,
    tailwind: true,
    prettier: true,
  },
  rules: {
    "fp/no-nil": "off",
    "fp/no-unused-expression": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  root: true,
});
