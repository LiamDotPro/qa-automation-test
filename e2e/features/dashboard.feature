Feature: Dashboard Number

# This could be tested on the login feature as we're 
# already testing the fact the user is logged.
# if there's a need to be more specific on what
# to test is where we can decide easily to increse
# the coverage through these tests and validate
# specific elements like this one here.
Scenario: User wants to get the dashboard code
When having successfully navigated to the dashboard page
Then the user is able to verify the dashboard password shows 5901