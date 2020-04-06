describe('Calculator demo test', function() {
   
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var result = element(by.binding('latest'));
    
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });


    it("Getting title", function(){

        expect(browser.getTitle()).toEqual('Super Calculator');
        
        //just try to fail this test -- 'Super Calculator1'
        //expect(browser.getTitle()).toEqual('Super Calculator1'); 
    });

    it('Addition test to add 2 and 3', function() {
        
        firstNumber.sendKeys(3);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(result.getText()).toEqual('5');
        
         browser.sleep(3000);
    });

    it('Addition test to add 6 and 50', function() {
        
        firstNumber.sendKeys(6);
        secondNumber.sendKeys(50);
        goButton.click();
        expect(result.getText()).toEqual('56');

        browser.sleep(3000);
    });

    it('should read the value from an input', function() {
        firstNumber.sendKeys(1);
        expect(firstNumber.getAttribute('value')).toEqual('1');
    });
});