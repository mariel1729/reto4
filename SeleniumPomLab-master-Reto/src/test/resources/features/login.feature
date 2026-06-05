Feature: Login de usuario
  Como usuario registrado
  Quiero iniciar sesión en la página Demoblaze
  Para acceder a mis funcionalidades personalizadas

  Scenario: Usuario inicia sesión correctamente
    Given que estoy en la página de login
    When ingreso usuario "123" y contraseña "123"
    Then debería visualizar el mensaje "Welcome 123"