
describe('My First Test Suite',function()
{
    const username = 'cypress'
    const password = 'password123'
    it('My First Test Case LoginLogout',function()
    {
        cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
        cy.get('input#username').clearLocalStorage
       // cy.get('input#username').clear
        cy.get('input#username').type('cypresstestveera@gmail.com')
        cy.get('input#password').type('Alti@123')
        cy.wait(5000)
        cy.get('button[type="submit"]').click('topLeft')
        cy.wait(20000)
        //cy.get('button[data-control-name="share.sharebox_focus"]').click('topLeft')
       // cy.wait(10000)
        //cy.get('div[role="textbox"]').type('topLeft')
        cy.get('button[data-control-name="nav.settings"]').click('center')
        cy.wait(5000)
        cy.get('a[data-control-name="nav.settings_signout"]').click('center')

        //cy.get('div[role="textbox"]').type('topLeft')
        //cy.get('.share-box__text-editor-container').type('My First Test for Paypal')
        //cy.wait(5000)
        //cy.get('button#ember617').click('topLeft')
     
    }
)


 it('My Second Test Case Write Post',function()
{
    cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
    cy.get('input#username').clearLocalStorage
   // cy.get('input#username').clear
    cy.get('input#username').type('cypresstestveera@gmail.com')
    cy.get('input#password').type('Alti@123')
    cy.wait(5000)
    cy.get('button[type="submit"]').click('topLeft')
    cy.wait(20000)
    cy.get('button[data-control-name="share.sharebox_focus"]').click('topLeft')
    cy.wait(10000)
    cy.get('div[role="textbox"]').type('topLeft')
    cy.get('.share-box__text-editor-container').type('My First Test for Paypal')
    cy.wait(5000)
    cy.get('button#ember617').click('topLeft')
 
}
)

it('My Thired Test Case Click on Article',function()
{
    cy.visit("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin")
    cy.get('input#username').clearLocalStorage
   // cy.get('input#username').clear
    cy.get('input#username').type('cypresstestveera@gmail.com')
    cy.get('input#password').type('Alti@123')
    cy.wait(5000)
    cy.get('button[type="submit"]').click('topLeft')
    cy.wait(20000)
    //cy.get('ul.mt2 list-style-none mb1').find('a.feed-shared-news-module__link link-without-hover-state ember-view').eq(1).click('topLeft')
    cy.get('.identity-widget-item__headline t-12 t-black--light t-bold attributed-text ember-view').click('center')

 
}
)
}
)