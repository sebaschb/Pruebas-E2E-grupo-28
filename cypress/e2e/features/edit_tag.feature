Feature: Editar tag

  Background:
    Given A web browser is at the ghost login page

  Scenario: E1 Successfully edit the name of created tag.
    When A user enters the username, the password, and clicks on the login button
    When The user navigates to the tag section
    When The user creates a new tag
    When The user modifies the name of the created tag
    Then The user delete the tag created and name edited.

  Scenario: E2 Successfully edit the slug of created tag.
    When A user enters the username, the password, and clicks on the login button
    When The user navigates to the tag section
    When The user creates a new tag
    When The user modifies the slug of the created tag
    Then The user delete the tag created.

  Scenario: E3 Successfully edit the description of created tag.
    When A user enters the username, the password, and clicks on the login button
    When The user navigates to the tag section
    When The user creates a new tag
    When The user modifies the description of the created tag
    Then The user delete the tag created.

  Scenario: E4 Successfully edit the color of created tag.
    When A user enters the username, the password, and clicks on the login button
    When The user navigates to the tag section
    When The user creates a new tag
    When The user modifies the color of the created tag
    Then The user delete the tag created.