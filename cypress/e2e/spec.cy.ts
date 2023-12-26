describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Syncfusion Angular UI Grid!')
  })

  it('should contain Grid rows', () => {
    cy.visit('/')
    cy.get('.e-grid').should('be.visible')
    cy.get('.e-grid').find('.e-row').should('have.length', 3)
  })
})
