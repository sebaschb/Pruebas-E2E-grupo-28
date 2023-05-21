Feature: Editar pagina

@user1 @web
Scenario: Editar el titulo de una página creada
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "<NEW_PAGE_TITLE>" "<NEW_PAGE_CONTENT>"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 10 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  When I go to page "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  And I edit the title "<EDITED_PAGE_TITLE>"
  And I publish the page
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "<EDITED_PAGE_TITLE>"
  And I wait for 2 seconds

@user2 @web
Scenario: Editar la descripción de una página creada
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "<NEW_PAGE_TITLE>" "<NEW_PAGE_CONTENT>"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  When I go to page "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  And I edit the description "<EDITED_PAGE_TITLE>"
  And I publish the page
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "<EDITED_PAGE_TITLE>"
  And I wait for 2 seconds

@user3 @web
Scenario: Editar el url de una pagina creada
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "<NEW_PAGE_TITLE>" "<NEW_PAGE_CONTENT>"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "new page url"
  And I wait for 2 seconds
  When I go to page "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  And I click the settings page
  And I wait for 2 seconds
  And I edit the page url "<EDITED_PAGE_TITLE>"
  And I wait for 5 seconds
  And I click the settings page
  And I wait for 5 seconds
  And I publish the page
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "<EDITED_PAGE_TITLE>"

@user4 @web
Scenario: Editar una pagina creada y hacerla featured
  Given I navigate to page "http://localhost:3002/ghost/#/signin"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I sign in
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "<NEW_PAGE_TITLE>" "<NEW_PAGE_CONTENT>"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  When I go to page "<NEW_PAGE_TITLE>"
  And I wait for 2 seconds
  And I click the settings page
  And I wait for 2 seconds
  And I make the page featured
  And I wait for 5 seconds
  And I click the settings page
  And I wait for 5 seconds
  And I publish the page
  And I wait for 2 seconds
  And I navigate to page "http://localhost:3002/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "<NEW_PAGE_TITLE>"