# Snappet Challenge

# Framework : webdriverio-cucumber

# Requirements
node - 10.8.0+ <br/>
npm - 6.2.0+ <br/>
<br/>  

# Commands to run the test suite with different browsers
chrome - npm run test-chrome <br/>
safari - npm run test-safari  <br/>

# How to set-up
1. Install node.js - Link:https://nodejs.org/en/
2. Run npm install to get all dependencies
3. Install selenium 
4. Start selenium standalone service by passing this value : services: ['selenium-standalone'] in wdio.conf.js

# Details about Framework:
1. The feature file under test can be listed in below format in in wdio.conf.js:
specs: [
        './features/**/loginPage.feature',
        
    ]
    
 2. The base url can be passed in in wdio.conf.js: 
 baseUrl: 'https://teacher.snappet.org' - Depending on the environment, a parameter can be defined which can take input for test environment or acceptance environment, and that value can be appended to this base url.
 
 3. The step-definitions can be listed in below format:
 cucumberOpts: {
        require: ['./step-definition/loginPageSteps.js']
        }
        
 4. Example of feature file:
 
  Feature: Testing login functionality
  Scenario Outline: To test successful login with valid credentials

    Given I am on the Snappet website <environmentUrl>
    Then The title of page should be "Snappet Teacher Dashboard"
    When I enter username password <username> <password> and click on login button
    Then I should go to home page
    Then I logout

    Examples:
      | username             | password      | environmentUrl |
      |  "ChallengeTeacher1" | "*7jdfD%^st0" |    "/"         |
      
    NOTE : I have used data table to fetch data in this framework
    
    
