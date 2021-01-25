const {Builder , By} = require ('selenium-webdriver');


const driver = new Builder()
    .forBrowser("chrome")
    .build();

// Section 3
function radioButtonForm() {
    try {
        driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        driver.findElement(By.css('#title'))
            .then 
            .sendKeys('Title that has at least twenty characters');
        // await driver.findElement(By.css('#description')).sendKeys('Description must also be at least twenty characters');
        // await driver.findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator')).click();
        // await driver.findElement(By.css('#submit')).click();
        // await driver.quit();
    } catch(error) {
        console.log ("error: ", error);
     }
} 

radioButtonForm();


// Section 2
// async function radioButtonForm() {
//     try {

//         await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
//         await driver.findElement(By.css('#title')).sendKeys('Title that has at least twenty characters');
//         await driver.findElement(By.css('#description')).sendKeys('Description must also be at least twenty characters');
//         await driver.findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator')).click();
//         await driver.findElement(By.css('#submit')).click();
//         // await driver.quit();
//     } catch(error) {
//         console.log ("error: ", error);
//      }
// } 

// radioButtonForm();

// Section 1
// async function simpleRegister() {
//     try {
//         await driver.get("https://rori4.github.io/selenium-practice");
//         await driver.findElement(By.name("email")).sendKeys("edwyn.saunders@outlook.com");
//         await driver.findElement(By.id("password")).sendKeys("12345");
//         await driver.findElement(By.name("submit")).click();
//         await driver.quit
//     } catch(error) {
//     console.log ("error: ", error);
//  }}

// simpleRegister();