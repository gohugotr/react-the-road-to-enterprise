/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

export default (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions 
  ) => {
    return Object.assign({}, config, { 
      fixturesFolder: 'cypress/fixtures', 
      integrationFolder: 'cypress/integration', 
      screenshotsFolder: 'cypress/screenshots', 
      videosFolder: 'cypress/videos', 
      supportFile: 'cypress/support/index.ts',
    }
))
