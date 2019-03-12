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
const selectSubjectDropdown = "//span[@class='select2-selection select2-selection--single']";
const selectSubjectNextButton = "//a[@class='btn btn-primary']";
const suggestionForTall = "//span[contains(text(),'A. Staal Grammatica, gr 4')]";
const activateSubject = "//button[contains(text(),'Activate subject')]";
const subjectActivated= "(//strong[contains(text(),'Taal')])[1]";
const addCourse = "//a[@class='btn btn-primary btn-add-method']";
const addlesson = "//button[@class='btn btn-primary']";

// go to login page
Given(/^I am on the Snappet website/, () => {
    browser.url("/");
});

// title check
Then(/^I expect the title of the page "([^"]*)"$/, (title) => {
    expect(browser.getTitle()).to.be.eql(title);
});

// enter  login username
When(/^User enters username "([^"]*)"$/, (user) => {
    browser.waitForVisible(loginUsername, 3000);
browser.element(loginUsername).setValue(user);
});

// enter  login password
When(/^User enters password "([^"]*)"$/, (password) => {
    browser.element(loginPassword).setValue(password);
});

// click on login button
When(/^I click on login button$/, () => {
    browser.click(loginButton);
browser.waitForVisible(teacherDashboardText, 5000);
});

// snappet dasboard verify
Then("I go to teachers dashboard page", () => {
    //expect(browser.getUrl()).to.be.eq("https://teacher.snappet.org/V3/131575/#period=Today");
});


//logout
Then("I logout", () => {
    browser.click(badgeCircle);
    browser.waitForVisible(logoutButton, 3000);
    browser.click(logoutButton);
    browser.waitForVisible(loginButton, 3000);
});