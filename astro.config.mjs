import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "astro-sitemap";

export default defineConfig({
  site: "https://blog.arndev.nl",
  integrations: [tailwind(), react(), sitemap()],
});
