import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../pages/Login.Page";
import { home } from "../../pages/Home.Page";
import { post } from "../../pages/Post.Page";
import { createPost } from "../../pages/Create.Post.Page";

const { username, password } = Cypress.env("AdminUser");
const { authLoginRoute, dashboardRoute, postRoute, createPostRoute } =
  Cypress.env("endpoint");

Given("A web browser is at the ghost login page", () => {
  cy.visit("/");
});

When(
  "A user enters the username, the password, and clicks on the login button",
  () => {
    cy.url().should("contain", authLoginRoute);
    login.submitLogin(username, password);
  }
);

When("The user navigates to the post section", () => {
  cy.url().should("contain", dashboardRoute);
  cy.visit(postRoute);
  cy.url().should("contain", postRoute);
});

When("The user chooses the first post from the post list", () => {
  post.clickFirstPostRow();
});

When("The user deletes the post", () => {
  post.clickPostSettings();
  post.findDeletePostButton();
  post.clickDeletePostButton();
  post.clickConfirmDeletePostButton();
});

Then("The user logs out.", () => {
  home.viewButtonUserInfo();
  home.clickButtonUserInfo();
  home.clickButtonLogOut();
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
