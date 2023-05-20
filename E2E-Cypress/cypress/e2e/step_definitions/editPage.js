import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { home } from "../../pages/Home.Page";
import { page } from "../../pages/Page.Page";
import { createPage } from "../../pages/Create.Page.Page";

const { newPage } = Cypress.env("dataPage");

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

  createPage.enterPageTittle(newPage.title);

  cy.screenshot("New page title");

  createPage.clickButtonReturnPage();
});

When("The user creates a new page whit message", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);

  createPage.enterPageMessage(newPage.content);

  cy.screenshot("New page message");

  createPage.clickButtonReturnPage();
});

When("The user creates a new page whit url", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);

  createPage.enterPageMessage(newPage.content);
  createPage.enterPageTittle(newPage.title);
  createPage.enterPageUrl(newPage.url);

  createPage.clickButtonReturnPage();
});

When("The user creates a new page change feature", () => {
  cy.url().should("contain", pageRoute);
  page.clickButtonNewPage();
  cy.url().should("contain", createPageRoute);

  createPage.enterPageMessage(newPage.content);
  createPage.enterPageTittle(newPage.title);

  createPage.clickButtonFeaturePage();
  createPage.clickButtonReturnPage();
});

Then("The page is successfully edited.", () => {
  cy.url().should("contain", pageRoute);
});
