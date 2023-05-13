class Page {
  //Elements
  get = {
    buttonNewPage: () => cy.get('[href="#/editor/page/"]').first(),
    listPage: () => cy.get('li[class*="list-item"]'),
    firstPageRow: () => cy.get('li[class*="list-item"]'),
  };

  //functions
  clickButtonNewPage() {
    this.get.buttonNewPage().click();
  }

  getNumberPost() {
    return cy.wrap(this.get.listPage().length);
  }

  selectFirstPage() {
    this.get.listPage().eq(0).click();
  }
}

export const page = new Page();
