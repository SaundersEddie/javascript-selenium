//  https://saunderseddie.github.io/testing-site/
// EXS 9th February 2021 
// Simple demo of going to a page click a button, fill out a form then click submit before going back home

// User Story:
// As a user I wish to open a website
// Then click the Fill Form link
// Then fill out the name fields
// Then select the tiger radio button
// And Select I have a Dog checkbox.
// Then click the submit button
// Verify an alert appears with the message "Thanks for submitting the info."

import {openDriver, 
        openPage, 
        closeBrowser, 
        clickByClass, 
        clickByXPath, 
        clickByID, 
        clickByName, 
        typeTextByID,
        typeTextByClass,
        acceptAlert,
        getAlertText} from '../libs/basePage.js';

const ourDriver = await openDriver("firefox")
const ourTestPage = "https://saunderseddie.github.io/testing-site/"

await ourDriver.manage().setTimeouts({implicit: 10000});
// await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await clickByXPath(ourDriver,"/html/body/ul/li[2]/a");
await typeTextByID(ourDriver,"fname","Test");
await typeTextByClass (ourDriver,"lname","Test LastName");
await clickByID(ourDriver, "tiger");
await clickByID(ourDriver, "animal1");
await clickByName(ourDriver, "animal2");
await clickByXPath(ourDriver, '/html/body/form/input[9]');
let myAlertText = await getAlertText(ourDriver, "Thanks for submitting the info");
await acceptAlert(ourDriver);
await clickByName(ourDriver,"goHome");
await closeBrowser(ourDriver);