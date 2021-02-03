import {openDriver, openPage, closeBrowser, screenShot, clickByXPath} from '../libs/basePage.js';

const ourDriver = await openDriver("firefox")
const ourTestPage = "http://the-internet.herokuapp.com/"

await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await clickByXPath(ourDriver, "/html/body/div[2]/div/ul/li[1]/a");
await closeBrowser(ourDriver);
