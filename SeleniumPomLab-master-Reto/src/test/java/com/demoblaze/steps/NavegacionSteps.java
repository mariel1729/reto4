package com.demoblaze.steps;

import com.demoblaze.pages.HomePage;
import com.demoblaze.pages.CatalogPage;
import io.cucumber.java.en.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class NavegacionSteps {
    private WebDriver driver;
    private HomePage homePage;
    private CatalogPage catalogPage;

    @Given("que estoy en la página principal de Demoblaze")
    public void abrirPaginaPrincipal() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);

        driver.manage().window().maximize();
        driver.get("https://www.demoblaze.com/index.html");

        homePage = new HomePage(driver);
        catalogPage = new CatalogPage(driver);
    }

    @When("hago clic en la categoría {string}")
    public void clicCategoria(String categoria) {
        if (categoria.equals("Laptops")) {
            homePage.clickLaptopsCategory();
        }
    }

    @Then("debería visualizar el producto {string}")
    public void verificarProducto(String productoEsperado) {
        if (productoEsperado.equals("Sony vaio i5")) {
            assert catalogPage.isSonyVaioI5Displayed();
        }
        driver.quit();
    }
}