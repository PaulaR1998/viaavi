import { faker } from '@faker-js/faker';
import { cpf } from 'cpf-cnpj-validator';


describe('Gestão de Usuários - Cadastro', () => {
  before(() => {
    cy.loginGerenciador();
  });
 
  it('Deve acessar e validar os elementos da Gestão do Usuário', () => {
    const nomeCompleto = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const telefone = `11${faker.phone.number('9########')}`; // Gera um celular com DDD 11
    const cpfValido = cpf.generate();
    const email = faker.internet.email();
 
    cy.get('#menuUserManagementButton').click();
    cy.contains('Gestão de Usuários').should('be.visible');
    cy.contains('Novo').click();
    cy.get('#new-user').click();
 
    cy.get('#emailInput').type(email);
    cy.get('#nameInput').type(nomeCompleto);
    cy.get('#identifierInput').type(cpfValido);
    cy.get('#phoneInput').type(telefone);    
    cy.get('#bio').type('teste teste teste teste');
    cy.get('#profileSelect').click()
    cy.get('[role="option"]').contains('Aluno').click();
    cy.get('#submitEditUser').click();
    //cy.get('body').click();
    cy.contains('button', 'Continuar')
    .click({ force: true });
    cy.wait(3000);
   cy.get('#goBackEditUser').click();
    
   });

  });   