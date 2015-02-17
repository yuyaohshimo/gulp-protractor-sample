exports.config = {
  seleniumServerJar: '../../node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};