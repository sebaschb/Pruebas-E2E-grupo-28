Feature: Editar tag

@user1 @web
Scenario: Editar el nombre del tag creado
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name "$name_1"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag "$$name_1"
  And I wait for 2 seconds
  And I edit the tag name "$name_2"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  Then I close my session
  And I wait for 2 seconds

@user2 @web
Scenario: Editar el slug del tag creado
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name "$name_3"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag "$$name_3"
  And I wait for 2 seconds
  And I edit the tag slug "$number_1"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  Then I close my session
  And I wait for 2 seconds

@user3 @web
Scenario: Editar la descripcion del tag creado
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name "$name_4"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag "$$name_4"
  And I wait for 2 seconds
  And I edit the tag description "$string_1"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  Then I close my session
  And I wait for 2 seconds

@user4 @web
Scenario: Editar color del tag creado
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name "$name_5"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag "$$name_5"
  And I wait for 2 seconds
  And I edit the tag color "$number_2"
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  Then I close my session
  And I wait for 2 seconds