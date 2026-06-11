import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://krespace.my.id",
  output: "static",
  integrations: [tailwind(), sitemap()],
});
