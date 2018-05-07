// WebDriverIO Configuration File Documentation
// http://webdriver.io/guide/testrunner/configurationfile.html
const envConfig = require('./env');


process.env.ENV = process.env.ENV || 'prod';
const env = process.env.ENV;
const spec = process.env.SPEC || '*';
const specExt = !spec.includes('.test.js') ? `${spec}.test.js` : spec;
const specs = ['./tests/dublicate.test.js'];
const addCustomCommands = require('../helperFunctions/addCustomCommand');

const { baseUrl } = envConfig[env];

const config = {

  services: ['selenium-standalone'],
  seleniumLogs: './context/seleniumLogs',
  baseUrl,
  specs,
  exclude: [],
  maxInstances: 1,
  capabilities: [{
    browserName: 'Chrome',
    platform: 'local machine',
  }],
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './context/screenshots/',
  waitforTimeout: 999999,
  connectionRetryTimeout: 999999,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'spec', 'mochawesome'],
  reporterOptions: {
    outputDir: './context/reports',
  },
  mochawesomeOpts: {
    includeScreenshots: true,
    screenshotUseRelativePath: true,
  },
  mochaOpts: { ui: 'bdd', timeout: '9999999' },
  before: () => {
    browser.windowHandleSize({ width: 960, height: 1200 });
    addCustomCommands();
  },
};

module.exports = { config };
