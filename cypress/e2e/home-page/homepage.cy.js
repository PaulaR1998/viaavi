const { it } = require("@faker-js/faker");

beforeEach(() => {
  cy.viewport(1440, 900); // Define a resolução da tela
  cy.visit('http://172.16.20.237:8109/home'); 
  cy.url().should('include', '/home');
  cy.aceitarCookies();
});
  
describe('Navegação no menu Recursos Educacionais', () => {
  it('Deve clicar na opção Ver tudo', () => {
    cy.get('#radix-«Rlpjb»').click(); // Garantir que a ação anterior está sendo feita
    cy.get('.relative.flex.select-none.items-center.gap-2.rounded-sm').click();
  });


  it('Deve acessar a página Trilhas de aprendizagem', () => {
    cy.get('#radix-«R5edb»').click();
    cy.contains('div[role="menuitem"]', 'Trilhas de aprendizagem').click();
  });
});

describe('Navegação no menu Recursos educacionais', () => {
  it('Deve acessar a página Palestras', () => {
    cy.get('#radix-«R9edb»').click();
    cy.contains('div[role="menuitem"]', 'Palestras').click();
  });

  it('Deve acessar a página Lives', () => {
    cy.get('#radix-«R9edb»').click();
    cy.contains('div[role="menuitem"]', 'Lives').click();
  });

  it('Deve acessar a página Vídeos educacionais', () => {
    cy.get('#radix-«R9edb»').click();
    cy.contains('div[role="menuitem"]', 'Vídeos educacionais', { matchCase: false }).click();
  }); 
});

describe('Navegação no menu Downloads', () => {
  it('Deve acessar a página Conteúdos', () => {
    cy.get('#radix-«Rdedb»').click();
    cy.contains('div[role="menuitem"]', 'Conteúdos').click();
  });

  it('Deve acessar a página Arquivos PDF', () => {
    cy.get('#radix-«Rdedb»').click();
    cy.contains('div[role="menuitem"]', 'Arquivos PDF').click();
  });
  it('Deve acessar a página Links', () => {
    cy.get('#radix-«Rdedb»').click();
    cy.contains('div[role="menuitem"]', 'Links').click();
  });
});

describe('Navegação no menu Acervo', () => {
  it('Deve acessar a página Noticias', () => {
    cy.get('#radix-«Rhedb»').click();
    cy.contains('div[role="menuitem"]', 'Notícias').click();
  });
  it('Deve acessar a página Artigos', () => {
    cy.get('#radix-«Rhedb»').click();
    cy.contains('div[role="menuitem"]', 'Artigos').click();
  });
});
  describe('Navegação no menu Institucional', () => {
    it('Deve acessar a página Sobre', () => {
      cy.get('#radix-«Rledb»').click();
      cy.contains('div[role="menuitem"]', 'Sobre').click();
    });
    it('Deve acessar a página Manifesto Via', () => {
      cy.get('#radix-«Rledb»').click();
      cy.contains('div[role="menuitem"]', 'Manisfesto Via').click();

    });
    it('Deve acessar a página Tour do site', () => {
      cy.get('#radix-«Rledb»').click();
      cy.contains('div[role="menuitem"]', 'Tour do site').click();
    });
});
  describe('Navegação botão Entrar/Criar Conta', () => {
  it('Deve acessar a página Entrar no Login', () => {
    cy.get('.gap-7 > .rounded-md').click();
     
  });
  it('Deve acessar a página Crie sua Conta', () => {
    cy.get('.gap-7 > .inline-flex').click();
   
});
describe('Validar banner inicial', () => {
  it('Deve Verificar banner inicial existe na página', () => {
  cy.get('input[placeholder="Procure por notícias, artigos ou termos de interesse"]')
      .should('be.visible')  
      .and('have.attr', 'placeholder', 'Procure por notícias, artigos ou termos de interesse')
  });
  t('Deve clicar en crie sua conta', () => {
    cy.get('.gap-8 > .flex > .py-3').click();
    
  });




    });
  });