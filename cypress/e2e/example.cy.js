it('Visual Regression Testing', () => {
  cy.visit('/')
  cy.matchImageSnapshot()
})
