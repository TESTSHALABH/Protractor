let homepage = function(){
    
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let operator = element(by.model('operator'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };

    this.operator = function(operator){
        var select = element(by.model('operator'));
        select.$('[value="SUBTRACTION"]').click();    
    }

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        let output =  element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }


};

//using below line this homepage can be called by any other spec js file also....by import  
//like -- let homepage = require('../pages/homepage'); - we are doing in 'improved_calculatorCode.js file'
module.exports = new homepage();