import {Builder, By} from 'selenium-webdriver';
import fs from 'fs';

export const openDriver = async (browserType) => {
    try {
        const driver = new Builder()
        .forBrowser(browserType)
        .build();
        return (driver);
    } catch (error) {
        errorHandler (driver, "Error opening browser: ", error)
    }
}

export const openPage = async (ourDriver, pageURL) => {
    try {
        await ourDriver.get(pageURL);
    } catch (error) {
        errorHandler (ourDriver, "Error opening page: ", error)
    }
}

export const closeBrowser = async (ourDriver) => {
    try {
        await ourDriver.quit();
    } catch (error) {
        errorHandler (ourDriver, "Error closing browser: ", error)
    }
}

export const clickByXPath = async (ourDriver, ourXPath) => {
    try {
        await ourDriver.findElement(By.xpath(ourXPath)).click();
    } catch (error) {
        errorHandler (ourDriver, "Error locating XPath: ", error)
    }
}

export const clickByName = async (ourDriver, ourName) => {
    try {
        await ourDriver.findElement(By.name(ourName)).click();
    } catch(error) {
        await errorHandler (ourDriver, "Error with findingbyname: ", error);
    }
}

export const clickByCSS = async (ourDriver, ourElement) => {
    try {
        await ourDriver.findElement(By.css(ourElement)).click();
    } catch(error) {
        await errorHandler(ourDriver, "Error with clicking by CSS Element: ", error);
    }
}

export const screenShot = async (ourDriver) => {
    try {
        let encodedString = await ourDriver.takeScreenshot();
        let ourTime = new Date();
        let ourFileName = `${ourTime.getMonth()+1}-${ourTime.getDate()}-${ourTime.getFullYear()}-${ourTime.getHours()}${ourTime.getMinutes()}${ourTime.getSeconds()}`;
        await fs.writeFileSync(`screenshot-${ourFileName}.png`, encodedString, 'base64');
    } catch (error) {
        await errorHandler(ourDriver, "Error taking screenshot", error);
    }
}
const errorHandler = async (ourDriver, errorMessage, ourError) => {
    try {
       console.log (`${errorMessage} ${ourError}`)
    //    await screenShot(ourDriver);
       await ourDriver.quit();
    } catch(error) {
        errorHandler(ourDriver, "Error Handler Failure", error)
    }
    
}