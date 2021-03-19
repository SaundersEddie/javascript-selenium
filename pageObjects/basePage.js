var webdriver = require ('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }

    go_to_url(theURL){
        driver.get(theURL);
    }

    close_browser() {
        driver.close();
    }
}

module.exports = BasePage;
