const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");

module.exports = defineConfig({
  // setupNodeEvents can also be defined in "component"
  e2e: {
	baseUrl: "http://localhost:5173",
	
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: "ARGOS_TOKEN=argos_105088cfdf5406bda5f983c63f038ce8f9",
      });
    },
  },
});