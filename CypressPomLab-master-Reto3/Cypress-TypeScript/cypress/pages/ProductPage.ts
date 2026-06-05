class ProductPage {
  selectProduct(productName: string): void {
    cy.get('.hrefch').contains(productName).click();
  }

  addToCart(): void {
    cy.get('a').contains('Add to cart').click();
  }

  confirmProductAdded(): void {
    cy.on('window:alert', (text) => {
      expect(text).to.eq('Product added');
    });
  }
}

export default new ProductPage();
