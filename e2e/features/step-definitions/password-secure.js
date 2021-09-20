import { Then, Given, When } from '@cucumber/cucumber';
import { expect, element, by, waitFor } from 'detox';
import {generate} from '../utils/test-data';
import {login, typePassword, getPasswordInput} from '../page-objects/login.page';

const text = "Hola mundo";
When('entering their password into the password field', async () => {
    await typePassword(text);
});

Then('the input is obfuscated using circles', async () => {
	const input = await getPasswordInput();
	const val = await input.getAttributes();
	await expect(val.value).toBe(text)
});