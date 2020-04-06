describe('Calculator demo test', function() {
    it('Addition test', function() {

      browser.get('http://juliemr.github.io/protractor-demo/');
  
      element(by.model('first')).sendKeys(2);
      
      //let firstNumber = element(by.model('first')).sendKeys(2);
      //expect(firstNumber.getAttribute('value')).toEqual('2');

      element(by.model('second')).sendKeys(3);

      element(by.css('[ng-click="doAddition()"]')).click();

     let result =  element(by.cssContainingText('.ng-binding','5'));

     //to verify output -- -see jasmin cheatsheet
     expect(result.getText()).toEqual('5');

     //by just typing ebmd -- it take below line auto ... just need to install protractor code snipet in vs 
        //element(by.model(''));
  
      browser.sleep(3000);
      
    });
});