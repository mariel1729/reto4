import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// cart.steps.ts

// checkout.steps.ts
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import ProductPage from "../../pages/ProductPage";

Given("que tengo productos en el carrito", () => {
  cy.visit("https://www.demoblaze.com/index.html");
  ProductPage.selectProduct("Samsung galaxy s6");
  ProductPage.addToCart();
  cy.on("window:alert", () => {}); // aceptar alerta
  CartPage.openCart();
});

When('hago clic en {string}', (accion: string) => {
  if (accion === "Place Order") {
    CartPage.placeOrder();
  }
});

When("completo el formulario con datos válidos", () => {
  CheckoutPage.fillForm(
    "Mariel",
    "Bolivia",
    "La Paz",
    "1234567890123456",
    "June",
    "2026"
  );
});

Then("debería visualizar el mensaje {string}", (mensaje: string) => {
  CheckoutPage.confirmPurchase();
  CheckoutPage.validateSuccessMessage(mensaje);
});