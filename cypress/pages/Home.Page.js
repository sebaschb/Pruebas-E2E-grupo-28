class Home {
  //Elements
  get = {
    buttonPost: () => cy.get('a[href="#/posts/"]').first(),
  };

  //functions
  clickButtonPost() {
    this.get.buttonPost().click();
  }
}

export const home = new Home();
