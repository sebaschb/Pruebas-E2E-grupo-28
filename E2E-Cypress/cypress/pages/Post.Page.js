class Post {
  //Elements
  get = {
    buttonNewPost: () => cy.get('a[href="#/editor/post/"]').first(),
    listPost: () => cy.get('li[class*="list-item"]'),
    firstPostRow: () => cy.contains("By Ghost in Getting Started"),
    postSettings: () => cy.get(".post-settings"),
    deletePostButton: () => cy.get(".settings-menu-delete-button"),
    confirmDeletePostButton: () => cy.get(".gh-btn-red"),
  };

  //functions
  clickButtonNewPost() {
    this.get.buttonNewPost().click();
  }

  getNumberPost() {
    return cy.wrap(this.get.listPost().length);
  }

  selectFirstPost() {
    this.get.listPost().eq(0).click();
  }

  clickFirstPostRow() {
    this.get.firstPostRow().click();
  }

  clickPostSettings() {
    this.get.postSettings().click();
  }

  findDeletePostButton() {
    this.get.deletePostButton().scrollIntoView();
  }

  clickDeletePostButton() {
    this.get.deletePostButton().click();
  }

  clickConfirmDeletePostButton() {
    cy.wait(1000);
    this.get.confirmDeletePostButton().click();
  }
}

export const post = new Post();
