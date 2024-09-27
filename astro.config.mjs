// @ts-check
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import svgLoader from "vite-svg-loader";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  vite: {
    plugins: [svgLoader()],
  },
  integrations: [
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false
        }
      },
      Image: true,
      JavaScript: true,
      SVG: true
    })
  ]
});
