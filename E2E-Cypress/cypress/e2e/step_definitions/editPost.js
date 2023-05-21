import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { login } from "../../pages/Login.Page";
import { home } from "../../pages/Home.Page";
import { post } from "../../pages/Post.Page";
import { createPost } from "../../pages/Create.Post.Page";

import { faker } from '@faker-js/faker';


let postName = faker.name.jobTitle();
let editedPostName = faker.lorem.sentence();
let tagDescription = faker.lorem.sentence();

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
    login.enterUsername(username);
    login.enterPassword(password);
    cy.screenshot("Login");
    login.clickLogin();
  }
);

When("The user navigates to the post section", () => {
  cy.url().should("contain", dashboardRoute);
  home.clickButtonPost();
  cy.screenshot("Post seccion");
});

When("The user creates a new post", () => {
  cy.url().should("contain", postRoute);
  post.clickButtonNewPost();
  cy.url().should("contain", createPostRoute);
  const postTitle = postName;
  const postContent = tagDescription;

  createPost.enterPostTittle(postTitle);
  createPost.enterPostMessage(postContent);

  cy.screenshot("New post");

  createPost.clickButtonReturnPost();
});

When("The user modifies the newly created post", () => {
  const postTitle = editedPostName; // Genera un título aleatorio de 3 palabras
  cy.url().should("contain", postRoute);
  post.selectFirstPost();

  cy.url().should("contain", createPostRoute);
  createPost.enterPostTittle(postTitle);

  cy.screenshot("New post modified");

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
