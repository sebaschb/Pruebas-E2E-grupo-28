class Tag {
  //Elements
  get = {
    tagModule: () => cy.get('a[href="#/tags/"]').first(),
    buttonNewTag: () => cy.get('a[href="#/tags/new/"]').first(),
    tagNameInput: () => cy.get("#tag-name"),
    rowCreatedTag: (value) => cy.contains(value).first(),
    slugNameInput: () => cy.get("#tag-slug"),
    descriptionNameInput: () => cy.get("#tag-description"),
    colorNameInput: () => cy.get('input[name="accent-color"]'),
    buttonSaveTag: () => cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]'),
    buttonEditTag: () => cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]'),
    buttonDeleteTag: () => cy.contains("Delete tag"),
    confirmDeleteTag: () => cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').first(),
  };

  // Functions
  clickTagModule() {
    this.get.tagModule().click();
  }

  clickCreateTag() {
    this.get.buttonNewTag().click();
  }

  clickCreatedRowTag(value) {
    this.get.rowCreatedTag(value).click();
  }

  clickSaveTag() {
    this.get.buttonSaveTag().click();
  }

  clickEditTag() {
    this.get.buttonEditTag().click();
  }

  clickConfirmDeleteTag() {
    this.get.confirmDeleteTag().click();
  }

  clickDeleteTag() {
    this.get.buttonDeleteTag().click();
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
