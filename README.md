# gulp-protractor-sample
Sample project for gulp and protractor

## Usage

Install gulp, gulp-protractor, gulp-webserver, and run-sequence.

```
npm install
```

Install AngularJS.

```
bower install
```

Update webdriver-manager (only first time). If you run on IE, add `--ie` option.

```
node node_modules/gulp-protractor/node_modules/protractor/bin/webdriver-manager update
```

Run gulp. You can set environment option (mac or windows).

```
gulp test:e2e --mac
```
