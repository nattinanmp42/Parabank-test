const { defineConfig } = require("cypress");
// import { defineConfig } from "cypress";
const { addMatchImageSnapshotPlugin } = require("@simonsmith/cypress-image-snapshot");

module.exports = defineConfig({
  video: true,
  e2e: {
    baseUrl: 'https://parabank.parasoft.com/',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples', '**/__snapshots__/*', '**/image_snapshots/*'],
    specPattern: '**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin (on, config)
      // implement node event listeners here
    },
  },
});
