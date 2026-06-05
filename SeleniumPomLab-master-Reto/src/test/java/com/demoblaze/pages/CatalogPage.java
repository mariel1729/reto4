package com.demoblaze.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;

public class CatalogPage {
    private WebDriver driver;
    private WebDriverWait wait;

 // Localizador del producto Sony Vaio i5
    private By sonyVaioI5 = By.xpath("//a[@class='hrefch' and text()='Sony vaio i5']");

    public CatalogPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }
    
    public boolean isSonyVaioI5Displayed() {
        wait.until(ExpectedConditions.visibilityOfElementLocated(sonyVaioI5));
        return driver.findElement(sonyVaioI5).isDisplayed();
    }
}