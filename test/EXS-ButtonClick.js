//  https://saunderseddie.github.io/testing-site/
// EXS 9th February 2021 
// Simple demo of going to a page click a button, then return, and close browser
// The sleeps are in for slowing down the process only so we can see whats happening, final version will utilize
// wait functionality

// User Story:
// As a user I wish to open a website
// Then click the Button Click link
// Then click the Click Me button
// And verify "My button has been clicked!!" is displayed

import {openDriver, openPage, closeBrowser, screenShot, clickByClass, clickByXPath, clickByID, clickByName, getTextByID} from '../libs/basePage.js';

const ourDriver = await openDriver("firefox")
const ourTestPage = "https://saunderseddie.github.io/testing-site/"

// await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await ourDriver.sleep(3000);
await clickByClass(ourDriver,"myTestButtonClass");
await ourDriver.sleep(3000);
await clickByID(ourDriver, "id-myBtn");
await ourDriver.sleep(3000);
await getTextByID(ourDriver, "myText", "My button has been clicked");
await clickByName(ourDriver,"goHome");
await ourDriver.sleep(3000);
// await closeBrowser(ourDriver);