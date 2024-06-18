import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { registerPage } from '../../../pages/registerPage'
import testData from '../../../fixtures/testData.json'

const registerObj = new registerPage();

Given("user registration page is opened", ()=>{
    registerObj.openURL();
});

When("user entered the form details and click on continue", ()=>{
    registerObj.enterFirstName(testData.registerForm.firstName);
    registerObj.enterLastName(testData.registerForm.lastName);
    registerObj.enterEmail(testData.registerForm.email);
    registerObj.enterTelephone(testData.registerForm.telephone);
    registerObj.enterPassword(testData.registerForm.password);
    registerObj.selectCheckBox();
    registerObj.clickContinue();
});

Then("user is registered in the application",()=>{

})