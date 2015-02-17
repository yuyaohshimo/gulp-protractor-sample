describe('gulp-protractor-sample', function() {

  beforeEach(function() {
    browser.get(browser.baseUrl);
  });

  it('myName is John', function() {
    expect($('.me').getText()).toBe('John');
  });

  it('yourName is Aki', function() {
    expect($('.you').getText()).toBe('Aki');
  });

});