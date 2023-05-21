import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { tag } from "../../pages/Tag.Page";

import { faker } from '@faker-js/faker';

let tagName = faker.lorem.sentence();
let complement = faker.lorem.sentence();
let tagComplement = " " + complement;
let tagColor = faker.lorem.sentence();
let tagDescription = faker.lorem.sentence();

const { dashboardRoute } = Cypress.env("endpoint");

When("The user navigates to the tag section", () => {
  cy.url().should("contain", dashboardRoute);
  tag.clickTagModule();
  cy.screenshot("Tag seccion");
});

When("The user creates a new tag", () => {
  tag.clickCreateTag();
  tag.typeTagName(tagName);
  cy.screenshot("New tag");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the name of the created tag", () => {
  tag.clickCreatedRowTag(tagName);
  tag.typeTagName(tagComplement);
  cy.screenshot("New tag modified name");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the slug of the created tag", () => {
  tag.clickCreatedRowTag(tagName);
  tag.typeTagSlug("-"+complement);
  cy.screenshot("New tag modified slug");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the description of the created tag", () => {
  tag.clickCreatedRowTag(tagName);
  tag.typeTagDescription(tagDescription);
  cy.screenshot("New tag modified description");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the color of the created tag", () => {
  tag.clickCreatedRowTag(tagName);
  tag.typeTagColor(tagColor);
  cy.screenshot("New tag modified color");
  tag.clickSaveTag();
  tag.clickTagModule();
});

Then("The user delete the tag created.", () => {
  tag.clickCreatedRowTag(tagName);
  cy.screenshot("Delete tag");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});

Then("The user delete the tag created and name edited.", () => {
  tag.clickCreatedRowTag(tagName + tagComplement);
  cy.screenshot("Delete tag");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});
