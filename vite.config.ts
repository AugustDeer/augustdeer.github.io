import postcssPresetEnv from "postcss-preset-env";
import type { UserConfig } from "vite-plus";

export default {
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    sortImports: true,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
} satisfies UserConfig;
