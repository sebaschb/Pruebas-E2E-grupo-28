class Post {
  //Elements
  get = {
    buttonNewPost: () => cy.get('a[href="#/editor/post/"]').first(),
    listPost: () => cy.get('li[class*="list-item"]'),
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
}

export const post = new Post();
