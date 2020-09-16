exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  updateJob: false,
  specs: ['./tests/specs/single_test.js'],
  exclude: [],

  capabilities: [
    {
      name: 'single_appium_test',
      build: 'webdriver-browserstack',
      device: 'Google Pixel 3',
      browserName: 'android',
      app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>',
      'browserstack.debug': true,
    },
  ],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000,
  },
};
