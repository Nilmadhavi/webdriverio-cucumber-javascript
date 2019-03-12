@regression
Feature: Testing 'create subject' functionality

  Scenario Outline: To test successful creation of a subject in teacher's dashboard home page

    Given I am on the Snappet website <environmentUrl>
    Then The title of page should be "Snappet Teacher Dashboard"
    When I enter username password <username> <password> and click on login button
    Then I should go to home page
    When I click on activate subject button
    Then The window to activate subject should open
    When I Select subject from dropdown and follow the next steps to activate the subject
    Then The subject should be displayed on the home page

    Examples:
      | username             | password      |environmentUrl|
      |  "ChallengeTeacher1" | "*7jdfD%^st0" |     "/"      |




