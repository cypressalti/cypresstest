class HomePage
 {

    getSearchBox()
    {
      return cy.get('input[name="q"]')
    }

    getSearchButton()
    {
      return cy.get('button[type="submit"]')
    }

    getLoginPage()
    {
      return cy.get('a[href="/account/login?ret=/"]')
    }

    getUserName()
    {
      return cy.get('input[class="_2zrpKA _1dBPDZ"]')
    }

    getPassword()
    {
      return cy.get('input[type="password"]')
    }

    getLoginButton()
    {
      return cy.get('button[class="_2AkmmA _1LctnI _7UHT_c"]')
    }
}
export default HomePage;