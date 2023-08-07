const { defineConfig } = require('cypress')
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin')

module.exports = defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173'
  }
})
