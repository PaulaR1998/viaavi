Cypress.Commands.add('loginGerenciador', () => {
    cy.visit('http://172.16.20.237:8108/login')
    cy.get('#emailInput').type('admin1@viaavi.com')        
    cy.get('#passwordInput').type('Senha123!')         
    cy.get('#submitLogin').click()                       
    cy.url().should('include', '/home') 
  })
  
  Cypress.Commands.add('aceitarCookies', () => {
    cy.get('.bottom-0 > .flex > .bg-raspberry').click();

  })