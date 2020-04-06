
/*
* Start - Adding below line - to take screenshot - Protractor screenshot reporter for Jasmine2
*/
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

/*
* End - Adding below line - to take screenshot - Protractor screenshot reporter for Jasmine2
*/

// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.

   specs: ['../test/improved_calculatorCode.js'],


  // Options to be passed to Jasmine. 
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

    // Setup the report before any tests start - Protractor screenshot reporter for Jasmine2
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },
  
    // Assign the test reporter to each running instance - Protractor screenshot reporter for Jasmine2
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
    },
  
    // Close the report after all tests finish - Protractor screenshot reporter for Jasmine2
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    }
};
