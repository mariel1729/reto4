Feature: Navegación por categorías
  Como usuario de Demoblaze
  Quiero navegar por las categorías de productos
  Para visualizar los artículos disponibles

  Scenario: Usuario navega a la categoría Laptops
    Given que estoy en la página principal de Demoblaze
    When hago clic en la categoría "Laptops"
    Then debería visualizar el producto "Sony vaio i5"