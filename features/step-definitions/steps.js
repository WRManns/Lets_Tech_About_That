const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pageobjects/login.page');
const SignupPage = require('../pageobjects/signup.page')
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const PostPage = require('../pageobjects/post.page');


const pages = {
  login: LoginPage,
  signup: SignupPage,
  dashboard: SecurePage,
  homepage: HomePage
}


//Test of the sign-up form functionality
Given('User is on the {} page', async (signup) => {
  await pages[signup].open()
});

When('They submit a unique {word} and {} and {}', async (username, email, password) => {
  await SignupPage.signup(username, email, password)
});

Then('User enters {} into title, {} into the body, and clicks submit', async (title, body) => {
  await SecurePage.blogPost(title, body)
});


//Test of the login form functionality

Then('User logs in with {} and {}', async (email, password) => {
  await LoginPage.login(email, password)
});

Then('{} page should load', async (dashboard) => {
  await SecurePage.open(dashboard)
});


//Test of Blog Post functionality

Then('User sees their {} on the left side of the screen', function (title) {
  console.log(title)
});

Then('The the User decides to "delete" their first post', async () => {
  await SecurePage.deletePost()
});


//Testing Comment functionality

Given('User has navigated back to the homepage', async () => {
  await HomePage.homePage();
});

Given('Clicked the "Go to Post" button', async () => {
  await HomePage.postBtnClick();
})

When('User enters {} into text area and clicks Submit Comment button', async (comment) => {
  await PostPage.postComment(comment)
});

Then('User sees their comment added to the Comments section', function () {

});


//Testing the logout functionality

When('I navigate to the homepage with the homepage button', async () => {
  await HomePage.homePage();
});

Then('I click the logout button', async () => {
  await HomePage.logoutClick();
});

Then('I am no longer logged in', function () {
});
