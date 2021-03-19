console.log ("Inside homepage");

var home = require ('../pageobjects/homepage');

console.log ("inside homepage test: ", home);

describe('This is the desribe block', function(){
    this.timeout(50000);
    beforeEach(function(){
        // before each test do this
    });

    afterEach(function(){
        // After each test is completed do this
    });

    it('Test', function(){

        var baseurl = "https://www.google.com";
        home.go_to_url(baseurl);
        home.enter_search('QA Underground');
    });

})
