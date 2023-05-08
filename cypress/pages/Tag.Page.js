class Tag {
  //Elements
  get = {
    buttonNewTag: () => cy.get(".gh-btn-icon"),
    tagNameInput: () => cy.get("#tag-name"),
    slugNameInput: () => cy.get("#tag-slug"),
    descriptionNameInput: () => cy.get("#tag-description"),
    colorNameInput: () => cy.get('input[name="accent-color"]'),
    buttonSaveTag: () => cy.get(".gh-btn-icon"),
    buttonEditTag: () => cy.get(".gh-btn-blue"),
  };

  // Functions
  clickCreateTag() {
    this.get.buttonNewTag().click();
  }

  clickSaveTag() {
    this.get.buttonSaveTag().click();
  }

  clickEditTag() {
    this.get.buttonEditTag().click();
  }

  typeTagName(text) {
    this.get.tagNameInput().type(text);
  }

  typeTagSlug(text) {
    this.get.slugNameInput().type(text);
  }

  typeTagDescription(text) {
    this.get.descriptionNameInput().type(text);
  }

  typeTagColor(text) {
    this.get.colorNameInput().type(text);
  }
}

export const tag = new Tag();
