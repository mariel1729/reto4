/**
 * Page Object: Home Page
 * URL: https://sauce-demo.myshopify.com/
 */
class HomePage {
  // Selectores
  get productCards() {
    return cy.get('.product-card, .grid-item, .product')
  }

  get cartLink() {
    return cy.get('a[href="/cart"]')
  }

  // Acciones
  visit() {
    cy.visit('https://sauce-demo.myshopify.com/')
  }

  clickProduct(productName) {
    cy.contains(productName).click()
  }
}

module.exports = new HomePage()
