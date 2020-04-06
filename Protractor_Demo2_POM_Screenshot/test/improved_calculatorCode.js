let homepage = require('../pages/homepage'); // importing the homepage.js file ---POM framework

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        

        homepage.clickGo();

        homepage.verifyResult('7');

        browser.sleep(2000)

    });

    it('subtraction test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.operator('-');

        //homepage.clickGo1(); // just try to fail by giving wrong function name.
        homepage.clickGo(); 

        homepage.verifyResult('1');

        browser.sleep(2000)

    });

   

});