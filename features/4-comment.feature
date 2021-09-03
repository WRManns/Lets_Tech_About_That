Feature: Blog Comment functionality

    Scenario: Existing User has just signed up and would like to Comment on a post
        Given User is on the login page
        And User logs in with noshoes4life@gmail.com and Gloria123
        And User has navigated back to the homepage
        And Clicked the "Go to Post" button
        When User enters "My First Comment" into text area and clicks Submit Comment button
        Then User sees their comment added to the Comments section


    # Scenario: Another User has just signed up and would like to Comment on a post
    #     Given User is on the login page
    #     And User logs in with foobar@yahoo.com and barfoo1922
    #     And User has navigated back to the homepage
    #     And Clicked the "Go to Post" button
    #     When User enters "This website is bad and you should feel bad!" into text area and clicks Submit Comment button
    #     Then User sees their comment added to the Comments section
        