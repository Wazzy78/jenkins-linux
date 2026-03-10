const {remote} = require('webdriverio');
const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.android.settings',
  'appium:appActivity': '.Settings',
};
const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  path: '/wd/hub',
  logLevel: 'info',
  capabilities,
};
async function runTest() {
  const driver = await remote(wdOpts);
  try {
    const appsItem = await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Apps"))');
    await appsItem.click();
    console.log('Apps bosildi!');
    await driver.pause(2000);
    
    // Apps sahifasi ochilganini tekshirish
    const appsList = await driver.$('//*[@resource-id="com.android.settings:id/apps_list"]');
    if (await appsList.isDisplayed()) {
      console.log('TEST PASSED: Apps sahifasi ochildi!');
    }
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}
runTest().catch(console.error);
