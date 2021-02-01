
const {openDriver, openPage, closeBrowser} = require ('./libs/basePage');

console.log ("openDriver: ", openDriver);
const {Builder, By, Key, util} = require('selenium-webdriver');
const driver = new Builder()
      .forBrowser("chrome")
      .build();

 async function example() {
  try {
    await driver.get("http://www.amazon.com");

    await driver.quit();
  } catch(error) {
    console.log (error);
  }
 }


 example();


 openDriver ("firefox");
 openPage("www.yahoo.co.uk");
 
//   let ourSearch = await driver.findElements(By.class("#nav-input"));
//   ourSearch.getAttributes('class')
//     .then (function(classes) {
//       console.log (classes);
//     });
//   //  console.log (ourSearch);
//   //  ourSearch.click().sendKeys("Toilet Seats", Key.RETURN);
//   //  await driver.findElements(By.class("nav-input")).click().sendKeys("Toilet Seats", Key.RETURN);
//   //  await driver.quit();
// })();

// example();
