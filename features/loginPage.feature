@regression @smoke
Feature: Testing login functionality

#  In this test, I am passing test data from data table below

  Scenario Outline: To test successful login with valid credentials

    Given I am on the Snappet website <environmentUrl>
    Then The title of page should be "Snappet Teacher Dashboard"
    When I enter username password <username> <password> and click on login button
    Then I should go to home page
    Then I logout

    Examples:
      | username             | password      | environmentUrl |
      |  "ChallengeTeacher1" | "*7jdfD%^st0" |    "/"         |