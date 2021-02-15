import {Builder, By, until} from 'selenium-webdriver';
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

export const clickByName = async (ourDriver, ourName = "") => {
    try {
        // if (ourName === "") {throw ("No text in ourName")};
        checkParams (ourDriver, ourName);
        await ourDriver.findElement(By.name(ourName)).click();
    } catch(error) {
        await errorHandler (ourDriver, "Error with locating requested name: ", error);
    }
}

export const clickByID = async (ourDriver, ourID) => {
    try {
        await ourDriver.findElement(By.id(ourID)).click();
    } catch(error) {
        await errorHandler (ourDriver, "Error with locating requested ID: ", error);
    }
}

export const clickByCSS = async (ourDriver, ourElement) => {
    try {
        
        await ourDriver.findElement(By.css(ourElement)).click();
    } catch(error) {
        await errorHandler(ourDriver, "Error with clicking by CSS Element: ", error);
    }
}

export const clickByClass = async (ourDriver, ourClass) => {
    try {
        await ourDriver.findElement(By.className(ourClass)).click();
    } catch(error) {
        await errorHandler(ourDriver, "Error with clicking by Class: ", error);
    }
}

export const getTextByID = async (ourDriver, ourElement, ourText) => {
    try {
        let ourTextTest = await ourDriver.findElement(By.id(ourElement)).getText();
        if (ourText !== ourTextTest) return ("Failed");
        return ("Found");
    } catch (error) {
        await screenShot(ourDriver);
        await errorHandler(ourDriver, "Error finding text by ID: ", error);
    }
}

export const typeTextByID = async (ourDriver, ourID, ourText) => {
    try {
        await ourDriver.findElement(By.id(ourID)).sendKeys(ourText);
    } catch (error) {
        await errorHandler(ourDriver, "Error typing text: ", error);
    }
}

export const typeTextByClass = async (ourDriver, ourClass, ourText) => {
    try {
        await ourDriver.findElement(By.className(ourClass)).sendKeys(ourText);
    } catch (error) {
        await errorHandler(ourDriver, "Error typing text: ", error);
    }
}

export const getAlertText = async (ourDriver, ourText) => {
    try {
        await ourDriver.wait(until.alertIsPresent());
        let ourAlertText = await ourDriver.switchTo().alert().getText();
        if (ourText !== ourAlertText) return ("Failed");
        return ("Found");
    } catch (error) {
        await errorHandler(ourDriver, "Error getting alert text: ", error);
    }
  
}

export const typeTextAlert = async (ourDriver, ourText) => {
    try {
        await ourDriver.wait(until.alertIsPresent());
        await ourDriver.switchTo().alert().sendKeys(ourText);
    } catch (error) {
        await errorHandler(ourDriver, "Error typing prompt text: ", error);
    }
}

export const cancelAlert = async (ourDriver) => {
    try {
        await ourDriver.switchTo().alert().dismiss();
    } catch (error) {
        await errorHandler(ourDriver, "Cannot dismiss prompt: ", error);
    }
}

export const acceptAlert = async (ourDriver) => {
    try {
        await ourDriver.switchTo().alert().accept();
    } catch (error) {
        await errorHandler(ourDriver, "Error with alert: ", error);
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

// Error Handling Code

const errorHandler = async (ourDriver, errorMessage, ourError) => {
    try {
       console.log (`${errorMessage} ${ourError}`)
    //    await screenShot(ourDriver);
       await ourDriver.quit();
       process.exit(1);
    } catch(error) {
        errorHandler(ourDriver, "Error Handler Failure", error)
    }
}

const checkParams = async (ourDriver, ourText = "") => {
    try {
        if (ourText === "") {
            console.log ("Did not pass in correct parameters");
            await ourDriver.quit();
            process.exit(1);
        }
    } catch (error) {
        console.log ("Error in checking PArams: ", error);
    }
}
