let homepage = require('../pages/homepage'); // importing the homepage.js file ---POM framework

describe('demo calculator tests', function () {

    it('Addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7');

        browser.sleep(2000)

    });

    it('Addition test 2', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('6');

        homepage.clickGo1(); // just try to fail by giving wrong function name.

        homepage.verifyResult('10');

        browser.sleep(2000)

    });

   

});