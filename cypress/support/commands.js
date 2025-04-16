Cypress.Commands.add('loginGerenciador', () => {
    cy.visit('http://172.16.20.237:8108/login')
    cy.get('#identifierInput').type('66960812089')        
    cy.get('#passwordInput').type('hashed_password1')         
    cy.get('#submitLogin').click()                       
    cy.url().should('include', '/home') 
  })
  