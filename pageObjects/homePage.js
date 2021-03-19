console.log ("Inside pageobjects - homepage");

const {Builder, By, Key, until} = require ('selenium-webdriver');
var BasePage = require ('../pageobjects/basepage.js');
var webdriver = require ('selenium-webdriver');

console.log ("Our BasePAge: ", BasePage);

class HomePage extends BasePage{
    enter_serch(searchText){
        driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
        driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
     }
}

module.exports = HomePage;
