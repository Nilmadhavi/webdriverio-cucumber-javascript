const expect = require('chai').expect;
const {Given, When, Then} = require("cucumber");

const loginUsername = "//*[@id='UserName']";
const loginPassword = "//*[@id='Password']";
const loginButton = "//button[@type='submit']";
const teacherDashboardText = "//h1[contains(text(),'ChallengeTeacher1 Teacher1Last')]";
const badgeCircle = "//span[@class='badge badge-circle']";
const logoutButton = "//a[@class='negative']";
const addSubject = "//div[@class='icon-holder btn btn-round btn-default']";
const addSubjectPopUpverifyText = "//h2[@data-bind='text: Strings.WhichSubjectToAdd']";
const subjectTaal = "span=Taal";
const subjectSpelling = "span=Spelling";
const selectSubjectDropdown = "//span[@class='select2-selection select2-selection--single']";
const selectSubjectNextButton = "//a[@class='btn btn-primary']";
const suggestionForTall = "//span[contains(text(),'A. Staal Grammatica, gr 4')]";
const activateSubject = "//button[contains(text(),'Activate subject')]";
const subjectActivated= "(//strong[contains(text(),'Taal')])[1]";
const addCourse = "//a[@class='btn btn-primary btn-add-method']";
const addlesson = "//button[@class='btn btn-primary']";
const addSectionIcon = "//div[@class='panel add-new-panel']//div[@class='add-icon']";
const sectionNameTextField = "//input[@type='text']";
const addSectionBtn= "//button[@class='btn btn-primary']";
const homeButton = "//img[@src='/Areas/V3/dist/assets/LogoClean.svg']";
const subjectEditBtn = "//a[@class='btn btn-txt']";
const removeSubject = "//span[@data-bind='text: Strings.RemoveSubject']";
const removeOk = "//button[contains(text(),'Remove')]";

//go to login page
Given(/^I am on the Snappet website "([^"]*)"$/, (envDetail) => {
    browser.url(envDetail);
});

// title check
Then(/^The title of page should be "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
});

// full login function
When(/^I enter username password "([^"]*)" "([^"]*)" and click on login button$/, (user, password) => {
    browser.waitForVisible(loginUsername, 3000);
    browser.element(loginUsername).setValue(user);
    browser.element(loginPassword).setValue(password);
    browser.click(loginButton);
    browser.pause(2000);
});

// snappet dasboard verify
Then("I should go to home page", () => {
    browser.waitForVisible(teacherDashboardText, 5000);
    expect(browser.getUrl()).to.be.eq("https://teacher.snappet.org/V3/131575/#period=Today");
});


//logout
Then("I logout", () => {
    browser.waitForVisible(badgeCircle, 3000);
    browser.click(badgeCircle);
    browser.waitForVisible(logoutButton, 3000);
    browser.click(logoutButton);
    browser.waitForVisible(loginButton, 3000);
});

// Add subject page
When(/^I click on activate subject button$/, () => {
    browser.click(addSubject);
    browser.waitForVisible(addSubjectPopUpverifyText, 3000);
});

// pop-up window
Then(/^The window to activate subject should open$/, () => {
    //Add assertions to verify the new window opens
});

// Select subject from drop-down
Then(/^I Select subject from dropdown and follow the next steps to activate the subject$/, () => {

    browser.click(selectSubjectDropdown);
    browser.waitForVisible(subjectTaal, 3000);
    browser.click(subjectTaal);
    browser.pause(2000);
    browser.waitForVisible(selectSubjectNextButton, 20000);
    browser.click(selectSubjectNextButton);
    browser.pause(2000);
    browser.waitForVisible(selectSubjectNextButton, 20000);
    browser.click(selectSubjectNextButton);
    browser.waitForVisible(suggestionForTall, 3000);
    browser.click(suggestionForTall);
    browser.waitForVisible(activateSubject, 3000);
    browser.click(activateSubject);
    browser.waitForVisible(subjectActivated, 3000);
});

// verify subject is created
Then(/^The subject should be displayed on the home page$/, () => {
    //Add assertions to verify the new added subject
});

// add a new section
When(/^I click on the new subject created and add a new section "([^"]*)"$/, (sectionName) => {
    browser.click(subjectActivated);
    browser.waitForVisible(addCourse, 3000);
    browser.click(addSectionIcon);
    browser.waitForVisible(sectionNameTextField, 3000);
    browser.element(sectionNameTextField).setValue(sectionName);
    browser.click(addSectionBtn);
});

// verify new section is created
Then(/^The new section should be added in the subject$/, () => {
    //Add assertions to verify the new section is added
});

// I go to home button
When(/^I go to home button$/, () => {
    browser.click(homeButton);
    browser.pause(2000);
});