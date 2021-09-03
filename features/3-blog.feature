Feature: Blog post section functionality

    Scenario: Recently User has signed up and would like to create their first post
        Given User is on the login page
        And User logs in with noshoes4life@gmail.com and Gloria123
        When User enters "My Second Blog" into title, "It's been a really long night" into the body, and clicks submit
        Then User sees their "My Second Blog" on the left side of the screen
        And The the User decides to "delete" their first post


    #  Scenario: Second User has signed up and would like to create their first post
    #     Given User is on the login page
    #     And User logs in with foobar@yahoo.com and barfoo1922
    #     When User enters "Bloggy Bloggy Blog" into title, "Do you dare to compare stairs?" into the body, and clicks submit
    #     Then User sees their "Bloggy Bloggy Blog" on the left side of the screen
    #     And The the User decides to "delete" their first post