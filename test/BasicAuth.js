import { Key, until } from 'selenium-webdriver';
import {openDriver, openPage, closeBrowser, screenShot, clickByXPath, clickByCSS} from '../libs/basePage.js';

const ourDriver = await openDriver("chrome")
const ourTestPage = "http://the-internet.herokuapp.com/"
const ourUserName = "admin";
const ourPassword = "admin";
const ourBadUserName = "Bad User";
const ourBadPassword = "Bad Password";

const myAlert = async (myDriver, testTect) => {
    try {
        await ourDriver.wait(until.alertIsPresent());
        console.log ("Alert is present");
        let ourAlert = await ourDriver.switchTo().alert();
        await ourAlert.sendKeys("admin");
    } catch (error) {
        console.log ("Error with prompt: ", error)
    }

}


await openPage (ourDriver,ourTestPage);
await clickByXPath(ourDriver, "/html/body/div[2]/div/ul/li[3]/a");

let myAlertTest = await myAlert();