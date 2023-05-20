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
  screenshotsFolder: "../Screenshots/Version2/Cypress",
  e2e: {
    setupNodeEvents,
    baseUrl: "http://localhost:3002/ghost",
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
      dashboardRoute: "/#/dashboard",
      postRoute: "/#/post",
      createPostRoute: "/#/editor/post",
      tagRoute: "/#/tags/",
      createTagRoute: "/#/tags/new",
      pageRoute: "/#/page",
      createPageRoute: "/#/editor/page",
    },
    dataPost: {
      newPost: {
        title: "Post nuevo",
        content: "Contenido del post nuevo",
      },
      editedPost: {
        title: "Post editado",
        content: "Contenido del post editado",
      },
    },
    dataPage: {
      newPage: {
        title: "Pagina nueva",
        content: "Contenido de la pagina nueva",
        url: "localhost:3002/2",
      },
    },
    dataTag: {
      newTag: {
        title: "Tag nuevo",
        content: "Contenido del nuevo tag",
        color: "4FB5ED",
        slug: "Slug nuevo",
      },
      editedTag: {
        title: "Tag editado",
        content: "Contenido del tag editado",
        color: "4FB5EE",
        slug: "Slug editado",
      },
    },
  },
});
