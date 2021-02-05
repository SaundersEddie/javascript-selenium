//  https://saunderseddie.github.io/testing-site/

import {openDriver, openPage, closeBrowser, screenShot, clickByClass, clickByXPath, clickByID, clickByName} from '../libs/basePage.js';

const ourDriver = await openDriver("firefox")
const ourTestPage = "https://saunderseddie.github.io/testing-site/"

await ourDriver.manage().window().maximize();

await openPage (ourDriver,ourTestPage);
await ourDriver.sleep(5000);

// await clickByXPath(ourDriver, "/html/body/ul/li[1]/a") - Works
// await clickByName(ourDriver, "myTestButtonName"); - Works
// await clickByID(ourDriver, "myTestButtonID"); - Works
// await clickByClass(ourDriver,"myTestButtonClass"); - Works

// await closeBrowser(ourDriver);
