import './commands'
import { faker } from '@faker-js/faker';
Cypress.on('test:before:run', () => {
    console.log("Faker Global: ", faker);
  });
  
import { cpf } from 'cpf-cnpj-validator';
Cypress.on('test:before:run', () => {
  console.log("CPF Validator Global: ", cpf);
});
Cypress.Commands.add('gerarCPF', () => {
  return cpf.generate();
});

Cypress.Commands.add('validarCPF', (cpfString) => {
  return cpf.isValid(cpfString);
});

   