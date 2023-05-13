import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { post } from "../../pages/Post.Page";
import { createPost } from "../../pages/Create.Post.Page";

const { postRoute, createPostRoute } = Cypress.env("endpoint");

When("The user chooses the first post from the post list", () => {
  post.selectFirstPost();
});

When("The user deletes the post", () => {
  post.clickPostSettings();
  post.findDeletePostButton();
  post.clickDeletePostButton();
  cy.screenshot("Delete post");
  post.clickConfirmDeletePostButton();
});

When("The user delete a new post", () => {
  cy.url().should("contain", postRoute);
  post.selectFirstPost();
  cy.url().should("contain", createPostRoute);
  createPost.deletePost();
});

Then("The post is delete successfully", () => {
  cy.url().should("contain", postRoute);
});
