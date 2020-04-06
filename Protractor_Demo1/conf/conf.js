// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  //Multi capabilities - multiple browser at a time
 /* multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
*/


  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.

  //specs: ['../test/calculator.js'],
  specs: ['../test/improved_calculatorCode.js'],


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
