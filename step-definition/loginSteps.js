const expect = require('chai').expect;
const {Given, When, Then} = require("cucumber");




// go to login page
Given(/^I am on the herokuapp website/, () => {
    browser.url("/");
    browser.pause(30000);
});

Then(/^The title of page should be/, (title) => {
    //expect(browser.getTitle()).to.be.eql(title);
});

