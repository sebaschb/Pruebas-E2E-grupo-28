class Home {
  //Elements
  get = {
    buttonPost: () => cy.get('a[href="#/posts/"]').first(),
    userInfo: () => cy.get(".gh-user-avatar"),
    logOutButton: () => cy.get(".user-menu-signout"),
  };

  //functions
  clickButtonPost() {
    this.get.buttonPost().click();
  }

  viewButtonUserInfo() {
    this.get.userInfo().scrollIntoView();
  }

  clickButtonUserInfo() {
    this.get.userInfo().click();
  }

  clickButtonLogOut() {
    this.get.logOutButton().click();
  }
}

export const home = new Home();
