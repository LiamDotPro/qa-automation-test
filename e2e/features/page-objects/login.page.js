// Didn't want to pass these dependencies (detox)
// as params to the "class" or function 
// because it can increment its testability
// but here I'm not doing unit tests.
// I'm aware this reduces the chances to migrate
// easily to a different test framework like appium.
import { element, by } from 'detox';
import {login as ui} from '../ui-locators/locators';

/**
 * Function that acts as a page object as it contains actions
 * 
 * @param {string} email A string of an email
 * @param {string} password A string of a password
 * 
 **/
export const login = async (email, password) => {
	await element(by.id(ui.email)).typeText(email);
    await element(by.id(ui.password)).typeText(password);
    await element(by.id(ui.loginBtn)).tap();
}

/**
 * Allows to just type the password to not call for the 
 * different detox functions from the tests.
 * 
 * @param {string} password A string of a password
 * 
 * @return {promise} Object a Promise representing a native element
 * 
 **/
export const typePassword = async (password) => await element(by.id(ui.password)).typeText(password);

/**
 * To get the password input element from the login page
 * 
 * @return {promise} Object a Promise representing a native element
 * 
 **/
export const getPasswordInput = async () => await element(by.id(ui.password))