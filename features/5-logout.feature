Feature: Logging out

  Scenario: As a user, I want to be able to log out of my profile

    Given User is on the login page
    And  User logs in with noshoes4life@gmail.com and Gloria123
    When I navigate to the homepage with the homepage button
    Then I click the logout button
    And I am no longer logged in
    

  #  Scenario: Another User wants to be able to log out of my profile

  #   Given User is on the login page
  #   And  User logs in with foobar@yahoo.com and barfoo1922
  #   When I navigate to the homepage with the homepage button
  #   Then I click the logout button
  #   And I am no longer logged in