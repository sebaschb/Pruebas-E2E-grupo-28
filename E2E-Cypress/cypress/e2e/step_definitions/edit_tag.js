import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { tag } from "../../pages/Tag.Page";

let number = Math.floor(Math.random() * 100).toString();

const { dashboardRoute, tagRoute } = Cypress.env("endpoint");

When("The user navigates to the tag section", () => {
  cy.url().should("contain", dashboardRoute);
  tag.clickTagModule();
  cy.screenshot("Tag seccion");
});

When("The user creates a new tag", () => {
  tag.clickCreateTag();
  tag.typeTagName("Mi tag número " + number);
  cy.screenshot("New tag");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the name of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagName(" editado");
  cy.screenshot("New tag modified name");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the slug of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagSlug("-editado-" + number);
  cy.screenshot("New tag modified slug");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the description of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagDescription("Esta es la descripción de mi tag");
  cy.screenshot("New tag modified description");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the color of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagColor("4FB5ED");
  cy.screenshot("New tag modified color");
  tag.clickSaveTag();
  tag.clickTagModule();
});

Then("The user delete the tag created.", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  cy.screenshot("Delete tag");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});

Then("The user delete the tag created and name edited.", () => {
  tag.clickCreatedRowTag("Mi tag número " + number + " editado");
  cy.screenshot("Delete tag");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});
