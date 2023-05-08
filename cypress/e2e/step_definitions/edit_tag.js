import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../pages/Login.Page";
import { home } from "../../pages/Home.Page";
import { tag } from "../../pages/Tag.Page";

let number = Math.floor(Math.random() * 100).toString();

const { username, password } = Cypress.env("AdminUser");
const { authLoginRoute, dashboardRoute, tagRoute, createTagRoute } =
  Cypress.env("endpoint");

When("The user navigates to the tag section", () => {
  cy.url().should("contain", dashboardRoute);
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute);
});

When("The user creates a new tag", () => {
  cy.visit(createTagRoute);
  cy.url().should("contain", createTagRoute);
  tag.typeTagName("Mi tag número " + number);
  tag.clickSaveTag();
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute);
});

When("The user modifies the name of the created tag", () => {
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute + "mi-tag-numero-" + number);
  tag.typeTagName(" editado");
  tag.clickSaveTag();
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute);
});

When("The user modifies the slug of the created tag", () => {
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute + "mi-tag-numero-" + number);
  tag.typeTagSlug("-editado-" + number);
  tag.clickSaveTag();
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute);
});

When("The user modifies the description of the created tag", () => {
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute + "mi-tag-numero-" + number);
  tag.typeTagDescription("Esta es la descripción de mi tag " + nombreTag);
  tag.clickSaveTag();
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute);
});

When("The user modifies the color of the created tag", () => {
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute + "mi-tag-numero-" + number);
  tag.typeTagColor("4FB5ED");
  tag.clickSaveTag();
  cy.visit(tagRoute);
  cy.url().should("contain", tagRoute);
});

Then("The user logs out.", () => {
  home.viewButtonUserInfo();
  home.clickButtonUserInfo();
  home.clickButtonLogOut();
});
