import { Then, Given, When } from '@cucumber/cucumber';
import { expect, element, by, waitFor } from 'detox';
import {generate} from '../utils/test-data';
import {login} from '../page-objects/login.page';
import {dashboard} from '../page-objects/dashboard.page';

When('entering {string} credentials', async function (isValid) {
    const valid = isValid === "valid";
    const {email, password} = generate.credentials(valid);
    await login(email, password);
});

Then('the user {string} directed to the dashboard page', async function (isRedirect) {
  const title = await dashboard.getTitle();
  if (isRedirect === "is") {
    await expect(title).toBeVisible();
  } else { // I don't like to use else statements, but a return; just looks weird here.
  await expect(title).toBeNotVisible();
  }
});