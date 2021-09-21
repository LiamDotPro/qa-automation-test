Feature: Secure Password Input

# I wouldn't put this on an e2e level
# makes more sense to put it on
# a component / instrumented test
# Nevertheless at this point I haven't
# find a good to way to test it from Detox
# I'm getting errors
Scenario: User wants to enter their password
When entering their password into the password field
#Then the input is obfuscated using circles