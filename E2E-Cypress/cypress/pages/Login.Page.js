class Login {
  //Elements
  get = {
    usernameInput: () => cy.get('[name="identification"]'),
    passwordInput: () => cy.get('[name="password"]'),
    submitButton: () => cy.get('[class*="login"] span'),
  };

  //functions
  enterUsername(username) {
    this.get.usernameInput().type(username);
  }

  enterPassword(password) {
    this.get.passwordInput().type(password);
  }

  clickLogin() {
    this.get.submitButton().click();
  }

  submitLogin(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    cy.screenshot();
    this.get.submitButton().click();
  }
}

export const login = new Login();
