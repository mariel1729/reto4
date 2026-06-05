Feature: Carrito de compras
  Scenario: Usuario agrega un producto al carrito
    Given que estoy en la página de productos
    When selecciono el producto "Samsung galaxy s6"
    And hago clic en el botón "Add to cart"
    Then debería visualizar un modal confirmando la adición