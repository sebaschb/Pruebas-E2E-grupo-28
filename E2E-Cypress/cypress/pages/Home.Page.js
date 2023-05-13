class Home {
  //Elements
  get = {
    buttonPost: () => cy.get('a[href="#/posts/"]').first(),
    buttonPages: () => cy.get('a[href="#/pages/"]').first(),
  };

  //functions
  clickButtonPost() {
    this.get.buttonPost().click();
  }

  clickButtonPages() {
    this.get.buttonPages().click();
  }
}

export const home = new Home();
