@regression
Feature: Testing subject maintenance task: 'add-section' functionality

  Scenario Outline: Add section

    Given I am on the Snappet website <environmentUrl>
    Then The title of page should be "Snappet Teacher Dashboard"
    When I enter username password <username> <password> and click on login button
    Then I should go to home page
    When I click on activate subject button
    Then The window to activate subject should open
    When I Select subject from dropdown and follow the next steps to activate the subject
    Then The subject should be displayed on the home page
    When I click on the new subject created and add a new section <section>
    Then The new section should be added in the subject

    Examples:
      | username             | password      | environmentUrl | section                       |
      |  "ChallengeTeacher1" | "*7jdfD%^st0" | "/"            |"BDD tools and WebDriver"      |
