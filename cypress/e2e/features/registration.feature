Feature: User registration

As a user
I want to be able to Register the user
So that I can able to login to the application

Scenario: Verify user is able to register in the application
    Given user registration page is opened
    When user entered the form details and click on continue
    Then user is registered in the application 