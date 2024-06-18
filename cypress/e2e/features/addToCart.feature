Feature: Add to Cart

As a user
I want to search for the product and add it to the cart

Background: User logged into the application
    Given logged into the application

Scenario: Verify user is able to register in the application
    When user searched for the product 
    And add the product to the cart
    Then verify successful message is displayed