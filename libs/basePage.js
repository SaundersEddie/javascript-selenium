import {Builder, By} from 'selenium-webdriver';

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
        // /html/body/div[6]/div/div/header/div/div[1]/div/div[2]/nav/ul/li[3]/a
        await ourDriver.findElement(By.xpath('/html/body/div[6]/div/div/header/div/div[1]/div/div[2]/nav/ul/li[3]/a')).click();
    
    } catch(error) {
        errorHandler (ourDriver, "Error with findingbyname: ", error);
    }
}


const errorHandler = async (ourDriver, errorMessage, ourError) => {
    try {
       console.log (`${errorMessage} ${ourError}`)
       await ourDriver.quit();
    } catch(error) {
        errorHandler(ourDriver, "Error Handler Failure", error)
    }
    
}