// WebDriverIO Configuration File Documentation
// http://webdriver.io/guide/testrunner/configurationfile.html

const defaultConfig = require('./default.conf');

const capabilities = [
  {
    browserName: 'Chrome',
    platform: 'local machine',
  },
];
if (!process.env.LOGGED_CAPABILITIES) {
  // eslint-disable-next-line no-console
  console.log(`Capabilities: ${JSON.stringify(capabilities, null, '\t')}`);
  process.env.LOGGED_CAPABILITIES = true;
}

const localConfig = {
  capabilities,
  maxInstances: 3,
  logLevel: 'error',
  services: ['selenium-standalone'],
  seleniumLogs: './context/seleniumLogs',
};

const config = Object.assign({}, defaultConfig, localConfig);

module.exports = { config };
