import postcssPresetEnv from "postcss-preset-env";
import type { UserConfig } from "vite";

export default {
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
} satisfies UserConfig;
