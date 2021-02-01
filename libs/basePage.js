const {Builder, By, Key, util} = require('selenium-webdriver');

async function openDriver(browserType) {
    try {
        const driver = new Builder()
        .forBrowser(browserType)
        .build();
    } catch (error) {
        console.log ("Error opening browser: ", error)
    }
}

async function openPage(pageURL) {
    try {
        await driver.get("http://www.amazon.com");
    } catch (error) {
        console.log ("Error opening page: ", error)
    }
}

async function closeBrower() {
    try {
        await driver.quit();
    } catch (error) {
        console.log ("Error closing browser: ", error)
    }
}

module.exports = basePage;
