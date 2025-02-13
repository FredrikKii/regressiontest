const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite",
    },
  },

  e2e: {
    baseUrl: "http://localhost:5173", // 🔹 Lägg till detta!
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
