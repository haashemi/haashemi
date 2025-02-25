import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [...eslintPluginAstro.configs.recommended, eslintPluginPrettierRecommended];
