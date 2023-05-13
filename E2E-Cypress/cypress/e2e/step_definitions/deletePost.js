import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../pages/Login.Page";
import { home } from "../../pages/Home.Page";
import { post } from "../../pages/Post.Page";
import { createPost } from "../../pages/Create.Post.Page";

const { username, password } = Cypress.env("AdminUser");
const { authLoginRoute, dashboardRoute, postRoute, createPostRoute } =
  Cypress.env("endpoint");

When("The user chooses the first post from the post list", () => {
  post.selectFirstPost();
});

When("The user deletes the post", () => {
  post.clickPostSettings();
  post.findDeletePostButton();
  post.clickDeletePostButton();
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
