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
  home.clickButtonPost();
});

When("The user creates a new post", () => {
  cy.url().should("contain", postRoute);
  post.clickButtonNewPost();
  cy.url().should("contain", createPostRoute);
  const postTitle = "Ttitulo nuevo"; // Genera un título aleatorio de 3 palabras
  const postContent = "Lorem ipsum dolor sit amet, consectetur";

  createPost.enterPostTittle(postTitle);
  createPost.enterPostMessage(postContent);

  createPost.clickButtonReturnPost();
});

When("The user modifies the newly created post", () => {
  const postTitle = "Ttitulo editado"; // Genera un título aleatorio de 3 palabras
  cy.url().should("contain", postRoute);
  post.selectFirstPost();

  cy.url().should("contain", createPostRoute);
  createPost.enterPostTittle(postTitle);

  createPost.clickButtonReturnPost();

  cy.url().should("contain", postRoute);
});

When("The user canceled modifies post", () => {
  cy.url().should("contain", postRoute);
  post.selectFirstPost();
  cy.url().should("contain", createPostRoute);
  createPost.clickButtonReturnPost();

  cy.url().should("contain", postRoute);
});

Then("The post is successfully edited.", () => {
  cy.url().should("contain", postRoute);
  cy.get(post.get.listPost).should("contain", "Ttitulo editado");
});

Then("The post not changed", () => {
  cy.url().should("contain", postRoute);
});
