const {Builder, By, Key, until} = require ('selenium-webdriver');
var BasePage = require ('../pageObjects/basePage');
var webdriver = require ('selenium-webdriver');

class HomePage extends BasePage{
    enter_search(searchText){
        driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
        // driver.quit();
     }
}

module.exports = new HomePage();
