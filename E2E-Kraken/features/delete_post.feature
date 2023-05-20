Feature: Eliminar post
@user1 @web
Scenario: Eliminar un post editado
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on posts module
  And I wait for 2 seconds
  And I go to new post form
  And I wait for 2 seconds
  And I edit the post content "$name_1" and "$string_1"
  And I wait for 2 seconds
  And I publish the post
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  And I check the post with title "$$name_1"
  And I wait for 2 seconds
  When I go to post "$$name_1"
  And I wait for 2 seconds
  And I click the post settings
  And I wait for 1 seconds
  And I click the delete button
  And I wait for 2 seconds
  Then I confirm the delete
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds

@user2 @web
Scenario: Eliminar un post guardado como draft
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on posts module
  And I wait for 2 seconds
  And I go to new post form
  And I wait for 2 seconds
  And I edit the post content "$name_2" and "$string_2"
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  And I check the post with title "$$name_2"
  And I wait for 2 seconds
  When I go to post "$$name_2"
  And I wait for 2 seconds
  And I click the post settings
  And I wait for 1 seconds
  And I click the delete button
  And I wait for 2 seconds
  Then I confirm the delete
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds
  
@user3 @web
Scenario: Eliminar el primer post de la lista de posts
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 10 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on posts module
  And I wait for 2 seconds
  And I click the first post on the list
  And I wait for 2 seconds
  And I click the post settings
  And I wait for 1 seconds
  And I click the delete button
  And I wait for 2 seconds
  Then I confirm the delete
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds