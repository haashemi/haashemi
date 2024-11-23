import { init } from "@fullstacksjs/eslint-config";

export default init({
  ignores: [".content-collections"],
  rules: {
    "@typescript-eslint/no-empty-function": "error",
  },
});
