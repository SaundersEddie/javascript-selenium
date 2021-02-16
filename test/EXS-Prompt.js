//  https://saunderseddie.github.io/testing-site/
// EXS 9th February 2021 
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
    clickByName, 
    typeTextAlert } from '../libs/basePage.js';

import assert from 'assert';

describe('Testing Mocha', function() {
    beforeEach (async function() {
        const ourDriver = await openDriver("firefox")
        const ourTestPage = "https://saunderseddie.github.io/testing-site/"
        await ourDriver.manage().setTimeouts({implicit: 10000});
    });

    afterEach(async function() {
        await closeBrowser(ourDriver);
    });

    describe('React to prompt', async function() {
        // it('Should return Testing', async function() {
            await openPage (ourDriver,ourTestPage);
            await clickByXPath(ourDriver,"/html/body/ul/li[5]/a");
            await typeTextAlert(ourDriver,"Testing Accept!");
            await acceptAlert(ourDriver);
            await closeBrowser(ourDriver);
        // });
    });
})

// const ourDriver = await openDriver("firefox")
// const ourTestPage = "https://saunderseddie.github.io/testing-site/"

// await ourDriver.manage().setTimeouts({implicit: 10000});

// await openPage (ourDriver,ourTestPage);
// await clickByXPath(ourDriver,"/html/body/ul/li[5]/a");
// await typeTextAlert(ourDriver,"Testing Accept!");
// await acceptAlert(ourDriver);
// await clickByName(ourDriver,"goHome");
// await closeBrowser(ourDriver);
