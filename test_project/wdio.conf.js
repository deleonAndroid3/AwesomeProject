exports.config = {
  user: 'johncarlodeleon1',
  key: 'EPnWvRvF8sxcKEC9xpat',

  updateJob: false,
  specs: ['./test/specs/*.js'],
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
  services: [
    [
      'browserstack',
      {
        browserstackLocal: true,
      },
    ],
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
