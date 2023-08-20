describe('HTML interception', () => {
  it('intercepts the HTML and change it when the page loads', () => {
    cy.intercept(
      'GET',
      '**/index.html',
      { fixture: 'index.html' }
    )

    cy.visit('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html')

    cy.contains('h1', 'Hello, world!').should('be.visible')
  })
})
