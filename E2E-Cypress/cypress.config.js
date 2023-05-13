const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  // add rute for screenshots
  screenshotsFolder: "../Screenshots/Version1/Cypress",
  e2e: {
    setupNodeEvents,
    baseUrl: "http://localhost:3001/ghost",
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/features/*.feature",
  },

  env: {
    AdminUser: {
      username: "c.wilchesv@uniandes.edu.co",
      password: "2TiSXG9VVvECnp",
    },
    endpoint: {
      authLoginRoute: "/#/signin",
      dashboardRoute: "/#/site",
      postRoute: "/#/post",
      createPostRoute: "/#/editor/post",
      tagRoute: "/#/tags/",
      createTagRoute: "/#/tags/new",
      pageRoute: "/#/page",
      createPageRoute: "/#/editor/page",
    },
  },
});
