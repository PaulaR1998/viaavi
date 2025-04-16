import './commands'
import { faker } from '@faker-js/faker';
Cypress.on('test:before:run', () => {
    console.log("Faker Global: ", faker);
  });
   
   