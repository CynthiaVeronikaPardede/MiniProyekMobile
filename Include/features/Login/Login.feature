@login
Feature: Login
  I want to login
  
  Background:
		Given User click login link
		
  @login @positive
  Scenario Outline: Test login with valid user
    
    When User input with valid <email> email
    And User input with valid <password> password
    And User click Login button
    Then User is Navigate to home page

    Examples: 
      | email              | password   |
      | frizzi12@gmail.com | testing123 |

  @login @negative
  Scenario Outline: Test login with invalid user
    When User input with invalid <email> email
    And User input with invalid <password> password
    And User click Login buttom
    Then User is Navigate to dasboard page

    Examples: 
      | email   | password |
      | manusia |    12345 |
