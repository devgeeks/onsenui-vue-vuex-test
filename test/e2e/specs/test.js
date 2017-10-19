// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
var sauce = require('../sauce');

module.exports = {
  tearDown: sauce,
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 20000)
      .assert.elementPresent('.search-toolbar')
      .assert.containsText('.search-toolbar .center', 'Search')
      .end();
  }
};
