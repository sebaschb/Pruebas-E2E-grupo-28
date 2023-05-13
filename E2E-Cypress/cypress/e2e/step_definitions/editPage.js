import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { home } from "../../pages/Home.Page";
import { page } from "../../pages/Page.Page";
import { createPage } from "../../pages/Create.Page.Page";

const { dashboardRoute, pageRoute, createPageRoute } = Cypress.env("endpoint");

When("The user navigates to the page section", () => {
  cy.url().should("contain", dashboardRoute);
  home.clickButtonPages();
  cy.screenshot("Page seccion");
});

When("The user creates a new page whit tittle", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);
  const pageTitle = "Titulo nuevo";

  createPage.enterPageTittle(pageTitle);

  cy.screenshot("New page title");

  createPage.clickButtonReturnPage();
});

When("The user creates a new page whit message", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);
  const pageMessage = "Mensaje nuevo";

  createPage.enterPageMessage(pageMessage);

  cy.screenshot("New page message");

  createPage.clickButtonReturnPage();
});

When("The user creates a new page whit url", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);
  const pageMessage = "Mensaje nuevo";
  const pageTitle = "Titulo nuevo";

  createPage.enterPageMessage(pageMessage);
  createPage.enterPageTittle(pageTitle);

  createPage.enterPageUrl();

  createPage.clickButtonReturnPage();
});

When("The user creates a new page change feature", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);
  const pageMessage = "Mensaje nuevo";
  const pageTitle = "Titulo nuevo";

  createPage.enterPageMessage(pageMessage);
  createPage.enterPageTittle(pageTitle);

  createPage.clickButtonFeaturePage();

  cy.screenshot("New page feature");

  createPage.clickButtonReturnPage();
});

Then("The page is successfully edited.", () => {
  cy.url().should("contain", pageRoute);
});
