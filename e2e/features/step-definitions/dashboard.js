import { Then, Given, When } from '@cucumber/cucumber';
import { expect, element, by, waitFor } from 'detox';
import {login} from '../page-objects/login.page';
import {dashboard} from '../page-objects/dashboard.page';
import {generate} from '../utils/test-data';

When('having successfully navigated to the dashboard page', async () => {
    const {email, password} = generate.credentials(true);
    await login(email, password);
});

Then('the user is able to verify the dashboard password shows {int}', async (number) => {
    const randomText = await dashboard.getBody();
    // Here I'm asserting against a converted number, I expect
    // the number from the feature file but it can be
    // turned into a string to not parse it.
    await expect(randomText).toHaveText(String(number));
});