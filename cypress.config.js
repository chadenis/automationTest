const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: "**/*.feature",
  }
});
