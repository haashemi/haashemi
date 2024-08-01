const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
  modules: {
    react: true,
    typescript: { parserProject: "./tsconfig.json", resolverProject: "./tsconfig.json" },
    strict: true,
    import: true,
    tailwind: true,
    next: true,
    prettier: true,
  },
  rules: {
    "tailwindcss/no-custom-classname": ["warn", { whitelist: ["size\\-.*"] }],
    "default-case": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-throw-literal": "off",
  },
});
