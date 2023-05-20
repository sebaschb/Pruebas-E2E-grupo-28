import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { tag } from "../../pages/Tag.Page";

let number = Math.floor(Math.random() * 100).toString();

const { newTag, editedTag } = Cypress.env("dataTag");

const { dashboardRoute } = Cypress.env("endpoint");

When("The user navigates to the tag section", () => {
  cy.url().should("contain", dashboardRoute);
  tag.clickTagModule();
  cy.screenshot("Tag seccion");
});

When("The user creates a new tag", () => {
  tag.clickCreateTag();
  tag.typeTagName(newTag.title);
  cy.screenshot("New tag");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the name of the created tag", () => {
  tag.clickCreatedRowTag(newTag.title);
  tag.typeTagName(editedTag.title);
  cy.screenshot("New tag modified name");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the slug of the created tag", () => {
  tag.clickCreatedRowTag(newTag.title);
  tag.typeTagSlug(editedTag.slug);
  cy.screenshot("New tag modified slug");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the description of the created tag", () => {
  tag.clickCreatedRowTag(newTag.title);
  tag.typeTagDescription(editedTag.content);
  cy.screenshot("New tag modified description");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the color of the created tag", () => {
  tag.clickCreatedRowTag(newTag.title);
  tag.typeTagColor(editedTag.color);
  cy.screenshot("New tag modified color");
  tag.clickSaveTag();
  tag.clickTagModule();
});

Then("The user delete the tag created.", () => {
  tag.clickCreatedRowTag(newTag.title);
  cy.screenshot("Delete tag");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});

Then("The user delete the tag created and name edited.", () => {
  tag.clickCreatedRowTag(newTag.title);
  cy.screenshot("Delete tag");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});
