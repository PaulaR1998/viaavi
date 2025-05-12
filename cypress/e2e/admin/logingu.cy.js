// cypress/e2e/loginUsuario.cy.js

// Criando o comando dentro do mesmo arquivo (pode ser movido pra commands.js depois)
Cypress.Commands.add('loginUsuario', () => {
  cy.visit('http://172.16.20.237:8108/login')
  cy.get('#identifierInput').type('66960812089')        
  cy.get('#passwordInput').type('hashed_password1')         
  cy.get('#submitLogin').click()                       
  cy.url().should('include', '/home')
})

describe('Login e validação da Home', () => {
  before(() => {
    cy.loginUsuario() // reaproveitando o login como comando
  })

  it('deve conter os componentes principais da Home', () => {
    cy.get('img[alt="home banner"]', { timeout: 10000 }).should('be.visible')
  })
})

