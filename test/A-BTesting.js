import {By} from 'selenium-webdriver';
import {openDriver, openPage, closeBrowser, screenShot} from '../libs/basePage.js';

// Setup our Driver config and brower type

const ourDriver = await openDriver("firefox")
const ourTestPage = "http://the-internet.herokuapp.com/"

await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await screenShot(ourDriver);
// #content > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)
// await ourDriver.findElement(By.css('#content > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)'))
// await closeBrowser(ourDriver);