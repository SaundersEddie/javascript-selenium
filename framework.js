import {openDriver, openPage, closeBrowser} from './libs/basePage.js';

console.log (openDriver);
// console.log ("openDriver: ", openDriver);
// import {Builder, By, Key, util} = require('selenium-webdriver');

// import {Builder, By, Key} from 'selenium-webdriver';

// const driver = new Builder()
//       .forBrowser("chrome")
//       .build();

//  async function example() {
//   try {
//     await driver.get("http://www.amazon.com");

//     await driver.quit();
//   } catch(error) {
//     console.log (error);
//   }
//  }


//  example();


 let myDriverTest = await openDriver ("firefox");
//  console.log (myDriverTest);
 openPage(myDriverTest, "http://www.yahoo.co.uk");
 
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
