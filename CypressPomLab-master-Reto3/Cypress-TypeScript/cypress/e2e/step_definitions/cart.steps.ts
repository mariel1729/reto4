import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductPage from "../../pages/ProductPage";


Given("que estoy en la página de productos", () => {
  cy.visit("https://www.demoblaze.com/index.html");
});

When("selecciono el producto {string}", (producto: string) => {
  ProductPage.selectProduct(producto);
});

// 👇 Este es el step que faltaba
When('hago clic en el botón {string}', (boton: string) => {
  if (boton === "Add to cart") {
    ProductPage.addToCart();
  }
});

Then("debería visualizar un modal confirmando la adición", () => {
  ProductPage.confirmProductAdded();
});
