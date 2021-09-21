Feature: Login

Scenario: User wants to login with valid credentials
When entering "valid" credentials
Then the user "is" directed to the dashboard page

Scenario: User wants to login with invalid credentials
When entering "invalid" credentials
Then the user "isn't" directed to the dashboard page
