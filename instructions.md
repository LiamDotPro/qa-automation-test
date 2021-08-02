Welcome to your assignment,

We've constructed a small mobile application using react native and we would like to you to write out some E2E tests using Detox (https://github.com/wix/Detox) This assignment requires you to setup detox inside the repository and also to curate some new tests that ensure the login is working as intended. Please clone or fork this repository and commit your solution alongside the app and instructions.

In case your not sure how to setup the app here's a link to setting up the dev environment before installing detox and writing your tests (https://reactnative.dev/docs/environment-setup)

Below we have listed some scenarios (Gherkin Syntax https://cucumber.io/docs/gherkin/reference/) that we would like to appear inside of the test suite, though if you would like to provide tests for other scenarios not listed here we would also like to see them.

    Feature: Login

    Scenario: User wants to login
    When entering a correct email and password
    Then the user is directed to the dashboard page
    
    Scenario: User wants to login
    When entering a wrong email and password
    Then the user is not directed to the dashboard page
    
---

    Feature: Dashboard Number

    Scenario: User wants to get the dashboard code
    When having successfully navigated to the dashboard page
    Then the user is able to verify the dashboard password shows '5901'

---

    Feature: Secure Password Input

    Scenario: User wants to enter their password
    When entering their password into the password field
    Then the input is obfuscated using circles
    

The above scenarios should be entirely possible without ever touching the code itself and only writing code directly into detox tests, if for whatever the app itself doesn't function as intended let us know.

Once your happy your test suite works and satisfies the requirements can you please email a link to the repository too liam@bitvavo.com.
