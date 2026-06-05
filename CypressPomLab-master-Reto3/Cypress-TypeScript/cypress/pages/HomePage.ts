class HomePage {
  private welcomeMessage = '#nameofuser';

  clickLaptopsCategory(): void {
    cy.contains('Laptops').click();
  }

  getWelcomeMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.welcomeMessage);
  }
}

export default new HomePage();
