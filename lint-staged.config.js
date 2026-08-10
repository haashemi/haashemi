/**
 * @see https://github.com/lint-staged/lint-staged
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,mjs,ts,tsx}": "eslint --fix",
  "*.{md,json}": "prettier --write",
};
