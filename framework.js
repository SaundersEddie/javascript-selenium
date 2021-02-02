import {openDriver, openPage, closeBrowser, findByName} from './libs/basePage.js';

// This will create ourDriver then use it to control the webpage
let ourDriver = await openDriver ("firefox");
await openPage(ourDriver, "http://the-internet.herokuapp.com/add_remove_elements/");
await findByName (ourDriver, "politics");
// await closeBrowser(ourDriver);

