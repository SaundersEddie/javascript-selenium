import {By} from 'selenium-webdriver';
import {openDriver, openPage, closeBrowser, screenShot, clickByXPath} from '../libs/basePage.js';

// Setup our Driver config and brower type

const ourDriver = await openDriver("firefox")
const ourTestPage = "http://the-internet.herokuapp.com/"

await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await clickByXPath(ourDriver, "/html/body/div[2]/div/ul/li[1]/a");
await closeBrowser(ourDriver);
