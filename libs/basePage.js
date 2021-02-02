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

export const findByName = async (ourDriver, ourName) => {
    try {
        await ourDriver.findElement(By.css('button')).click();
        await ourDriver.findElement(By.xpath('/html/body/div[2]/div/div/div/button')).click();
    } catch(error) {
        errorHandler (ourDriver, "Error with findingbyname: ", error);
    }
}

export const screenShot = async (ourDriver) => {
    try {
        let encodedString = await ourDriver.takeScreenshot();
        await fs.writeFileSync('./image.png', encodedString, 'base64');
    } catch (error) {
        errorHandler(ourDriver, "Error taking screenshot", error);
    }
}
const errorHandler = async (ourDriver, errorMessage, ourError) => {
    try {
       console.log (`${errorMessage} ${ourError}`)
       await screenShot(ourDriver);
       await ourDriver.quit();
    } catch(error) {
        errorHandler(ourDriver, "Error Handler Failure", error)
    }
    
}