Feature: Delete post

    Background:
        Given A web browser is at the ghost login page

    Scenario: Successfully delete a post edited
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the post section
        When The user creates a new post
        When The user modifies the newly created post
        When The user delete a new post
        Then The post is delete successfully

    Scenario: E4 Successfully delete first post from the post list
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the post section
        When The user creates a new post
        When The user chooses the first post from the post list
        When The user deletes the post
        Then The post is delete successfully