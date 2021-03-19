var homePage = require ('../pageObjects/homePage');

describe('This is the desribe block', function(){
    this.timeout(50000);
    beforeEach(function(){
        // before each test do this
        console.log ("beforeEach")
    });

    afterEach(function(){
        // After each test is completed do this
    });

    it('Test', function(){
        var baseurl = "https://www.google.com";
        homePage.go_to_url(baseurl);
        homePage.enter_search('QA Underground');
    });
})
