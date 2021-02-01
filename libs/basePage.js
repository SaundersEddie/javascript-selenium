import {Builder, By} from 'selenium-webdriver';

export const openDriver = async (browserType) => {
    try {
        const driver = new Builder()
        .forBrowser(browserType)
        .build();
        return (driver);
    } catch (error) {
        console.log ("Error opening browser: ", error)
    }
}

export const openPage = async (driver, pageURL) => {
    try {
        console.log ("open page driver: ", driver)
        await driver.get(pageURL);
    } catch (error) {
        console.log ("Error opening page: ", error)
    }
}

export const closeBrowser = async () => {
    try {
        await driver.quit();
    } catch (error) {
        console.log ("Error closing browser: ", error)
    }
}

// module.exports = basePage;
