class CreatePost {
  //Elements
  get = {
    postTittleInput: () => cy.get('[placeholder="Post Title"]'),
    postMessageInput: () =>
      cy.get('[data-placeholder="Begin writing your post..."]'),

    buttonSettings: () => cy.get('[title="Settings"]'),
    menuSettings: () => cy.get('[class*="settings-menu-pane"]'),
    buttonReturnPost: () => cy.get('a[href="#/posts/"]').first(),
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
}

export const createPost = new CreatePost();
