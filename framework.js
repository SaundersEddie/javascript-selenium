import {openDriver, openPage, closeBrowser, findByName} from './libs/basePage.js';

// This will create ourDriver then use it to control the webpage
let ourDriver = await openDriver ("firefox");
await openPage(ourDriver, "http://www.cnn.com");
await findByName (ourDriver, "politics");
// await closeBrowser(ourDriver);

