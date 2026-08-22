import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
        fallbacks: ["system-ui"],
        weights: ["100 900"],
        styles: ["normal"]
    }]
});