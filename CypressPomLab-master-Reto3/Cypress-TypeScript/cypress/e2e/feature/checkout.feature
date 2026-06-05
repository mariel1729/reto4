Feature: Proceso de compra
  Scenario: Usuario completa la compra
    Given que tengo productos en el carrito
    When hago clic en "Place Order"
    And completo el formulario con datos válidos
    Then debería visualizar el mensaje "Thank you for your purchase!"