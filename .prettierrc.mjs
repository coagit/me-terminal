export default {
  "extends": ["prettier"],
  "plugins": ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }],
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "arrow-body-style": "off",
  "prefer-arrow-callback": "off",
  "quoteProps": "consistent",
  "trailingComma": "all",
  "bracketSpacing": false,
  "jsxSingleQuote": true
}
