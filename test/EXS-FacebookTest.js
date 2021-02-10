import {Builder, By, until} from 'selenium-webdriver';

import {openDriver, 
    openPage, 
    closeBrowser,
    clickByXPath,
    acceptAlert,
    cancelAlert,
    clickByName, 
    clickByID,
    typeTextByID} from '../libs/basePage.js';


    const ourDriver = await openDriver("firefox")
    const ourTestPage = "https://saunderseddie.github.io/testing-site/"


await ourDriver.manage().setTimeouts({implicit: 10000});

await openPage (ourDriver,ourTestPage);
// await typeTextByID (ourDriver, "email", "");
// await typeTextByID (ourDriver, "pass", "");
// await clickByName (ourDriver, "login");
await ourDriver.findElement(By.linkText("Alert")).click();