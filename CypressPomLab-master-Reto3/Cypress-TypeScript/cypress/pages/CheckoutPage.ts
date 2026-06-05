class CheckoutPage {
  fillForm(name: string, country: string, city: string, card: string, month: string, year: string): void {
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
  }

  confirmPurchase(): void {
    cy.contains('button', 'Purchase').click();
  }

  validateSuccessMessage(mensaje: string): void {
    cy.get('.sweet-alert h2').should('contain.text', mensaje);
  }
}
export default new CheckoutPage();
