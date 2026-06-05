package com.demoblaze.steps;

import com.demoblaze.pages.HomePage;
import com.demoblaze.pages.LoginPage;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginSteps {
    private WebDriver driver;
    private HomePage homePage;
    private LoginPage loginPage;

    @Given("que estoy en la página de login")
    public void abrirPaginaLogin() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);

        driver.manage().window().maximize();
        driver.get("https://www.demoblaze.com/index.html");

        loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
    }

    @When("ingreso usuario {string} y contraseña {string}")
    public void ingresoCredenciales(String usuario, String clave) {
        // abrir modal antes de escribir
        loginPage.openLoginModal();
        loginPage.login(usuario, clave);
    }

    @Then("debería visualizar el mensaje {string}")
    public void verificarMensajeBienvenida(String mensajeEsperado) {
        String mensaje = homePage.getWelcomeMessage();
        assert mensaje.equals(mensajeEsperado);
        driver.quit();
    }
}
