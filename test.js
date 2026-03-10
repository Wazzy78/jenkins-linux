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
  path: '/wd/hub',  // ← shu qo'shildi
  logLevel: 'info',
  capabilities,
};
async function runTest() {
  const driver = await remote(wdOpts);
  try {
    // scroll qilib topish ← shu o'zgartirildi
    const appsItem = await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Apps"))');
    await appsItem.click();
    await driver.pause(1000);
    await driver.deleteSession(); // ← try ichiga ko'chirildi
  } catch(e) {
    await driver.deleteSession();
    throw e;
  }
}
runTest().catch(console.error);
