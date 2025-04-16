import { faker } from '@faker-js/faker';
 
describe('Gestão de Usuários - Cadastro', () => {
  before(() => {
    cy.loginGerenciador();
  });
 
  it('Deve acessar e validar os elementos da Gestão do Usuário', () => {
    const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const telefone = `11${faker.phone.number('9########')}`; // Gera um celular com DDD 11
    const cpf = faker.helpers.replaceSymbols('###########');
    const email = faker.internet.email();
 
    cy.get('#menuUserManagementButton').click();
    cy.contains('Gestão de Usuários').should('be.visible');
    cy.contains('Novo').click();
    cy.get('#new-user').click();
 
    cy.get('#emailInput').type(email);
    cy.get('#nameInput').type(nomeCompleto);
    cy.get('#identifierInput').type(cpf);
    cy.get('#phoneInput').type(telefone);    
    cy.get('#bio').type('teste teste teste teste')
   
    
   });
});