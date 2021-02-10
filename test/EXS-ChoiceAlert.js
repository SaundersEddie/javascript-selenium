// Simple demo of going to a page click a button and then accept the alert prompt.

// User Story:
// As a user I wish to open a website
// Then click the Alert link
// I will then accept the alert regardless of any text displayed

import {openDriver, 
    openPage, 
    closeBrowser,
    clickByXPath,
    acceptAlert,
    cancelAlert,
    clickByName } from '../libs/basePage.js';

const ourDriver = await openDriver("firefox")
const ourTestPage = "https://saunderseddie.github.io/testing-site/"

await ourDriver.manage().setTimeouts({implicit: 10000});

await openPage (ourDriver,ourTestPage);

await clickByXPath(ourDriver,"/html/body/ul/li[4]/a");
await acceptAlert(ourDriver);
await clickByName(ourDriver,"goHome");
await clickByXPath(ourDriver,"/html/body/ul/li[4]/a");
await cancelAlert(ourDriver);
await clickByName(ourDriver,"goHome");
await closeBrowser(ourDriver);
