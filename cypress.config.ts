const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");
require("dotenv").config(); // Läser in variabler från .env-filen

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",

    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        // Hämta token från .env-filen
        token: process.env.ARGOS_TOKEN,
      });
    },
  },
});