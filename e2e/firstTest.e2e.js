// eslint-disable-next-line import/no-extraneous-dependencies
import { device, element, by, waitFor, expect } from 'detox';
import { describe, beforeAll, beforeEach, it } from 'jest-circus';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.text('Universal React with Expo')))
      .toBeVisible()
      .withTimeout(4000);

    await expect(element(by.text('Hello world'))).toBeVisible();
  });
});
