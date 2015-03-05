exports.config = {
  seleniumServerJar: '../../node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

  seleniumArgs: ['-Dwebdriver.ie.driver=./node_modules/gulp-protractor/node_modules/protractor/selenium/IEDriverServer.exe'],

  multiCapabilities: [
    {
      'platform': 'WINDOWS',
      'browserName': 'chrome'
    }, {
      'platform': 'WINDOWS',
      'browserName': 'internet explorer'
    }
  ],

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
