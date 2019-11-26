import HomePage from '../PageObjects/Homepage'
import ProductPage from '../PageObjects/ProductPage'
import AddressPage from '../PageObjects/AddressPage'
describe('Test Suite FlipKart',function()
{
    const homePage = new HomePage()
    const productPage = new ProductPage()
    const addressPage = new AddressPage()
    const username = 'cypress'
    const password = 'password123'
    it('Test Case for Add To Cart',function()
    {
        cy.visit("https://www.flipkart.com/")
        cy.wait(3000)
       
        //Searching Books
        homePage.getSearchBox().type('books')
        cy.wait(3000)

        //Clicking the Search
        homePage.getSearchButton().click('center')
        cy.wait(3000)
       
        //Select a Book
        productPage.getProductToSelect().click('center')
        cy.wait(3000)

        //Verifying Buy Button
       // cy.get('form').eq('1').submit().find('button[type="button"]').doubleclick('center')
        productPage.getBuyButton().should('be.visible')

        cy.get('li>button._2AkmmA._2Npkh4._2MWPVK').should('be.visible')
      
        cy.get('li>button._2AkmmA._2Npkh4._2MWPVK').click('center')
        //Click on Buy Button
      //cy.get('form > ._2AkmmA').click('center')
           //cy.get('form > ._2AkmmA').click({force: true})

  
    }
)

it('Test Case for Adding Shippping Address',function()
{
    cy.visit("https://www.flipkart.com/account/?rd=0&link=home_account")
    cy.wait(3000)
   
    //Click on Login
    //homePage.getLoginPage().click('center')
    //cy.wait(3000)

    //Enter the UserName
    homePage.getUserName().type('m.veerasekaran@gmail.com')
    cy.wait(3000)
   
     //Enter the UserName
     homePage.getPassword().type('anbanveera@5781')
     cy.wait(3000)

     //Enter the UserName
     homePage.getLoginButton().click('center')
     cy.wait(3000)

     //Click on Manage Addresses
     addressPage.getManageAddresses().click({force: true})
     cy.wait(500)
     //Click on Add Adress
     addressPage.getAddAddresses().click('center')
     
     //Filling the below address details
     addressPage.getName().type('FlipkartTestVeera')
     cy.wait(500)
     addressPage.getPhone().type('9988776655')
     cy.wait(500)
     addressPage.getPincode().type('560068')
     cy.wait(500)
     addressPage.getLocality().type('veera layout')
     cy.wait(500)
     addressPage.getAddress().type('madiwala')
     cy.wait(500)
     addressPage.getCity().type('Bangalore')
     cy.wait(500)
     cy.get('select').select('Karnataka').should('have.value','Karnataka')
     cy.wait(500)
     cy.get('div[class="_6ATDKp"]').eq('1').click('center')
     cy.wait(1000)
     addressPage.getSaveButton().click('center')
     cy.wait(1000)
     addressPage.getConfirmAddress().click('center')
     
     //Verify the added address
     addressPage.getVerifyAddress().should('be.visible')

     

}
)

it('Test Case for Removing Shippping Address',function()
{
    cy.visit("https://www.flipkart.com/account/?rd=0&link=home_account")
    cy.wait(3000)
   
    //Click on Login
    //homePage.getLoginPage().click('center')
    //cy.wait(3000)

    //Enter the UserName
    homePage.getUserName().type('m.veerasekaran@gmail.com')
    cy.wait(3000)
   
     //Enter the UserName
     homePage.getPassword().type('anbanveera@5781')
     cy.wait(3000)

     //Enter the UserName
     homePage.getLoginButton().click('center')
     cy.wait(3000)

     //Click on Manage Addresses
     addressPage.getManageAddresses().click({force: true})
     cy.wait(500)
     //Click on Add Adress
     addressPage.getAddAddresses().click('center')
     
     //Filling the below address details
     addressPage.getName().type('FlipKartTestVeera')
     addressPage.getPhone().type('9988776655')
     addressPage.getPincode().type('560068')
     addressPage.getLocality().type('veera layout')
     addressPage.getAddress().type('madiwala')
     addressPage.getCity().type('Bangalore')
     cy.get('select').select('Karnataka').should('have.value','Karnataka')
     cy.get('div[class="_6ATDKp"]').eq('1').click('center')
     addressPage.getSaveButton().click('center')
     cy.wait(1000)
     addressPage.getConfirmAddress().click('center')
     
     //Verify the added address
     addressPage.getVerifyAddress().should('be.visible')

     

}
)


}
)