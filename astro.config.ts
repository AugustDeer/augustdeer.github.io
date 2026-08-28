import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://augustdeer.com",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["system-ui"],
      weights: ["100 900"],
      styles: ["normal"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
