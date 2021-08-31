it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login(
    Cypress.env('USER_EMAIL'),
    Cypress.env('USER_PASSWORD'),
    { cacheSession: false }
  )
  cy.wait(10000)
  cy.wait('@getNotes')
})

