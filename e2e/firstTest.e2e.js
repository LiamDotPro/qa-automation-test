describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await element(by.id('email')).typeText('Tester@bitvavo.com');
    await element(by.id('password')).typeText('BitcoinMiner1905');
    await element(by.id('loginBtn')).tap();

    await expect(element(by.id('textMade'))).toBeVisible();
  });
});
