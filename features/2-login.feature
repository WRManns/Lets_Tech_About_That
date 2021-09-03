Feature: Logging In

  Scenario: As a user, I can log into the secure area

    Given User is on the login page
    When User logs in with noshoes4life@gmail.com and Gloria123
    Then dashboard page should load

  # Scenario: Second user can log into the secure area
  #   Given User is on the login page
  #   When User logs in with foobar@yahoo.com and barfoo1922
  #   Then dashboard page should load

    

