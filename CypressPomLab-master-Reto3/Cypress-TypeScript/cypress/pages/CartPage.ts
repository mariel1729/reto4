class CartPage {
  private cartLink = "a[href='cart.html']";

  openCart(): void {
    cy.get(this.cartLink).click();
  }

  placeOrder(): void {
    cy.contains('button', 'Place Order').click();
  }

  validateProductInCart(productName: string): void {
    cy.contains('td', productName).should('be.visible');
  }
}
export default new CartPage();