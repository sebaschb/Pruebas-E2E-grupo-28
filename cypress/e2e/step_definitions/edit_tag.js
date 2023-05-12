import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { tag } from "../../pages/Tag.Page";

let number = Math.floor(Math.random() * 100).toString();

const { dashboardRoute, tagRoute } =
  Cypress.env("endpoint");

When("The user navigates to the tag section", () => {
  cy.url().should("contain", dashboardRoute);
  tag.clickTagModule();
});

When("The user creates a new tag", () => {
  tag.clickCreateTag();
  tag.typeTagName("Mi tag número " + number);
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the name of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagName(" editado");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the slug of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagSlug("-editado-" + number);
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the description of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagDescription("Esta es la descripción de mi tag");
  tag.clickSaveTag();
  tag.clickTagModule();
});

When("The user modifies the color of the created tag", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.typeTagColor("4FB5ED");
  tag.clickSaveTag();
  tag.clickTagModule();
});

Then("The user delete the tag created.", () => {
  tag.clickCreatedRowTag("Mi tag número " + number);
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});

Then("The user delete the tag created and name edited.", () => {
  tag.clickCreatedRowTag("Mi tag número " + number + " editado");
  tag.clickDeleteTag();
  tag.clickConfirmDeleteTag();
});
