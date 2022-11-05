@register
Feature: Register
  I want to register to the aplication

  Background: 
    Given User navigates to register page

  @register @positive
  Scenario Outline: Test Register with valid user
    When User input valid <fullname> fullname
    And User input email <email>
    And User enter password <password>
    Then Click on Login button and navigate to dasb page

    Examples: 
      | fullname    | email             | password |
      | Bagus Cipta | bagus13@gmail.com | bagus124 |

  @register @negative
  Scenario Outline: Test Register with invalid user
    When User enter valid <fullname> fullname
    And User enter invalid email <email>
    And User input password <password>
    Then Click Login button and navigate to dasb page

    Examples: 
      | fullname | email | password |
      | Bagus M  | ()    | bagus17  |
