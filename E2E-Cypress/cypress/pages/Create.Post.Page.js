class CreatePost {
  //Elements
  get = {
    postTittleInput: () => cy.get('[placeholder="Post title"]'),
    postMessageInput: () =>
      cy.get('[data-placeholder="Begin writing your post..."]'),

    buttonSettings: () => cy.get('[title="Settings"]'),
    menuSettings: () => cy.get('[class*="settings-menu-pane"]').first(),
    buttonReturnPost: () => cy.get('a[href="#/posts/"]').first(),
    buttonDeletePost: () => cy.get('[class*="menu-delete-button"]'),
    buttonDeleteConfirmation: () =>
      cy.get('button[class*="gh-btn-red"]').first(),
  };

  //functions
  enterPostTittle(type) {
    this.get.postTittleInput().clear();
    this.get.postTittleInput().type(type);
  }

  enterPostMessage(type) {
    this.get.postMessageInput().clear();
    this.get.postMessageInput().type(type);
  }

  clickButtonReturnPost() {
    this.get.buttonReturnPost().click();
  }

  clickButtonSettings() {
    this.get.buttonSettings().click();
  }

  clickButtonDelete() {
    this.get.buttonDeletePost().click();
    this.get.buttonDeleteConfirmation().click();
  }

  deletePost() {
    this.clickButtonSettings();
    this.get.menuSettings().scrollTo("top");
    this.clickButtonDelete();
  }
}

export const createPost = new CreatePost();
