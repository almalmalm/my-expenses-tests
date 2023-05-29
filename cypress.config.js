const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    // reporterEnabled: 'cypress-mochawesome-reporter, cypress-qase-reporter',
    // cypressMochawesomeReporterReporterOptions: {
    //   charts: true,
    // },
    // cypressQaseReporterReporterOptions: {
    apiToken: process.env.QASE_API_TOKEN,
    projectCode: 'ME',
    // logging: true,
    // basePath: 'https://api.qase.io/v1',
    // screenshotFolder: 'screenshots',
    // sendScreenshot: true,
    runComplete: true,
    // environmentId: 1,
    // rootSuiteTitle: 'Cypress tests',
    // },
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
