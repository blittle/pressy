import { defineConfig } from "pressy";

export default defineConfig({
  site: {
    title: "Moby-Dick; or, The Whale",
    url: "https://moby-dick.example.com",
    description: "The classic American novel by Herman Melville",
    author: "Herman Melville",
    language: "en",
  },
  pagination: {
    defaultMode: "paginated",
  },
  stripe: {
    publishableKey:
      "pk_test_51T4oXp2dQHTmJq5nEPtbIOZURpt587H523JIRuuo8pARcxdivTCgH9aX5CzBssktNd1eBYRpYPTIo6NjB69R6zTV00bc1j1dvs",
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
