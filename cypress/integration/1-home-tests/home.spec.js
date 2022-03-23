const requiredExample = require('../../fixtures/exchanges')


describe('local directory app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    });

    it('displays 10 exchanges', () => {
        cy.get('tr').should('have.length', 10)
    })

    it('Check loads data', () => {
        cy.intercept({
            method: 'GET',
            url: '/api/v3/exchanges?*',
            hostname: 'api.coingecko.com',
          }, { fixture: 'exchanges.json' })
        cy.get('tbody tr').first().should("have.id", "binanceid")
    })


    
})
  