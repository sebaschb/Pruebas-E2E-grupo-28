Feature: Edit page

    Background:
        Given A web browser is at the ghost login page

    Scenario: Edit a title new page
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the page section
        When The user creates a new page whit tittle
        Then The page is successfully edited.

    Scenario: Edit a message new page
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the page section
        When The user creates a new page whit message
        Then The page is successfully edited.

    Scenario: Edit a url new page
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the page section
        When The user creates a new page whit url
        Then The page is successfully edited.
    
    Scenario: Edit a feature new page
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the page section
        When The user creates a new page change feature
        Then The page is successfully edited.