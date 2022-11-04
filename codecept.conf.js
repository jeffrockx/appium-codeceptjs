const server = require('./server/server.js')

const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'ProjetoTeste',
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: 'C:/Users/eduar/Documents/FRAMEWORKS DE TESTES/APPIUM/ProjetoTeste/app-release.apk',
      desiredCapabilities: {
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        device: 'android_device',
        platformVersion: '9'
      }
    }
  },
  include: {
    "I": "./steps_file.js",
    "login_page": "./pages/login_page.js",
    "home_page": "./pages/home_page.js"
  },
  bootstrap: async () => {
    await server.start()
  },
  teardown: async () => {
    await server.stop()
  },
}