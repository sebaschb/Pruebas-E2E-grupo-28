Feature: edit post

    Background:
        Given A web browser is at the ghost login page

    Scenario: Successfully Edit a New Post
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the post section
        When The user creates a new post
        When The user modifies the newly created post
        Then The post is successfully edited.

    Scenario: Successfully Edit a Post
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the post section
        When The user modifies the newly created post
        Then The post is successfully edited.

    Scenario: Successfully Edit a Post canceled
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the post section
        When The user canceled modifies post
        Then The post not changed

    Scenario: Successfully Edit a post more than once
        When A user enters the username, the password, and clicks on the login button
        When The user navigates to the post section
        When The user modifies the newly created post
        When The user modifies the newly created post
        Then The post is successfully edited.