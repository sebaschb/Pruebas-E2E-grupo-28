class CreatePage {
  //Elements
  get = {
    pageTittleInput: () => cy.get('[placeholder="Page title"]'),
    pageMessageInput: () =>
      cy.get('[data-placeholder="Begin writing your page..."]'),

    buttonSettings: () => cy.get('[title="Settings"]'),
    menuSettings: () => cy.get('[class*="settings-menu-pane"]').first(),
    menuCloseSetting: () => cy.get('[class*="settings-menu-pane"]').first(),
    buttonReturnPage: () => cy.get('a[href="#/pages/"]'),
    inputUrlPage: () => cy.get('input[id="url"]'),
    buttonFeaturePage: () => cy.get('span[class="input-toggle-component"]'),
  };

  //functions
  enterPageTittle(type) {
    this.get.pageTittleInput().clear();
    this.get.pageTittleInput().type(type);
  }

  enterPageMessage(type) {
    this.get.pageMessageInput().clear();
    this.get.pageMessageInput().type(type);
  }

  clickButtonReturnPage() {
    cy.visit("/#/pages");
    // this.get.buttonReturnPage().click();
  }

  clickButtonSettings() {
    this.get.buttonSettings().click();
  }

  enterPageUrl(urlPage) {
    this.get.buttonSettings().click();
    this.get.inputUrlPage().type(urlPage);
    cy.screenshot("New page url");
    this.get.menuSettings().scrollTo("bottom");
    this.get.menuCloseSetting().click();
  }

  clickButtonFeaturePage() {
    this.get.buttonSettings().click();
    this.get.menuSettings().scrollTo("top");
    this.get.buttonFeaturePage().click();
    cy.screenshot("New page feature");
    this.get.menuSettings().scrollTo("bottom");
    this.get.menuCloseSetting().click();
  }
}

export const createPage = new CreatePage();
