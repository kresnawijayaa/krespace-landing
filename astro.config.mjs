import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://krespace.my.id",
  output: "static",
  integrations: [tailwind(), sitemap()],
  redirects: {
    "/demo": { status: 301, destination: "/work" },
    "/demo/invoice": { status: 301, destination: "/work" },
    "/demo/monitoring": { status: 301, destination: "/work" },
    "/demo/stock": { status: 301, destination: "/work" },
    "/demo/booking": { status: 301, destination: "/work" },
    "/kontak": { status: 301, destination: "/contact" },
  },
});
