Feature: Sign Up

  Scenario: As a user, I can sign up with a username, email, and password

    Given User is on the signup page
    When They submit a unique AgadorSparticus and noshoes4life@gmail.com and Gloria123
    Then User enters "Let's see if this will work" into title, "Hey look! i made a post!!" into the body, and clicks submit

  # Scenario: A second User wants to sign up with a username, email, and password
  #   Given User is on the signup page
  #   When They submit a unique AgamemnonJones and foobar@yahoo.com  and barfoo1922
  #   Then User enters "did this one work too" into title, "stuff and thing and things and stuff and things and stuff" into the body, and clicks submit