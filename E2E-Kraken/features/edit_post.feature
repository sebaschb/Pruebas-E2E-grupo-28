Feature: edit post
@user1 @web
Scenario: Editar un post nuevo
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
  And I edit the post title "$name_2"
  And I publish the post
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  Then I check the post with title "$$name_2"
  And I wait for 2 seconds

@user2 @web
Scenario: Editar un post ya existente
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
  And I click the first post on the list
  And I wait for 2 seconds
  And I edit the post title "$name_8"
  And I wait for 2 seconds
  And I publish the post
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  Then I check the post with title "$$name_8"
  And I wait for 2 seconds

@user3 @web
Scenario: Cancelar la edición de un post
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
  And I click the first post on the list
  And I wait for 2 seconds
  And I edit the post title "$name_4"
  And I wait for 2 seconds
  And I click on posts module
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  Then I check the post title existance "$$name_4"
  And I wait for 2 seconds

@user4 @web
Scenario: Editar un post múltiples veces
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
  And I edit the post content "$name_5" and "$string_2"
  And I wait for 2 seconds
  And I publish the post
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  And I check the post with title "$$name_5"
  And I wait for 2 seconds
  And I go to post "$$name_5"
  And I wait for 2 seconds
  And I edit the post title "$name_6"
  And I publish the post
  
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  And I check the post with title "$$name_6"
  And I wait for 2 seconds
  And I go to post "$$name_6"
  And I wait for 2 seconds
  And I edit the post title "$name_7"
  And I publish the post

  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/posts"
  And I wait for 2 seconds
  Then I check the post with title "$$name_7"
  And I wait for 2 seconds