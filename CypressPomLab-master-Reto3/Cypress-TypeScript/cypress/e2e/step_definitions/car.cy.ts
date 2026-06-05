import ProductPage from "../../pages/ProductPage";

describe('Carrito de compras', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

  it('Usuario agrega un producto al carrito', () => {
    ProductPage.selectProduct('Samsung galaxy s6');
    ProductPage.addToCart();
    ProductPage.confirmProductAdded();
  });
});
