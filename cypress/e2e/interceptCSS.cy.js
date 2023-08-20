describe('CSS interception', () => {
  it('intercepts the CSS and change it when the page loads', () => {
    cy.intercept(
      'GET',
      '**/style.css',
      { fixture: 'style.css' }
      // { body: '' }
    )

    cy.visit('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html')
  })
})