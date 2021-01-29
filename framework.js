const {Builder, By, Key, util} = require('selenium-webdriver');

//var webdriver = require ('selenium-webdriver'),
//  By=webdriver.By,
//  until=webdriver.until;


//  var driver=new webdriver.Builder().forBrowser('firefox').build();
//  driver.get ('http://www.google.com').then( 
//    driver.sleep (10000));
  //   driver.quit();
  // )

 (async function example() {
   let driver=await new Builder().forBrowser("chrome").build();
   await driver.get("http://www.amazon.com");
   await driver.findElements(By.class("nav-search-field")).sendKeys("Toilet Seats", Key.RETURN);
  //  await driver.quit();
})();

// example();