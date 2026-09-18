import autoprefixer from "autoprefixer";
import type { UserConfig } from "vite";

export default {
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
} satisfies UserConfig;
