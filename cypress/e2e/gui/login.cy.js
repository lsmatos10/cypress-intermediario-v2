describe('login', () => {
  it('Realizando Login', () => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
})