// Editar page
const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter email {kraken-string}", async function (email) {
  let element = await this.driver.$('input[name="identification"]');
  return await element.setValue(email);
});

When("I enter password {kraken-string}", async function (password) {
  let element = await this.driver.$('input[name="password"]');
  return await element.setValue(password);
});

When("I sign in", async function () {
  let element = await this.driver.$('[class*="login"] span');
  return await element.click();
});

When("I got to new page form", async function () {
  let element = await this.driver.$('a[href = "#/editor/page/"]');
  return await element.click();
});

When(
  "I edit the page content {kraken-string} {kraken-string}",
  async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    return await elementContent.setValue(content);
  }
);

When("I publish the page", async function () {
  let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
  await publishDropdown.click();
  let publishButton = await this.driver.$(".gh-publishmenu-button");
  await publishButton.click();
});

When("I check the page with title {kraken-string}", async function (title) {
  let pageItem = await this.driver.$(".//*//h3[text() = '" + title + "']");
  return await pageItem.isExisting();
});

When("I go to page {kraken-string}", async function (title) {
  let pageElement = await this.driver.$(".//*//h3[text() = '" + title + "']");
  return await pageElement.click();
});

When("I edit the title {kraken-string}", async function (title) {
  let elementTitle = await this.driver.$(
    'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'
  );
  await elementTitle.setValue(title);
  return await elementTitle.setValue(title);
});

When("I edit the description {kraken-string}", async function (content) {
  let elementContent = await this.driver.$(".koenig-editor__editor");
  return await elementContent.setValue(content);
});

When("I edit the page url {kraken-string}", async function (url) {
  let urlContent = await this.driver.$(".post-setting-slug");
  return await urlContent.setValue(url);
});

When("I make the page featured", async function () {
  let element = await this.driver.$(".checkbox");
  element.scrollIntoView(false);
  await element.click();
  let element2 = await this.driver.$(".settings-menu-header");
  return await element2.click();
});

When("I click the settings page", async function () {
  let element = await this.driver.$(".settings-menu-toggle");
  await element.click();
});

// Editar Tag

When("I click on tags module", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});

When("I click on new tag", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});

When("I enter the tag name {kraken-string}", async function (title) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(title);
});

Then("I save the tag", async function () {
  let element = await this.driver.$(".gh-btn-primary");
  return await element.click();
});

When("I click on the created tag", async function () {
  let element = await this.driver.$('.//*//h3[text()="1 tag"]');
  return await element.click();
});

When("I edit the tag name {kraken-string}", async function (title) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(title);
});

When("I edit the tag slug {kraken-string}", async function (slug) {
  let element = await this.driver.$("#tag-slug");
  return await element.setValue(slug);
});

When("I edit the tag description {kraken-string}", async function (content) {
  let element = await this.driver.$("#tag-description");
  return await element.setValue(content);
});

When("I edit the tag color {kraken-string}", async function (color) {
  let element = await this.driver.$('input[name="accent-color"]');
  return await element.setValue(color);
});

When("I open my user info", async function () {
  let element = await this.driver.$(".gh-user-avatar");
  return await element.click();
});

When("I close my session", async function () {
  let element = await this.driver.$('a[href="#/signout/"]');
  return await element.click();
});

// Eliminar Post

When("I click on posts module", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});

When("I click the first post on the list", async function () {
  let element = await this.driver.$(".gh-posts-list-item");
  return await element.click();
});

When("I click the post settings", async function () {
  let element = await this.driver.$(".settings-menu-toggle");
  return await element.click();
});

Then("I click the delete button", async function () {
  let element = await this.driver.$(".settings-menu-delete-button");
  element.scrollIntoView(false);
  return await element.click();
});

Then("I confirm the delete", async function () {
  let element = await this.driver.$(".gh-btn-red");
  return await element.click();
});

// Crear post

When("I go to new post form", async function () {
  let element = await this.driver.$('a[href = "#/editor/post/"]');
  return await element.click();
});

When(
  "I edit the post content {kraken-string} {kraken-string}",
  async function (title, content) {
    let elementTitle = await this.driver.$(".gh-editor-title");
    await elementTitle.setValue(title);
    let elementContent = await this.driver.$(".koenig-editor__editor");
    return await elementContent.setValue(content);
  }
);

When("I publish the post", async function () {
  let publishMenu = await this.driver.$(".gh-publishmenu-trigger");
  await publishMenu.click();
  let publishButton = await this.driver.$(".gh-btn-icon");
  await publishButton.click();
  let confirmButton = await this.driver.$(".gh-btn-black");
  await confirmButton.click();
});

When("I check the post with title {kraken-string}", async function (title) {
  let pageItem = await this.driver.$(".//*//h3[text() = '" + title + "']");
  return await pageItem.isExisting();
});

When("I go to post {kraken-string}", async function (title) {
  let pageElement = await this.driver.$(".//*//h3[text() = '" + title + "']");
  return await pageElement.click();
});

When("I edit the post title {kraken-string}", async function (title) {
  let elementTitle = await this.driver.$(
    'textarea[class="gh-editor-title ember-text-area gh-input ember-view"]'
  );
  await elementTitle.setValue(title);
  return await elementTitle.setValue(title);
});

When(
  "I check the post title existance {kraken-string}",
  async function (title) {
    let pageItem = await this.driver.$(".//*//h3[text() = '" + title + "']");
    return await !pageItem.isExisting();
  }
);
