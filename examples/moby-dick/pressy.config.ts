import { defineConfig } from "pressy";

export default defineConfig({
  site: {
    title: "Moby-Dick; or, The Whale",
    url: "https://mobydick.pwalibrary.app",
    description: "The classic American novel by Herman Melville",
    author: "Herman Melville",
    language: "en",
  },
  pagination: {
    defaultMode: "paginated",
  },
  pwa: {
    enabled: true,
    shortName: "Moby-Dick",
    themeColor: "#1a1a1a",
    backgroundColor: "#f0f4f8",
    icon192: "./content/icon-192.png",
    icon512: "./content/icon-512.png",
    favicon: "./content/favicon.png",
  },
});
