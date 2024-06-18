import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';
import { homePage } from '../../../pages/homePage';
import testData from '../../../fixtures/testData.json'

const hp = new homePage();

Given("logged into the application", async()=>{
    await cy.login(testData.login.username, testData.login.password);
});

When("user searched for the product", ()=>{
    hp.searchProduct(testData.product.productName);
});

And("add the product to the cart", ()=>{
    hp.addToCart();
});

Then("verify successful message is displayed", async()=>{
    await hp.verifySuccessMessage().should('contain', testData.message.successMessage);
});

When("click on Add to wishlist button", async()=>{
    await hp.addToWishlist();
});

Then("verify wishlist successful message is displayed", async()=>{
    await hp.verifySuccessMessage().should('contain', testData.message.wishListSuccess);
})

