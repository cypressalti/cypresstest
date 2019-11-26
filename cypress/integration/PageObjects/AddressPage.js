class AddressPage
{
    getManageAddresses()
    {
      return cy.get('div>a[href="/account/addresses"]')
    }

    getAddAddresses()
    {
      return cy.get('div[class="_2kr2AM"]')
    }

    getName()
    {
      return cy.get('input[name="name"]')
    }

    getPhone()
    {
      return cy.get('input[name="phone"]')
    }

    getPincode()
    {
      return cy.get('input[name="pincode"]')
    }

    getLocality()
    {
      return cy.get('input[name="addressLine2"]')
    }

    getAddress()
    {
      return cy.get('textarea[name="addressLine1"]')
    }

    getCity()
    {
      return cy.get('input[name="city"]')
    }

    getSelectState()
    {
      return cy.get('textarea[name="city"]')
    }

    getSaveButton()
    {
      return cy.get('button[class="_2AkmmA EqjTfe eLvSG3 _7UHT_c"]')
    }

    getConfirmAddress()
    {
      return cy.get('button[class="_2AkmmA _1dTEZX _1eFTEo"]')
    }

    getVerifyAddress()
    {
      return cy.get('span[class="_2Fw4MM"]')
    }
}

export default AddressPage;