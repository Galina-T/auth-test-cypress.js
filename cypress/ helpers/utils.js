const utils = {
  setText(locator, text) {
    cy.get(locator)
      .scrollIntoView()
      .clear()
      .type(text)
      .should("have.value", text);
  },

  isBtnDisabled(btn) {
    cy.get(btn.locator)
      .contains(btn.text)
      .should("be.disabled")
      .should("be.visible");
  },

  clickBtn(btn) {
    cy.get(btn.locator)
      .scrollIntoView()
      .contains(btn.text)
      .should("not.be.disabled")
      .click();
  },

  expectedClick(btnExit, expected) {
    cy.get(btnExit.locator)
      .should("be.visible")
      .should("have.attr", "src", btnExit.src);

    cy.get(expected.locator).contains(expected.text).should("be.visible");
  },
};

export default utils;
