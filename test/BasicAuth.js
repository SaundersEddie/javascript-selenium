import { Key, until } from 'selenium-webdriver';
import {openDriver, openPage, closeBrowser, screenShot, clickByXPath, clickByCSS} from '../libs/basePage.js';

const ourDriver = await openDriver("firefox")
const ourTestPage = "http://the-internet.herokuapp.com/"
const ourUserName = "admin";
const ourPassword = "admin";
const ourBadUserName = "Bad User";
const ourBadPassword = "Bad Password";

// await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await clickByXPath(ourDriver, "/html/body/div[2]/div/ul/li[3]/a");
await ourDriver.sleep(10000);
// await ourDriver.wait(until.alertIsPresent());
let ourAlert = await ourDriver.switchTo().alert();
console.log (ourAlert.getText());

await ourDriver.sendKeys("admin");

// Now we have a pop up
// await ourDriver.wait(until.alertIsPresent().sendKeys("admin", Key.TAB, "admin"));
// await ourDriver.switchTo().alert().sendKeys(ourUserName + Key.TAB + ourPassword );
// await closeBrowser(ourDriver);