class ProductPage
{
    getProductToSelect()
    {
        return cy.get('.Zhf2z-').eq('0').invoke('removeAttr','target')
    }

    getBuyButton()
    {
        return cy.get('button[type="button"]')
    }
}
export default ProductPage;