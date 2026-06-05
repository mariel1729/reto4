import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ProductPage from "../../pages/ProductPage";

describe('Proceso de compra', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
    // Precondición: agregar producto al carrito
    ProductPage.selectProduct('Samsung galaxy s6');
    ProductPage.addToCart();
    cy.on('window:alert', () => {}); // aceptar alerta
    CartPage.openCart();
  });

  it('Usuario completa la compra', () => {
    CartPage.placeOrder();
    CheckoutPage.fillForm('Mariel', 'Bolivia', 'La Paz', '1234567890123456', 'June', '2026');
    CheckoutPage.confirmPurchase();
    CheckoutPage.validateSuccessMessage('Thank you for your purchase!');
  });
});
